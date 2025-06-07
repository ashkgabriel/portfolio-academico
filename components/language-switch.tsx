"use client";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/button";

import { useLanguage } from "@/contexts/language-context";

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      isIconOnly
      aria-label="Toggle language"
      className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100"
      variant="light"
      onPress={toggleLanguage}
    >
      <FontAwesomeIcon className="h-5 w-5" icon={faGlobe} />
      <span className="sr-only">{language === "en" ? "PT" : "EN"}</span>
    </Button>
  );
};
