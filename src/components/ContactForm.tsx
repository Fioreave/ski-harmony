import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted");
    onClose();
  };

  const modules = [
    'contactForm.moduleTicketing',
    'contactForm.moduleAccess',
    'contactForm.moduleRental',
    'contactForm.moduleSchool',
    'contactForm.moduleRestaurant',
    'contactForm.moduleBiCrm',
    'contactForm.moduleAnalytics'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{t('contactForm.title')}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>{t('contactForm.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contactForm.name')}</Label>
              <Input id="name" type="text" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">{t('contactForm.company')}</Label>
              <Input id="company" type="text" required />
            </div>

            <div className="space-y-2">
              <Label>{t('contactForm.modules')}</Label>
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
              <Label htmlFor="information">{t('contactForm.information')}</Label>
              <Textarea 
                id="information" 
                placeholder={t('contactForm.informationPlaceholder')}
                rows={4}
                required 
              />
            </div>

            <Button type="submit" className="w-full">
              {t('contactForm.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;