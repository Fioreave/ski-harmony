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

  // ✅ Opciones y estado controlado de módulos (ids en string)
  const moduleOptions = [
    "Ticketing", // Ticketing y Precio Dinámico
    "Access", // Control de Accesos RFID
    "Rental", // Gestión de Alquiler de Equipos
    "School", // Software Escuela de Esquí
    "POS", // Punto de Venta Restauración
    "BICRM", // BI & CRM para Ski Resorts
    "Analytics", // Analytics & Reporting
  ];
  const [selectedModules, setSelectedModules] = React.useState<string[]>([]);

  const toggleModule = (id: string, checked: boolean | "indeterminate") => {
    const on = checked === true;
    setSelectedModules((prev) =>
      on ? [...new Set([...prev, id])] : prev.filter((m) => m !== id)
    );
  };

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
    const info = (
      form.querySelector("#information") as HTMLTextAreaElement
    ).value.trim();

    const message =
      info +
      (selectedModules.length
        ? ` | Módulos: ${selectedModules.join(", ")}`
        : "");

    const payload = {
      type: "contact",
      name,
      email,
      phone,
      company,
      message,
      privacy: acceptPrivacy,
      marketing_optin: acceptMarketing,
      modules: selectedModules, // ✅ ahora es string[]
    };

    setSubmitting(true);
    const result = await sendForm(payload, "contact-form");
    setSubmitting(false);

    if (result.success) {
      alert("✅ Formulario enviado exitosamente. Te contactaremos pronto.");
      form.reset();
      setAcceptPrivacy(false);
      setAcceptMarketing(false);
      setSelectedModules([]);
      onClose();
    } else {
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
    <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="mt-20 mb-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>¡Solicita tu Demo!</CardTitle>
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

            {/* ✅ Módulos controlados */}
            <div className="space-y-2">
              <Label>Módulos de interés</Label>
              <div className="space-y-2">
                {moduleOptions.map((id) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`mod-${id}`}
                      checked={selectedModules.includes(id)}
                      onCheckedChange={(c) => toggleModule(id, c)}
                    />
                    <Label
                      htmlFor={`mod-${id}`}
                      className="text-sm font-normal"
                    >
                      {id}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="information">
                ¿Que disponibilidad tienes? (día/hora)
              </Label>
              <Textarea id="information" rows={4} required />
            </div>

            {/* Consentimientos */}
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
                  *
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
                : "Solicita demo gratuita"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
