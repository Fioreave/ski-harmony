import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'header' | 'footer';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'cat', label: 'CAT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  const currentLangLabel = languages.find(lang => lang.code === language)?.label || 'ES';

  if (variant === 'footer') {
    return (
      <div className="flex space-x-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`text-sm hover:text-primary transition-colors ${
              language === lang.code 
                ? 'text-primary font-semibold' 
                : 'text-muted-foreground'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {currentLangLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            {t(`lang.${lang.code}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;