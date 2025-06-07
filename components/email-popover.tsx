"use client";

import { faEnvelope, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { useState } from "react";

export const EmailPopover = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@gfadevlabs.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Error copying email
    }
  };

  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <Button
          isIconOnly
          className="bg-transparent hover:bg-default-100"
          variant="light"
        >
          <FontAwesomeIcon
            className="h-5 w-5 text-zinc-500 dark:text-zinc-300"
            icon={faEnvelope}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email para contato:
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono bg-default-100 px-2 py-1 rounded text-zinc-800 dark:text-zinc-200">
              {email}
            </span>
            <Button
              className="min-w-16"
              color={copied ? "success" : "primary"}
              size="sm"
              variant="flat"
              onPress={copyToClipboard}
            >
              <FontAwesomeIcon
                className="h-3 w-3"
                icon={copied ? faCheck : faCopy}
              />
              {copied ? "Copiado!" : "Copiar"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
