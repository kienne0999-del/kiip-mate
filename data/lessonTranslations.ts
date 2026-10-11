export type LessonTranslation = {
  title?: string;

 vocabulary?: {
  meaning?: string;
}[];

  grammar?: {
    explanation?: string;
  }[];

  conversation?: string[];

  culture?: string;
};

export const lessonTranslations: Record<string, Record<string, Record<string, LessonTranslation>>> = {
  "1": {
    "1": {
      en: {
        title: "Greetings",

        vocabulary: [
  { meaning: "Hello" },
  { meaning: "Thank you" },
  { meaning: "Name" },
],

        grammar: [
          {
            explanation:
              "Used to say 'to be' after a noun.",
          },
        ],

        conversation: [
          "A: Hello?",
          "B: Hello. Nice to meet you.",
        ],

        culture:
          "In Korea, when meeting someone for the first time, people usually greet politely and may bow slightly.",
      },
          ko: {
      title: "인사",
    },

    zh: {
      title: "问候",
    },
    },
  "2": {
  en: {
    title: "Family",
  },
  ko: {
    title: "가족",
  },
  zh: {
    title: "家庭",
  },
},
  },
};