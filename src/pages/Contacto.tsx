import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

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

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendForm } from "@/utils/api";

const Contacto = () => {
  const { t } = useLanguage();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sede: "",
    subject: "",
    message: "",
    acceptPrivacy: false,
    acceptMarketing: false,
  });

  const offices = [
    {
      name: "ANDORRA",
      address:
        "Passeig de l'Arnaldeta de Caboet, 11, 2n 2a, AD700 Escaldes Engordany",
      phone: "+376 862 762",
    },
    {
      name: "BARCELONA",
      address:
        "Carrer de l'Apresstadora, 12, entlo 1, 08902 L'Hospitalet de Llobregat - Barcelona",
      phone: "+34 932 964 802",
    },
    {
      name: "GIRONA",
      address: "Carrer Pic de Peguera, 11 17003 - Girona",
      phone: "+34 972 462 999",
    },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptPrivacy) {
      toast.error("Debes aceptar la política de privacidad");
      return;
    }

    setLoading(true);

    // Construimos el payload con los nombres que espera el backend
    const payload = {
      type: "contact",
      name: formData.name,
      email: formData.email, // requerido por tu StoreLeadRequest
      phone: formData.phone,
      company: formData.company,
      // si quieres conservar "sede", lo anexamos al subject para no perderlo
      subject: formData.sede
        ? `${formData.subject || "Consulta"} (sede: ${formData.sede})`
        : formData.subject,
      message: formData.message, // requerido para type=contact
      privacy: formData.acceptPrivacy,
      marketing_optin: formData.acceptMarketing,
      // modules no aplica aquí; si algún día agregas checkboxes, envía un array.
    };

    const result = await sendForm(payload, "contact-form");

    setLoading(false);

    if (result.success) {
      toast.success(
        "✅ Formulario enviado correctamente. Te contactaremos pronto."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        sede: "",
        subject: "",
        message: "",
        acceptPrivacy: false,
        acceptMarketing: false,
      });
    } else {
      console.error("Error envío contacto:", result);
      if (result.status === 0) {
        toast.error(
          "Error de conexión. Verifica tu conexión a internet e inténtalo de nuevo."
        );
      } else {
        toast.error(
          `Error al enviar el formulario (HTTP ${
            result.status ?? "?"
          }). Inténtalo de nuevo.`
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto - Ski Solution</title>
        <meta
          name="description"
          content="Contacta con Ski Solution. Encuentra nuestras oficinas en Andorra, Barcelona y Girona. Solicita información sobre nuestros software para estaciones de esquí."
        />
      </Helmet>

      <Navbar />

      <main className="">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                ¡Tu próxima solución tecnológica está a un solo clic de
                distancia!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Completa el formulario con tus datos y déjanos guiarte hacia la
                mejor solución para alcanzar tus metas.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Formulario */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Envíanos tu consulta
                    </CardTitle>
                    <CardDescription>
                      Rellena el formulario y nos pondremos en contacto contigo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre y apellido *</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Sede</Label>
                        <Select
                          value={formData.sede}
                          onValueChange={(value) =>
                            handleInputChange("sede", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una sede..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="andorra">Andorra</SelectItem>
                            <SelectItem value="barcelona">Barcelona</SelectItem>
                            <SelectItem value="girona">Girona</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntanos sobre tu proyecto..."
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="privacy"
                            checked={formData.acceptPrivacy}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "acceptPrivacy",
                                checked as boolean
                              )
                            }
                          />
                          <Label
                            htmlFor="privacy"
                            className="text-sm leading-relaxed"
                          >
                            Acepto la{" "}
                            <a
                              href="#"
                              className="text-primary hover:underline"
                            >
                              política de privacidad
                            </a>{" "}
                            y el tratamiento de mis datos personales *
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="marketing"
                            checked={formData.acceptMarketing}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "acceptMarketing",
                                checked as boolean
                              )
                            }
                          />
                          <Label
                            htmlFor="marketing"
                            className="text-sm leading-relaxed"
                          >
                            Acepto recibir publicidad de terceros
                          </Label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={loading}
                      >
                        {loading ? "Enviando..." : "ENVIAR FORMULARIO"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Información */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Información:</p>
                        <a
                          href="mailto:hello@skisolution360.com"
                          className="text-primary hover:underline"
                        >
                          hello@skisolution360.com
                        </a>
                      </div>
                    </div>

                    {/*<div className="pt-4">
                      <p className="font-medium mb-3">
                        Nuestras redes sociales:
                      </p>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="icon">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>*/}
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Nuestras sedes</h3>
                  {offices.map((office) => (
                    <Card key={office.name}>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {office.name}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">
                              {office.address}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a
                              href={`tel:${office.phone}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {office.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
