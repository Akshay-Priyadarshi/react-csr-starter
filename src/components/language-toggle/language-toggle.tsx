import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/stores";
import { useEffect } from "react";
import { AppLanguages } from "@/types";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {language.toUpperCase()}
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(AppLanguages).map(([lang, langCode]) => (
          <DropdownMenuItem
            key={langCode}
            onClick={() => setLanguage(langCode)}
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
