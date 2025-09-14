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

    const formDataElement = e.target as HTMLFormElement;
    const data = {
      name: (formDataElement.querySelector("#name") as HTMLInputElement).value,
      email: (formDataElement.querySelector("#email") as HTMLInputElement)?.value || "",
      company: (formDataElement.querySelector("#company") as HTMLInputElement).value,
      phone: (formDataElement.querySelector("#phone") as HTMLInputElement)?.value || "",
      message: (formDataElement.querySelector("#information") as HTMLTextAreaElement).value,
      modules: Array.from(
        formDataElement.querySelectorAll("input[type=checkbox]:checked")
      ).map((el) => (el as HTMLInputElement).id),
    };

    setSubmitting(true);
    const result = await sendForm(data, "contact-form");
    setSubmitting(false);

    if (result.success) {
      alert("✅ Formulario enviado exitosamente. Te contactaremos pronto.");
      onClose();
      // Limpiar formulario
      formDataElement.reset();
    } else {
      console.error("Error al enviar:", result);
      if (result.status === 0) {
        alert("Error de conexión. Verifica tu conexión a internet e inténtalo de nuevo.");
      } else {
        alert(`Error al enviar el formulario (HTTP ${result.status ?? "?"}). Inténtalo de nuevo.`);
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
