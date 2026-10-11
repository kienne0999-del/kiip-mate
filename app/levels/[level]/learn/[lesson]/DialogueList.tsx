"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonTranslations } from "@/data/lessonTranslations";

type DialogueListProps = {
  level: string;
  lesson: string;
  conversation: string[];
};

export default function DialogueList({
  level,
  lesson,
  conversation,
}: DialogueListProps) {
  const { language } = useLanguage();

  const translatedConversation =
    lessonTranslations[level]?.[lesson]?.[language]
      ?.conversation;

  const displayConversation =
    translatedConversation || conversation;

  return (
    <div className="mt-5 space-y-2">
      {displayConversation.map((line, index) => (
        <p
          key={index}
          className="rounded-lg bg-slate-50 p-3"
        >
          {line}
        </p>
      ))}
    </div>
  );
}