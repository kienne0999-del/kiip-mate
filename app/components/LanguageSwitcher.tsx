"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="rounded-lg border bg-white px-3 py-2 text-sm"
    >
<option value="vi">🇻🇳 Tiếng Việt</option>
<option value="en">🇬🇧 English</option>
<option value="ko">🇰🇷 한국어</option>
<option value="zh">🇨🇳 中文</option>

<option value="th">🇹🇭 ไทย</option>
<option value="ne">🇳🇵 नेपाली</option>
<option value="id">🇮🇩 Bahasa Indonesia</option>
<option value="fil">🇵🇭 Filipino</option>

<option value="mn">🇲🇳 Монгол</option>
<option value="km">🇰🇭 ខ្មែរ</option>
<option value="my">🇲🇲 မြန်မာ</option>
<option value="si">🇱🇰 සිංහල</option>

<option value="bn">🇧🇩 বাংলা</option>
<option value="ur">🇵🇰 اردو</option>
<option value="uz">🇺🇿 O‘zbekcha</option>
<option value="ru">🇷🇺 Русский</option>
</select>
);
}