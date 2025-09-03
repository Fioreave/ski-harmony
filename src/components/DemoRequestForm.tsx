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
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

interface DemoRequestFormProps {
  onClose: () => void;
}

const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Demo request submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{t('demoForm.title')}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>{t('demoForm.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('demoForm.name')}</Label>
              <Input id="name" type="text" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">{t('demoForm.company')}</Label>
              <Input id="company" type="text" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('demoForm.phone')}</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('demoForm.email')}</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">{t('demoForm.employees')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('demoForm.selectEmployees')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">{t('demoForm.more500')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">{t('demoForm.sector')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('demoForm.selectSector')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ski-resort">{t('demoForm.skiResort')}</SelectItem>
                  <SelectItem value="adventure-park">{t('demoForm.adventurePark')}</SelectItem>
                  <SelectItem value="bike-park">{t('demoForm.bikePark')}</SelectItem>
                  <SelectItem value="museum">{t('demoForm.museum')}</SelectItem>
                  <SelectItem value="other">{t('demoForm.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">{t('demoForm.availability')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('demoForm.selectAvailability')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">{t('demoForm.morning')}</SelectItem>
                  <SelectItem value="afternoon">{t('demoForm.afternoon')}</SelectItem>
                  <SelectItem value="both">{t('demoForm.both')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              {t('demoForm.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoRequestForm;