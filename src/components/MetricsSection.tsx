import React from "react";
import mountainsAurora from "@/assets/mountains-aurora.png";
import { useLanguage } from "@/contexts/LanguageContext";

const MetricsSection = () => {
  const { t } = useLanguage();
  const metrics = [
    { value: "+25", label: "estaciones y escuelas gestionadas" },
    { value: "+25%", label: "incremento en ventas anticipadas" },
    { value: "+30", label: "sistemas PMS/ERP/CRM integrados" },
  ];

  return (
    <section
      className="py-16 bg-secondary relative overflow-hidden"
      style={{
        backgroundImage: `url(${mountainsAurora})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-secondary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">
            {t("metrics.title")}
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-secondary-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-secondary-foreground mb-6 text-sm uppercase tracking-wide">
            {t("metrics.trust")}
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center opacity-60">
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 1
            </div>
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 2
            </div>
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 3
            </div>
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 4
            </div>
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 5
            </div>
            <div className="h-16 bg-background/20 rounded flex items-center justify-center text-xs text-secondary-foreground">
              Cliente 6
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
