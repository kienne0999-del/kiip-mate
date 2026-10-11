"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

const menuTranslations: Record<
  string,
  {
    home: string;
    learn: string;
    practice: string;
    exam: string;
    dashboard: string;
  }
> = {
  vi: {
    home: "Trang chủ",
    learn: "Học",
    practice: "Luyện tập",
    exam: "Thi thử",
    dashboard: "Thống kê",
  },

  en: {
    home: "Home",
    learn: "Learn",
    practice: "Practice",
    exam: "Mock Test",
    dashboard: "Statistics",
  },

  ko: {
    home: "홈",
    learn: "학습",
    practice: "연습",
    exam: "모의시험",
    dashboard: "통계",
  },

  zh: {
    home: "首页",
    learn: "学习",
    practice: "练习",
    exam: "模拟考试",
    dashboard: "统计",
  },

  th: {
    home: "หน้าหลัก",
    learn: "เรียน",
    practice: "ฝึกฝน",
    exam: "แบบทดสอบจำลอง",
    dashboard: "สถิติ",
  },

  ne: {
    home: "गृहपृष्ठ",
    learn: "अध्ययन",
    practice: "अभ्यास",
    exam: "नमुना परीक्षा",
    dashboard: "तथ्याङ्क",
  },

  id: {
    home: "Beranda",
    learn: "Belajar",
    practice: "Latihan",
    exam: "Ujian Simulasi",
    dashboard: "Statistik",
  },

  fil: {
    home: "Home",
    learn: "Pag-aaral",
    practice: "Pagsasanay",
    exam: "Mock Test",
    dashboard: "Estadistika",
  },

  mn: {
    home: "Нүүр",
    learn: "Сурах",
    practice: "Дасгал",
    exam: "Туршилтын шалгалт",
    dashboard: "Статистик",
  },

  km: {
    home: "ទំព័រដើម",
    learn: "រៀន",
    practice: "អនុវត្ត",
    exam: "ប្រឡងសាកល្បង",
    dashboard: "ស្ថិតិ",
  },

  my: {
    home: "ပင်မစာမျက်နှာ",
    learn: "လေ့လာရန်",
    practice: "လေ့ကျင့်ရန်",
    exam: "အစမ်းစာမေးပွဲ",
    dashboard: "စာရင်းအင်း",
  },

  si: {
    home: "මුල් පිටුව",
    learn: "ඉගෙනීම",
    practice: "පුහුණුව",
    exam: "ආදර්ශ විභාගය",
    dashboard: "සංඛ්‍යාලේඛන",
  },

  bn: {
    home: "হোম",
    learn: "শেখা",
    practice: "অনুশীলন",
    exam: "মক টেস্ট",
    dashboard: "পরিসংখ্যান",
  },

  ur: {
    home: "ہوم",
    learn: "سیکھیں",
    practice: "مشق",
    exam: "فرضی امتحان",
    dashboard: "اعداد و شمار",
  },

  uz: {
    home: "Bosh sahifa",
    learn: "O‘rganish",
    practice: "Mashq",
    exam: "Sinov imtihoni",
    dashboard: "Statistika",
  },

  ru: {
    home: "Главная",
    learn: "Учёба",
    practice: "Практика",
    exam: "Пробный тест",
    dashboard: "Статистика",
  },
};

export default function Header() {
  const { language } = useLanguage();

  const text =
    menuTranslations[language] || menuTranslations.vi;

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600"
        >
          KIIP STUDY
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">{text.home}</Link>
            <Link href="/learn">{text.learn}</Link>
            <Link href="/practice">{text.practice}</Link>
            <Link href="/exam">{text.exam}</Link>
            <Link href="/dashboard">{text.dashboard}</Link>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}