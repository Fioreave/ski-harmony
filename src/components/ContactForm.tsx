import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendForm } from "@/utils/api";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const [submitting, setSubmitting] = React.useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = React.useState(false);
  const [acceptMarketing, setAcceptMarketing] = React.useState(false);

  const modules = [
    "contactForm.moduleTicketing",
    "contactForm.moduleAccess",
    "contactForm.moduleRental",
    "contactForm.moduleSchool",
    "contactForm.moduleRestaurant",
    "contactForm.moduleBiCrm",
    "contactForm.moduleAnalytics",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptPrivacy) {
      alert("Debes aceptar la política de privacidad");
      return;
    }

    const form = e.target as HTMLFormElement;

    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const company = (
      form.querySelector("#company") as HTMLInputElement
    ).value.trim();
    const phone =
      (form.querySelector("#phone") as HTMLInputElement)?.value.trim() || "";
    const information = (
      form.querySelector("#information") as HTMLTextAreaElement
    ).value.trim();

    const selectedModules = Array.from(
      form.querySelectorAll<HTMLInputElement>("input[type=checkbox]:checked")
    ).map((el) => el.id);

    // Mensaje + módulos (si hay)
    const message =
      information +
      (selectedModules.length
        ? ` | Módulos: ${selectedModules.join(", ")}`
        : "");

    // ⚠️ Backend: name, email, message, type, privacy (y opcional phone/company)
    const payload = {
      type: "contact",
      name,
      email,
      phone,
      company,
      message,
      privacy: acceptPrivacy,
      marketing_optin: acceptMarketing,
      modules: selectedModules, // opcional; el backend lo admite como array
    };

    setSubmitting(true);
    const result = await sendForm(payload, "contact-form"); // tu helper; el 2º arg es solo etiqueta
    setSubmitting(false);

    if (result.success) {
      alert("✅ Formulario enviado exitosamente. Te contactaremos pronto.");
      form.reset();
      setAcceptPrivacy(false);
      setAcceptMarketing(false);
      onClose();
    } else {
      console.error("Error al enviar:", result);
      const errs = result?.error?.errors;
      if (errs) {
        const pretty = Object.entries(errs)
          .map(([k, v]) => `${k}: ${(v as string[]).join(", ")}`)
          .join("\n");
        alert("Errores de validación:\n" + pretty);
      } else {
        alert(
          `Error al enviar el formulario (HTTP ${
            result.status ?? "?"
          }). Inténtalo de nuevo.`
        );
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{t("contactForm.title")}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>{t("contactForm.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contactForm.name")}</Label>
              <Input id="name" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t("contactForm.company")}</Label>
              <Input id="company" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" />
            </div>

            <div className="space-y-2">
              <Label>{t("contactForm.modules")}</Label>
              <div className="space-y-2">
                {modules.map((moduleKey) => (
                  <div key={moduleKey} className="flex items-center space-x-2">
                    <Checkbox id={moduleKey} />
                    <Label htmlFor={moduleKey} className="text-sm font-normal">
                      {t(moduleKey)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="information">
                {t("contactForm.information")}
              </Label>
              <Textarea id="information" rows={4} required />
            </div>

            {/* ✅ Consentimiento */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={acceptPrivacy}
                  onCheckedChange={(c) => setAcceptPrivacy(Boolean(c))}
                />
                <Label htmlFor="privacy" className="text-sm leading-relaxed">
                  Acepto la{" "}
                  <a
                    href="/privacidad"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    política de privacidad
                  </a>{" "}
                  y el tratamiento de mis datos personales *
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={acceptMarketing}
                  onCheckedChange={(c) => setAcceptMarketing(Boolean(c))}
                />
                <Label htmlFor="marketing" className="text-sm leading-relaxed">
                  Acepto recibir comunicaciones comerciales
                </Label>
              </div>
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting
                ? t("contactForm.sending") ?? "Enviando..."
                : t("contactForm.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
