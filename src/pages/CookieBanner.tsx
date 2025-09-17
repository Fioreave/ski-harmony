import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Link } from "react-router-dom";

const loadAnalytics = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-3THFSJC88X"; // tu ID GA4
  document.body.appendChild(script);

  const w = window as unknown as {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  };

  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: any[]) => {
    w.dataLayer.push(args);
  };

  w.gtag("js", new Date());
  w.gtag("config", "G-3THFSJC88X");
};

export default function CookieBanner() {
  useEffect(() => {
    const consent = getCookieConsentValue("app_cookie_consent");
    if (consent === "true") {
      loadAnalytics();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar todas"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="app_cookie_consent"
      style={{ background: "#111" }}
      buttonStyle={{ color: "#111", background: "#fff", fontWeight: 600 }}
      declineButtonStyle={{ color: "#fff", background: "#444" }}
      expires={180} // días
      onAccept={() => loadAnalytics()}
    >
      Usamos cookies para mejorar tu experiencia.{" "}
      <Link
        to="/cookies"
        style={{ textDecoration: "underline", color: "#0af" }}
      >
        Más info
      </Link>
    </CookieConsent>
  );
}
