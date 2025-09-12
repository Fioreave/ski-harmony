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

    const data = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      company: (document.getElementById("company") as HTMLInputElement).value,
      information: (
        document.getElementById("information") as HTMLTextAreaElement
      ).value,
      modules: Array.from(
        document.querySelectorAll("input[type=checkbox]:checked")
      ).map((el) => (el as HTMLInputElement).id),
    };

    const result = await sendForm(data, "contact-form");

    if (result.success) {
      alert("Formulario de contacto enviado con éxito");
      onClose();
    } else {
      alert("Error al enviar");
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
              <Label htmlFor="company">{t("contactForm.company")}</Label>
              <Input id="company" type="text" required />
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
            <Button type="submit" className="w-full">
              {t("contactForm.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
