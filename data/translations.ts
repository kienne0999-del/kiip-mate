export type HomeTranslation = {
  title: string;
  subtitle: string;

  learn: string;
  learnDescription: string;
  learnButton: string;

  practice: string;
  practiceDescription: string;
  practiceButton: string;

  exam: string;
  examDescription: string;
  examButton: string;

  lessonUnit?: string;
  sessionUnit?: string;
  examUnit?: string;
  questionsDoneLabel?: string;
  correctRateLabel?: string;
  examsDoneLabel?: string;
  reviewQuestionsLabel?: string;
  viewWritingHistoryLabel?: string;
  resultOverviewTitle?: string;
  levelStatsTitle?: string;

  notStartedLabel?: string;
  inProgressLabel?: string;
  completedStatusLabel?: string;
  reviewSectionTitle?: string;
  noReviewQuestions?: string;
  correctAnswerRateTitle?: string;
  wrongQuestionsSummary?: string;
  questionsDoneSummary?: string;
  writingSavedSummary?: string;
};

export const homeTranslations: Record<string, HomeTranslation> = {

  vi: {
    title: "Ôn thi KIIP dễ dàng hơn",
    subtitle: "Học kiến thức, luyện câu hỏi và làm đề thi thử.",

    learn: "Học kiến thức",
    learnDescription:
      "Học ngữ pháp, từ vựng, văn hóa và xã hội Hàn Quốc.",
    learnButton: "Bắt đầu học",

    practice: "Luyện câu hỏi",
    practiceDescription:
      "Luyện câu hỏi theo từng bài và từng cấp độ KIIP.",
    practiceButton: "Bắt đầu luyện",

    exam: "Thi thử",
    examDescription:
      "Làm đề mô phỏng kỳ thi KIIP và xem kết quả.",
    examButton: "Làm đề",
      lessonUnit: "bài",
  sessionUnit: "buổi",
  examUnit: "đề",
  questionsDoneLabel: "Câu đã làm",
correctRateLabel: "Tỷ lệ đúng",
examsDoneLabel: "Đề đã làm",
reviewQuestionsLabel: "Câu cần ôn lại",

resultOverviewTitle: "Tổng quan kết quả",
levelStatsTitle: "Thống kê theo cấp độ",

notStartedLabel: "Chưa bắt đầu",
inProgressLabel: "Đang học",
completedStatusLabel: "Hoàn thành",
  reviewSectionTitle: "Nội dung cần ôn lại",
  noReviewQuestions: "Chưa có câu cần ôn lại.",
  correctAnswerRateTitle: "Tỷ lệ trả lời đúng",
  wrongQuestionsSummary: "Bạn đang có {count} câu cần xem lại.",
  viewWritingHistoryLabel: "Xem lịch sử viết",
   questionsDoneSummary: "Đã làm {count} câu.",
  writingSavedSummary: "Đã lưu {count} bài viết.",
  },

  en: {
    title: "Prepare for KIIP more easily",
    subtitle:
      "Study lessons, practice questions, and take mock tests.",

    learn: "Learn",
    learnDescription:
      "Study Korean grammar, vocabulary, culture, and society.",
    learnButton: "Start Learning",

    practice: "Practice",
    practiceDescription:
      "Practice questions by lesson and KIIP level.",
    practiceButton: "Start Practice",

    exam: "Mock Test",
    examDescription:
      "Take a KIIP mock test and check your results.",
    examButton: "Start Test",
     lessonUnit: "lessons",
  sessionUnit: "sessions",
  examUnit: "exams",
  questionsDoneLabel: "Questions Answered",
correctRateLabel: "Correct Rate",
examsDoneLabel: "Exams Completed",
reviewQuestionsLabel: "Questions to Review",

resultOverviewTitle: "Results Overview",
levelStatsTitle: "Statistics by Level",

notStartedLabel: "Not Started",
inProgressLabel: "In Progress",
completedStatusLabel: "Completed",
 reviewSectionTitle: "Items to Review",
  noReviewQuestions: "There are no questions to review yet.",
  correctAnswerRateTitle: "Correct Answer Rate",
  wrongQuestionsSummary: "You have {count} questions to review.",
  viewWritingHistoryLabel: "View writing history",
   questionsDoneSummary: "Completed {count} questions.",
  writingSavedSummary: "Saved {count} writing exercises.",
  },

  ko: {
    title: "KIIP 시험을 더 쉽게 준비하세요",
    subtitle:
      "학습하고, 문제를 연습하고, 모의시험을 풀어보세요.",

    learn: "학습",
    learnDescription:
      "한국어 문법, 어휘, 문화와 사회를 학습하세요.",
    learnButton: "학습 시작",

    practice: "연습",
    practiceDescription:
      "KIIP 단계와 수업별로 문제를 연습하세요.",
    practiceButton: "연습 시작",

    exam: "모의시험",
    examDescription:
      "KIIP 모의시험을 풀고 결과를 확인하세요.",
    examButton: "시험 시작",
  lessonUnit: "개",
  sessionUnit: "회",
  examUnit: "회",
  questionsDoneLabel: "푼 문제",
correctRateLabel: "정답률",
examsDoneLabel: "응시한 시험",
reviewQuestionsLabel: "복습할 문제",

resultOverviewTitle: "결과 요약",
levelStatsTitle: "단계별 통계",

notStartedLabel: "시작 전",
inProgressLabel: "학습 중",
completedStatusLabel: "완료",
reviewSectionTitle: "복습할 내용",
  noReviewQuestions: "아직 복습할 문제가 없습니다.",
  correctAnswerRateTitle: "정답률",
  wrongQuestionsSummary: "복습할 문제가 {count}개 있습니다.",
  viewWritingHistoryLabel: "쓰기 기록 보기",
  questionsDoneSummary: "{count}문제를 완료했습니다.",
  writingSavedSummary: "쓰기 {count}개를 저장했습니다.",
  },

  zh: {
    title: "更轻松地准备 KIIP",
    subtitle:
      "学习知识、练习题目并参加模拟考试。",

    learn: "学习",
    learnDescription:
      "学习韩语语法、词汇、文化和社会知识。",
    learnButton: "开始学习",

    practice: "练习",
    practiceDescription:
      "按课程和 KIIP 等级练习题目。",
    practiceButton: "开始练习",

    exam: "模拟考试",
    examDescription:
      "参加 KIIP 模拟考试并查看结果。",
    examButton: "开始考试",
    lessonUnit: "篇",
  sessionUnit: "次",
  examUnit: "次",
  questionsDoneLabel: "已答题目",
correctRateLabel: "正确率",
examsDoneLabel: "已完成考试",
reviewQuestionsLabel: "需要复习的题目",

resultOverviewTitle: "成绩概览",
levelStatsTitle: "各等级统计",

notStartedLabel: "尚未开始",
inProgressLabel: "学习中",
completedStatusLabel: "已完成",
  reviewSectionTitle: "需要复习的内容",
  noReviewQuestions: "目前没有需要复习的题目。",
  correctAnswerRateTitle: "答题正确率",
  wrongQuestionsSummary: "你有 {count} 道题需要复习。",
  viewWritingHistoryLabel: "查看写作记录",
  questionsDoneSummary: "已完成 {count} 道题。",
  writingSavedSummary: "已保存 {count} 篇写作。",
  },
    th: {
    title: "เตรียมสอบ KIIP ได้ง่ายขึ้น",
    subtitle: "เรียนเนื้อหา ฝึกทำคำถาม และทำข้อสอบจำลอง",

    learn: "เรียนรู้",
    learnDescription:
      "เรียนไวยากรณ์ คำศัพท์ วัฒนธรรม และสังคมเกาหลี",
    learnButton: "เริ่มเรียน",

    practice: "ฝึกทำคำถาม",
    practiceDescription:
      "ฝึกทำคำถามตามบทเรียนและระดับ KIIP",
    practiceButton: "เริ่มฝึก",

    exam: "ข้อสอบจำลอง",
    examDescription:
      "ทำข้อสอบจำลอง KIIP และตรวจสอบผลลัพธ์",
    examButton: "เริ่มทำข้อสอบ",
  },

  ne: {
    title: "KIIP को तयारी अझ सजिलै गर्नुहोस्",
    subtitle:
      "पाठ अध्ययन गर्नुहोस्, प्रश्न अभ्यास गर्नुहोस् र नमुना परीक्षा दिनुहोस्।",

    learn: "अध्ययन",
    learnDescription:
      "कोरियन व्याकरण, शब्दावली, संस्कृति र समाज अध्ययन गर्नुहोस्।",
    learnButton: "अध्ययन सुरु गर्नुहोस्",

    practice: "अभ्यास",
    practiceDescription:
      "पाठ र KIIP स्तर अनुसार प्रश्नहरूको अभ्यास गर्नुहोस्।",
    practiceButton: "अभ्यास सुरु गर्नुहोस्",

    exam: "नमुना परीक्षा",
    examDescription:
      "KIIP नमुना परीक्षा दिनुहोस् र आफ्नो नतिजा हेर्नुहोस्।",
    examButton: "परीक्षा सुरु गर्नुहोस्",
  },

  id: {
    title: "Persiapkan KIIP dengan lebih mudah",
    subtitle:
      "Pelajari materi, latihan soal, dan kerjakan ujian simulasi.",

    learn: "Belajar",
    learnDescription:
      "Pelajari tata bahasa, kosakata, budaya, dan masyarakat Korea.",
    learnButton: "Mulai Belajar",

    practice: "Latihan",
    practiceDescription:
      "Latihan soal berdasarkan pelajaran dan level KIIP.",
    practiceButton: "Mulai Latihan",

    exam: "Ujian Simulasi",
    examDescription:
      "Kerjakan ujian simulasi KIIP dan lihat hasil Anda.",
    examButton: "Mulai Ujian",
  },

  fil: {
    title: "Mas madaling maghanda para sa KIIP",
    subtitle:
      "Mag-aral ng mga aralin, magsanay ng mga tanong, at kumuha ng mock test.",

    learn: "Pag-aaral",
    learnDescription:
      "Pag-aralan ang Korean grammar, bokabularyo, kultura, at lipunan.",
    learnButton: "Simulan ang Pag-aaral",

    practice: "Pagsasanay",
    practiceDescription:
      "Magsanay ng mga tanong ayon sa aralin at KIIP level.",
    practiceButton: "Simulan ang Pagsasanay",

    exam: "Mock Test",
    examDescription:
      "Kumuha ng KIIP mock test at tingnan ang iyong resulta.",
    examButton: "Simulan ang Test",
  },

  mn: {
    title: "KIIP шалгалтад илүү хялбар бэлдээрэй",
    subtitle:
      "Хичээлээ үзэж, асуулт дасгал хийж, туршилтын шалгалт өгнө үү.",

    learn: "Сурах",
    learnDescription:
      "Солонгос хэлний дүрэм, үгсийн сан, соёл, нийгмийг судлаарай.",
    learnButton: "Суралцаж эхлэх",

    practice: "Дасгал",
    practiceDescription:
      "Хичээл болон KIIP түвшин бүрээр асуулт дасгал хийгээрэй.",
    practiceButton: "Дасгал эхлэх",

    exam: "Туршилтын шалгалт",
    examDescription:
      "KIIP туршилтын шалгалт өгч, үр дүнгээ шалгаарай.",
    examButton: "Шалгалт эхлэх",
  },

  km: {
    title: "ត្រៀមប្រឡង KIIP ឲ្យកាន់តែងាយស្រួល",
    subtitle:
      "សិក្សាមេរៀន អនុវត្តសំណួរ និងធ្វើតេស្តសាកល្បង។",

    learn: "រៀន",
    learnDescription:
      "សិក្សាវេយ្យាករណ៍ ពាក្យសព្ទ វប្បធម៌ និងសង្គមកូរ៉េ។",
    learnButton: "ចាប់ផ្តើមរៀន",

    practice: "អនុវត្ត",
    practiceDescription:
      "អនុវត្តសំណួរតាមមេរៀន និងកម្រិត KIIP។",
    practiceButton: "ចាប់ផ្តើមអនុវត្ត",

    exam: "ប្រឡងសាកល្បង",
    examDescription:
      "ធ្វើតេស្តសាកល្បង KIIP និងពិនិត្យលទ្ធផលរបស់អ្នក។",
    examButton: "ចាប់ផ្តើមប្រឡង",
  },

  my: {
    title: "KIIP စာမေးပွဲအတွက် ပိုမိုလွယ်ကူစွာ ပြင်ဆင်ပါ",
    subtitle:
      "သင်ခန်းစာများ လေ့လာပါ၊ မေးခွန်းများ လေ့ကျင့်ပါ၊ အစမ်းစာမေးပွဲ ဖြေပါ။",

    learn: "လေ့လာရန်",
    learnDescription:
      "ကိုရီးယားသဒ္ဒါ၊ ဝေါဟာရ၊ ယဉ်ကျေးမှုနှင့် လူမှုအသိုင်းအဝိုင်းကို လေ့လာပါ။",
    learnButton: "စတင်လေ့လာရန်",

    practice: "လေ့ကျင့်ရန်",
    practiceDescription:
      "သင်ခန်းစာနှင့် KIIP အဆင့်အလိုက် မေးခွန်းများကို လေ့ကျင့်ပါ။",
    practiceButton: "စတင်လေ့ကျင့်ရန်",

    exam: "အစမ်းစာမေးပွဲ",
    examDescription:
      "KIIP အစမ်းစာမေးပွဲ ဖြေပြီး သင့်ရလဒ်ကို စစ်ဆေးပါ။",
    examButton: "စာမေးပွဲ စတင်ရန်",
  },

  si: {
    title: "KIIP සඳහා වඩාත් පහසුවෙන් සූදානම් වන්න",
    subtitle:
      "පාඩම් ඉගෙන ගන්න, ප්‍රශ්න පුහුණු වන්න සහ ආදර්ශ විභාග කරන්න.",

    learn: "ඉගෙනීම",
    learnDescription:
      "කොරියානු ව්‍යාකරණ, වචන මාලාව, සංස්කෘතිය සහ සමාජය ඉගෙන ගන්න.",
    learnButton: "ඉගෙනීම අරඹන්න",

    practice: "පුහුණුව",
    practiceDescription:
      "පාඩම් සහ KIIP මට්ටම් අනුව ප්‍රශ්න පුහුණු වන්න.",
    practiceButton: "පුහුණුව අරඹන්න",

    exam: "ආදර්ශ විභාගය",
    examDescription:
      "KIIP ආදර්ශ විභාගයක් කර ඔබේ ප්‍රතිඵල බලන්න.",
    examButton: "විභාගය අරඹන්න",
  },

  bn: {
    title: "KIIP পরীক্ষার প্রস্তুতি আরও সহজ করুন",
    subtitle:
      "পাঠ শিখুন, প্রশ্ন অনুশীলন করুন এবং মক টেস্ট দিন।",

    learn: "শেখা",
    learnDescription:
      "কোরিয়ান ব্যাকরণ, শব্দভাণ্ডার, সংস্কৃতি ও সমাজ শিখুন।",
    learnButton: "শেখা শুরু করুন",

    practice: "অনুশীলন",
    practiceDescription:
      "পাঠ এবং KIIP স্তর অনুযায়ী প্রশ্ন অনুশীলন করুন।",
    practiceButton: "অনুশীলন শুরু করুন",

    exam: "মক টেস্ট",
    examDescription:
      "KIIP মক টেস্ট দিন এবং আপনার ফলাফল দেখুন।",
    examButton: "টেস্ট শুরু করুন",
  },

  ur: {
    title: "KIIP کی تیاری زیادہ آسانی سے کریں",
    subtitle:
      "اسباق پڑھیں، سوالات کی مشق کریں اور فرضی امتحان دیں۔",

    learn: "سیکھیں",
    learnDescription:
      "کوریائی گرامر، الفاظ، ثقافت اور معاشرہ سیکھیں۔",
    learnButton: "سیکھنا شروع کریں",

    practice: "مشق",
    practiceDescription:
      "سبق اور KIIP سطح کے مطابق سوالات کی مشق کریں۔",
    practiceButton: "مشق شروع کریں",

    exam: "فرضی امتحان",
    examDescription:
      "KIIP کا فرضی امتحان دیں اور اپنا نتیجہ دیکھیں۔",
    examButton: "امتحان شروع کریں",
  },

  uz: {
    title: "KIIP imtihoniga osonroq tayyorlaning",
    subtitle:
      "Darslarni o‘rganing, savollarni mashq qiling va sinov imtihonini topshiring.",

    learn: "O‘rganish",
    learnDescription:
      "Koreys tili grammatikasi, lug‘ati, madaniyati va jamiyatini o‘rganing.",
    learnButton: "O‘rganishni boshlash",

    practice: "Mashq",
    practiceDescription:
      "Dars va KIIP darajasi bo‘yicha savollarni mashq qiling.",
    practiceButton: "Mashqni boshlash",

    exam: "Sinov imtihoni",
    examDescription:
      "KIIP sinov imtihonini topshiring va natijangizni tekshiring.",
    examButton: "Imtihonni boshlash",
  },

  ru: {
    title: "Готовьтесь к KIIP проще",
    subtitle:
      "Изучайте уроки, практикуйтесь на вопросах и проходите пробные тесты.",

    learn: "Учёба",
    learnDescription:
      "Изучайте корейскую грамматику, лексику, культуру и общество.",
    learnButton: "Начать обучение",

    practice: "Практика",
    practiceDescription:
      "Практикуйтесь по урокам и уровням KIIP.",
    practiceButton: "Начать практику",

    exam: "Пробный тест",
    examDescription:
      "Пройдите пробный тест KIIP и проверьте результат.",
    examButton: "Начать тест",
  },
};
export type LearnListTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  lessonLabel: string;
  notFoundText: string;
};

export const learnListTranslations: Record<
  string,
  LearnListTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "Danh sách bài học",
    subtitle: "Chọn một bài học để bắt đầu học.",
    lessonLabel: "Bài",
      notFoundText: "Không tìm thấy cấp độ",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "Lesson List",
    subtitle: "Choose a lesson to start learning.",
    lessonLabel: "Lesson",
     notFoundText: "Level not found",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "수업 목록",
    subtitle: "학습을 시작할 수업을 선택하세요.",
    lessonLabel: "수업",
      notFoundText: "단계를 찾을 수 없습니다",  
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "课程列表",
    subtitle: "选择一节课程开始学习。",
    lessonLabel: "课程",
    notFoundText: "未找到该等级",
  },
};
export type LessonDetailTranslation = {
  levelLabel: string;
  lessonLabel: string;
  vocabulary: string;
  grammar: string;
  dialogue: string;
  culture: string;
  completeButton: string;
  exampleLabel: string;
  noContentTitle: string;
noContentSubtitle: string;
alreadyCompletedAlert: string;
completedAlert: string;
};
export const lessonDetailTranslations: Record<
  string,
  LessonDetailTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    lessonLabel: "Bài",
    vocabulary: "Từ vựng",
    grammar: "Ngữ pháp",
    dialogue: "Hội thoại",
    culture: "Văn hóa & Xã hội",
    completeButton: "Đánh dấu đã học",
    exampleLabel: "Ví dụ:",
    noContentTitle: "Bài học chưa có nội dung",
    noContentSubtitle: "Nội dung bài này sẽ được cập nhật sau.",
    alreadyCompletedAlert: "Bài này đã được đánh dấu trước đó.",
    completedAlert: "Đã đánh dấu bài này là đã học.",
  },

  en: {
    levelLabel: "KIIP Level",
    lessonLabel: "Lesson",
    vocabulary: "Vocabulary",
    grammar: "Grammar",
    dialogue: "Dialogue",
    culture: "Culture & Society",
    completeButton: "Mark as Learned",
    exampleLabel: "Example:",
    noContentTitle: "This lesson has no content yet",
    noContentSubtitle: "The content for this lesson will be updated later.",
    alreadyCompletedAlert: "This lesson has already been marked as learned.",
    completedAlert: "This lesson has been marked as learned.",
  },

  ko: {
    levelLabel: "KIIP 단계",
    lessonLabel: "수업",
    vocabulary: "어휘",
    grammar: "문법",
    dialogue: "대화",
    culture: "문화와 사회",
    completeButton: "학습 완료 표시",
    exampleLabel: "예:",
    noContentTitle: "아직 학습 내용이 없습니다",
    noContentSubtitle: "이 수업의 내용은 추후 업데이트됩니다.",
    alreadyCompletedAlert: "이 수업은 이미 학습 완료로 표시되었습니다.",
    completedAlert: "이 수업을 학습 완료로 표시했습니다.",
  },

  zh: {
    levelLabel: "KIIP 等级",
    lessonLabel: "课程",
    vocabulary: "词汇",
    grammar: "语法",
    dialogue: "对话",
    culture: "文化与社会",
    completeButton: "标记为已学",
    exampleLabel: "示例:",
    noContentTitle: "本课暂无内容",
    noContentSubtitle: "本课内容将在之后更新。",
    alreadyCompletedAlert: "本课程已被标记为已学习。",
    completedAlert: "已将本课程标记为已学习。",
  },
};
export type PracticeListTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  lessonLabel: string;
practiceButton: string;
};

export const practiceListTranslations: Record<
  string,
  PracticeListTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "Luyện trắc nghiệm",
    subtitle: "Luyện câu hỏi theo bài và theo chủ đề.",
    lessonLabel: "Bài",
practiceButton: "Bắt đầu luyện",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "Practice Questions",
    subtitle: "Practice questions by lesson and topic.",
    lessonLabel: "Lesson",
practiceButton: "Start Practice",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "문제 연습",
    subtitle: "수업별, 주제별 문제를 연습하세요.",
    lessonLabel: "수업",
practiceButton: "연습 시작",
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "练习题",
    subtitle: "按课程和主题练习题目。",
    lessonLabel: "课程",
practiceButton: "开始练习",
  },
};
export type PracticeDetailTranslation = {
  noDataTitle: string;
  noDataSubtitle: string;
  resultLabel: string;
  correctText: string;
  questionText: string;
  retryButton: string;
  completeButton: string;
  reviewQuestionLabel: string;
  correctLabel: string;
  wrongLabel: string;
  yourAnswerLabel: string;
unansweredLabel: string;
correctAnswerLabel: string;
explanationLabel: string;
levelLabel: string;
lessonLabel: string;
currentQuestionLabel: string;
questionListLabel?: string;
previousButton: string;
nextButton: string;
submitButton: string;
alreadyCompletedAlert: string;
completedAlert: string;
};

export const practiceDetailTranslations: Record<
  string,
  PracticeDetailTranslation
> = {
  vi: {
    noDataTitle: "Chưa có câu hỏi",
    noDataSubtitle: "Bài này chưa có dữ liệu luyện tập.",
    resultLabel: "Kết quả",
    correctText: "Bạn trả lời đúng",
    questionText: "câu",
    retryButton: "Làm lại",
    completeButton: "Đánh dấu đã luyện",
     reviewQuestionLabel: "Câu",
  correctLabel: "Đúng",
  wrongLabel: "Sai",
   yourAnswerLabel: "Bạn chọn:",
  unansweredLabel: "Chưa trả lời",
  correctAnswerLabel: "Đáp án đúng:",
  explanationLabel: "Giải thích",
  levelLabel: "KIIP Cấp",
  lessonLabel: "Bài",
  currentQuestionLabel: "Câu",
   previousButton: "Câu trước",
  nextButton: "Câu tiếp theo",
  submitButton: "Nộp bài",
  alreadyCompletedAlert: "Bài luyện này đã được đánh dấu trước đó.",
completedAlert: "Đã đánh dấu bài luyện này là hoàn thành.",
  },

  en: {
    noDataTitle: "No questions yet",
    noDataSubtitle: "This lesson does not have practice data yet.",
    resultLabel: "Result",
    correctText: "You answered correctly",
    questionText: "questions",
    retryButton: "Try Again",
    completeButton: "Mark as Practiced",
    reviewQuestionLabel: "Question",
  correctLabel: "Correct",
  wrongLabel: "Incorrect",
  yourAnswerLabel: "Your answer:",
  unansweredLabel: "Not answered",
  correctAnswerLabel: "Correct answer:",
  explanationLabel: "Explanation",
  levelLabel: "KIIP Level",
  lessonLabel: "Lesson",
  currentQuestionLabel: "Question",
   previousButton: "Previous",
  nextButton: "Next",
 submitButton: "Submit",
 alreadyCompletedAlert: "This practice lesson has already been marked as completed.",
completedAlert: "This practice lesson has been marked as completed.",
  },

  ko: {
    noDataTitle: "문제가 없습니다",
    noDataSubtitle: "이 수업에는 아직 연습 문제가 없습니다.",
    resultLabel: "결과",
    correctText: "정답 수",
    questionText: "문제",
    retryButton: "다시 풀기",
    completeButton: "연습 완료 표시",
    reviewQuestionLabel: "문제",
  correctLabel: "정답",
  wrongLabel: "오답",
  yourAnswerLabel: "선택한 답:",
  unansweredLabel: "응답하지 않음",
  correctAnswerLabel: "정답:",
  explanationLabel: "해설",
   levelLabel: "KIIP 단계",
  lessonLabel: "수업",
  currentQuestionLabel: "문제",
   previousButton: "이전 문제",
  nextButton: "다음 문제",
 submitButton: "제출하기",
 alreadyCompletedAlert: "이 연습은 이미 완료로 표시되었습니다.",
completedAlert: "이 연습을 완료로 표시했습니다.",
  },

  zh: {
    noDataTitle: "暂无题目",
    noDataSubtitle: "本课程暂时没有练习题数据。",
    resultLabel: "结果",
    correctText: "答对",
    questionText: "题",
    retryButton: "重新练习",
    completeButton: "标记为已练习",
    reviewQuestionLabel: "第",
  correctLabel: "正确",
  wrongLabel: "错误",
  yourAnswerLabel: "你的答案：",
  unansweredLabel: "未作答",
  correctAnswerLabel: "正确答案：",
  explanationLabel: "解析",
  levelLabel: "KIIP 等级",
  lessonLabel: "课程",
  currentQuestionLabel: "第",
   previousButton: "上一题",
  nextButton: "下一题",
 submitButton: "提交",
 alreadyCompletedAlert: "该练习已标记为完成。",
completedAlert: "已将该练习标记为完成。",
  },
};
export type WritingDetailTranslation = {
  levelLabel: string;
  writingLabel: string;
  promptLabel: string;
  yourWritingLabel: string;
  characterLabel: string;
  placeholder: string;
  showHintsButton: string;
  hideHintsButton: string;
  showSampleButton: string;
  hideSampleButton: string;
  saveButton: string;
  emptyAnswerAlert: string;
  savedAlert: string;
  noPromptTitle: string;
  noPromptSubtitle: string;
  sampleTitle: string;
  hintSectionTitle: string;
};

export const writingDetailTranslations: Record<
  string,
  WritingDetailTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    writingLabel: "Luyện viết",
    promptLabel: "Đề",
    yourWritingLabel: "Bài viết của bạn",
    characterLabel: "ký tự",
    placeholder: "Viết câu trả lời bằng tiếng Hàn tại đây...",
    showHintsButton: "Xem gợi ý",
    hideHintsButton: "Ẩn gợi ý",
    showSampleButton: "Xem bài mẫu",
    hideSampleButton: "Ẩn bài mẫu",
    saveButton: "Lưu bài viết",
    emptyAnswerAlert: "Bạn chưa nhập bài viết.",
    savedAlert: "Đã lưu bài viết.",
    noPromptTitle: "Không tìm thấy đề viết",
    noPromptSubtitle: "Đề này chưa có nội dung.",
    sampleTitle: "Bài mẫu",
    hintSectionTitle: "Gợi ý",

  },

  en: {
    levelLabel: "KIIP Level",
    writingLabel: "Writing Practice",
    promptLabel: "Prompt",
    yourWritingLabel: "Your Writing",
    characterLabel: "characters",
    placeholder: "Write your answer in Korean here...",
    showHintsButton: "Show Hints",
    hideHintsButton: "Hide Hints",
    showSampleButton: "Show Sample",
    hideSampleButton: "Hide Sample",
    saveButton: "Save Writing",
    emptyAnswerAlert: "You have not entered your writing yet.",
    savedAlert: "Writing saved.",
    noPromptTitle: "Writing prompt not found",
    noPromptSubtitle: "This prompt does not have content yet.",
    sampleTitle: "Sample Answer",
    hintSectionTitle: "Hints",
  },

  ko: {
    levelLabel: "KIIP 단계",
    writingLabel: "쓰기 연습",
    promptLabel: "문제",
    yourWritingLabel: "내 글",
    characterLabel: "자",
    placeholder: "여기에 한국어로 답을 작성하세요...",
    showHintsButton: "힌트 보기",
    hideHintsButton: "힌트 숨기기",
    showSampleButton: "예시 답안 보기",
    hideSampleButton: "예시 답안 숨기기",
    saveButton: "글 저장",
    emptyAnswerAlert: "작성한 내용이 없습니다.",
    savedAlert: "글이 저장되었습니다.",
    noPromptTitle: "쓰기 문제를 찾을 수 없습니다",
    noPromptSubtitle: "이 문제에는 아직 내용이 없습니다.",
    sampleTitle: "예시 답안",
    hintSectionTitle: "힌트",
  },

  zh: {
    levelLabel: "KIIP 等级",
    writingLabel: "写作练习",
    promptLabel: "题目",
    yourWritingLabel: "你的作文",
    characterLabel: "字",
    placeholder: "请在这里用韩语作答...",
    showHintsButton: "查看提示",
    hideHintsButton: "隐藏提示",
    showSampleButton: "查看范文",
    hideSampleButton: "隐藏范文",
    saveButton: "保存作文",
    emptyAnswerAlert: "你还没有输入作文内容。",
    savedAlert: "作文已保存。",
    noPromptTitle: "未找到写作题目",
    noPromptSubtitle: "该题目暂时没有内容。",
    sampleTitle: "范文",
    hintSectionTitle: "提示",
  },
};
export type SpeakingDetailTranslation = {
  levelLabel: string;
  speakingLabel: string;
  promptLabel: string;
  showHintsButton: string;
  hideHintsButton: string;
  showSampleButton: string;
  hideSampleButton: string;
  saveButton: string;
  savedAlert: string;
  noPromptTitle: string;
  noPromptSubtitle: string;
  answerSectionTitle: string;
  hintSectionTitle: string;
answerSectionSubtitle: string;
sampleAnswerTitle: string;
};

export const speakingDetailTranslations: Record<
  string,
  SpeakingDetailTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    speakingLabel: "Luyện nói",
    promptLabel: "Đề",
    showHintsButton: "Xem gợi ý",
    hideHintsButton: "Ẩn gợi ý",
    showSampleButton: "Xem bài mẫu",
    hideSampleButton: "Ẩn bài mẫu",
    saveButton: "Lưu buổi luyện nói",
    savedAlert: "Đã lưu buổi luyện nói.",
    noPromptTitle: "Không tìm thấy đề phỏng vấn",
    noPromptSubtitle: "Đề này chưa có nội dung.",
  answerSectionTitle: "{text.answerSectionTitle}",
  answerSectionSubtitle:
    "Hãy thử trả lời bằng tiếng Hàn trước khi xem gợi ý hoặc câu trả lời mẫu.",
    hintSectionTitle: "Gợi ý trả lời",
     sampleAnswerTitle: "Câu trả lời mẫu",
},

  en: {
    levelLabel: "KIIP Level",
    speakingLabel: "Speaking Practice",
    promptLabel: "Prompt",
    showHintsButton: "Show Hints",
    hideHintsButton: "Hide Hints",
    showSampleButton: "Show Sample",
    hideSampleButton: "Hide Sample",
    saveButton: "Save Speaking Practice",
    savedAlert: "Speaking practice saved.",
    noPromptTitle: "Speaking prompt not found",
    noPromptSubtitle: "This prompt does not have content yet.",
    answerSectionTitle: "Answer the Question",
  answerSectionSubtitle:
    "Try answering in Korean before viewing the hints or sample answer.",
    hintSectionTitle: "Answer Hints",
    sampleAnswerTitle: "Sample Answer",
  },

  ko: {
    levelLabel: "KIIP 단계",
    speakingLabel: "말하기 연습",
    promptLabel: "문제",
    showHintsButton: "힌트 보기",
    hideHintsButton: "힌트 숨기기",
    showSampleButton: "예시 답안 보기",
    hideSampleButton: "예시 답안 숨기기",
    saveButton: "말하기 연습 저장",
    savedAlert: "말하기 연습이 저장되었습니다.",
    noPromptTitle: "말하기 문제를 찾을 수 없습니다",
    noPromptSubtitle: "이 문제에는 아직 내용이 없습니다.",
     answerSectionTitle: "질문에 답하기",
  answerSectionSubtitle:
    "힌트나 예시 답안을 보기 전에 먼저 한국어로 답해 보세요.",
    hintSectionTitle: "답변 힌트",
    sampleAnswerTitle: "모범 답안",
  },

  zh: {
    levelLabel: "KIIP 等级",
    speakingLabel: "口语练习",
    promptLabel: "题目",
    showHintsButton: "查看提示",
    hideHintsButton: "隐藏提示",
    showSampleButton: "查看示例",
    hideSampleButton: "隐藏示例",
    saveButton: "保存口语练习",
    savedAlert: "口语练习已保存。",
    noPromptTitle: "未找到口语题目",
    noPromptSubtitle: "该题目暂时没有内容。",
    answerSectionTitle: "回答问题",
  answerSectionSubtitle:
    "查看提示或示例答案之前，请先尝试用韩语回答。",
    hintSectionTitle: "回答提示",
     sampleAnswerTitle: "参考答案",
  },
};
export type ExamMultipleChoiceTranslation = {
  levelLabel: string;
  examLabel: string;
  questionLabel: string;
  previousButton: string;
  nextButton: string;
  submitButton: string;
  timeLabel: string;
  resultLabel: string;
  correctText: string;
  questionText: string;
  retryButton: string;
  correctLabel: string;
wrongLabel: string;
passLabel: string;
failLabel: string;
yourAnswerLabel: string;
unansweredLabel: string;
correctAnswerLabel: string;
explanationLabel: string;
questionListLabel: string;
answeredLabel: string;
noQuestionsText: string;
adLabel: string;
selectedStatusLabel: string;
currentQuestionStatusLabel: string;
unselectedStatusLabel: string;
};

export const examMultipleChoiceTranslations: Record<
  string,
  ExamMultipleChoiceTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    examLabel: "Thi trắc nghiệm",
    questionLabel: "Câu",
    previousButton: "Câu trước",
    nextButton: "Câu tiếp theo",
    submitButton: "Nộp bài",
    timeLabel: "Thời gian còn lại",
    resultLabel: "Kết quả",
    correctText: "Bạn trả lời đúng",
    questionText: "câu",
    retryButton: "Làm lại",
     correctLabel: "Đúng",
  wrongLabel: "Sai",
  passLabel: "Đạt",
  failLabel: "Chưa đạt",
  yourAnswerLabel: "Bạn chọn:",
  unansweredLabel: "Chưa trả lời",
  correctAnswerLabel: "Đáp án đúng:",
  explanationLabel: "Giải thích",
  questionListLabel: "Danh sách câu hỏi",
  answeredLabel: "Đã trả lời",
 adLabel: "{text.adLabel}",
selectedStatusLabel: "{text.selectedStatusLabel}",
currentQuestionStatusLabel: "{text.currentQuestionStatusLabel}",
unselectedStatusLabel: "{text.unselectedStatusLabel}",
noQuestionsText: "Không có câu hỏi nào.",
  },

  en: {
    levelLabel: "KIIP Level",
    examLabel: "Multiple-Choice Exam",
    questionLabel: "Question",
    previousButton: "Previous",
    nextButton: "Next",
    submitButton: "Submit",
    timeLabel: "Time Remaining",
    resultLabel: "Result",
    correctText: "You answered correctly",
    questionText: "questions",
    retryButton: "Try Again",
    correctLabel: "Correct",
  wrongLabel: "Incorrect",
   passLabel: "Passed",
  failLabel: "Not Passed",
  yourAnswerLabel: "Your answer:",
  unansweredLabel: "Not answered",
  correctAnswerLabel: "Correct answer:",
  explanationLabel: "Explanation",
  questionListLabel: "Question List",
  answeredLabel: "Answered",
  noQuestionsText: "There are no questions for this level yet.",
  adLabel: "Advertisement",
selectedStatusLabel: "Selected",
currentQuestionStatusLabel: "Current question",
unselectedStatusLabel: "Not selected",
  },

  ko: {
    levelLabel: "KIIP 단계",
    examLabel: "객관식 시험",
    questionLabel: "문제",
    previousButton: "이전 문제",
    nextButton: "다음 문제",
    submitButton: "제출하기",
    timeLabel: "남은 시간",
    resultLabel: "결과",
    correctText: "정답 수",
    questionText: "문제",
    retryButton: "다시 풀기",
     correctLabel: "정답",
  wrongLabel: "오답",
  passLabel: "합격",
  failLabel: "불합격",
   yourAnswerLabel: "선택한 답:",
  unansweredLabel: "응답하지 않음",
  correctAnswerLabel: "정답:",
  explanationLabel: "해설",
  questionListLabel: "문제 목록",
  answeredLabel: "응답 완료",
  noQuestionsText: "이 단계에는 아직 문제가 없습니다.",
  adLabel: "광고",
selectedStatusLabel: "선택 완료",
currentQuestionStatusLabel: "현재 문제",
unselectedStatusLabel: "미선택",
  },

  zh: {
    levelLabel: "KIIP 等级",
    examLabel: "选择题考试",
    questionLabel: "第",
    previousButton: "上一题",
    nextButton: "下一题",
    submitButton: "提交",
    timeLabel: "剩余时间",
    resultLabel: "结果",
    correctText: "答对",
    questionText: "题",
    retryButton: "重新作答",
    correctLabel: "正确",
  wrongLabel: "错误",
  passLabel: "通过",
  failLabel: "未通过",
   yourAnswerLabel: "你的答案：",
  unansweredLabel: "未作答",
  correctAnswerLabel: "正确答案：",
  explanationLabel: "解析",
  questionListLabel: "题目列表",
  answeredLabel: "已作答",
  noQuestionsText: "该等级目前还没有题目。",
  adLabel: "广告",
selectedStatusLabel: "已选择",
currentQuestionStatusLabel: "当前题目",
unselectedStatusLabel: "未选择",
  },
  
};
export type ExamWritingTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  promptLabel: string;
  instruction: string;
  yourWritingLabel: string;
  placeholder: string;
  charactersLabel: string;
  timeRemainingLabel: string;
  submitButton: string;
  submittedLabel: string;
};

export const examWritingTranslations: Record<
  string,
  ExamWritingTranslation
> = {
 vi: {
  levelLabel: "KIIP Cấp",
  title: "Thi thử viết",
  subtitle: "Viết câu trả lời theo chủ đề được đưa ra.",
  promptLabel: "Đề viết",
  instruction: "Viết bằng tiếng Hàn theo yêu cầu của đề.",
  yourWritingLabel: "Bài viết của bạn",
  placeholder: "Nhập câu trả lời bằng tiếng Hàn...",
  charactersLabel: "ký tự",
  timeRemainingLabel: "Thời gian còn lại",
  submitButton: "Nộp bài",
  submittedLabel: "Đã nộp",
},

  en: {
  levelLabel: "KIIP Level",
  title: "Writing Exam",
  subtitle: "Write your answer based on the given topic.",
  promptLabel: "Writing Prompt",
  instruction: "Write your answer in Korean according to the prompt.",
  yourWritingLabel: "Your Writing",
  placeholder: "Write your answer in Korean...",
  charactersLabel: "characters",
  timeRemainingLabel: "Time Remaining",
  submitButton: "Submit",
  submittedLabel: "Submitted",
},

  ko: {
  levelLabel: "KIIP 단계",
  title: "쓰기 시험",
  subtitle: "주어진 주제에 맞게 답을 작성하세요.",
  promptLabel: "쓰기 문제",
  instruction: "문제의 요구에 따라 한국어로 작성하세요.",
  yourWritingLabel: "답안 작성",
  placeholder: "한국어로 답을 작성하세요...",
  charactersLabel: "자",
  timeRemainingLabel: "남은 시간",
  submitButton: "제출하기",
   submittedLabel: "제출 완료",
},

  zh: {
  levelLabel: "KIIP 等级",
  title: "写作考试",
  subtitle: "根据给出的主题作答。",
  promptLabel: "写作题目",
  instruction: "请根据题目要求用韩语作答。",
  yourWritingLabel: "你的答案",
  placeholder: "请用韩语输入答案...",
  charactersLabel: "字",
  timeRemainingLabel: "剩余时间",
  submitButton: "提交",
  submittedLabel: "已提交",
},
};
export type ExamSpeakingTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  questionLabel: string;
  instruction: string;
  hintsLabel: string;
  sampleLabel: string;
  showHintsButton: string;
  hideHintsButton: string;
  showSampleButton: string;
  hideSampleButton: string;
  timeRemainingLabel: string;
  saveButton: string;
  savedLabel: string;
};

export const examSpeakingTranslations: Record<
  string,
  ExamSpeakingTranslation
> = {
  vi: {
  levelLabel: "KIIP Cấp",
  title: "Thi thử phỏng vấn",
  subtitle: "Luyện trả lời câu hỏi nói và phỏng vấn.",
  questionLabel: "Câu hỏi",
  instruction: "Hãy thử trả lời bằng tiếng Hàn trước khi xem gợi ý hoặc bài mẫu.",
  hintsLabel: "Gợi ý trả lời",
  sampleLabel: "Bài trả lời mẫu",
  showHintsButton: "Xem gợi ý",
  hideHintsButton: "Ẩn gợi ý",
  showSampleButton: "Xem bài mẫu",
  hideSampleButton: "Ẩn bài mẫu",
  timeRemainingLabel: "Thời gian còn lại",
  saveButton: "Lưu bài nói",
  savedLabel: "Đã lưu",

  },

  en: {
  levelLabel: "KIIP Level",
  title: "Speaking Exam",
  subtitle: "Practice speaking and interview questions.",
  questionLabel: "Question",
  instruction: "Try answering in Korean before viewing the hints or sample answer.",
  hintsLabel: "Answer Hints",
  sampleLabel: "Sample Answer",
  showHintsButton: "Show Hints",
  hideHintsButton: "Hide Hints",
  showSampleButton: "Show Sample",
  hideSampleButton: "Hide Sample",
  timeRemainingLabel: "Time Remaining",
  saveButton: "Save Speaking Practice",
  savedLabel: "Saved",
},

  ko: {
  levelLabel: "KIIP 단계",
  title: "말하기 시험",
  subtitle: "말하기 및 면접 문제를 연습하세요.",
  questionLabel: "질문",
  instruction: "힌트나 예시 답안을 보기 전에 한국어로 먼저 답해 보세요.",
  hintsLabel: "답변 힌트",
  sampleLabel: "예시 답안",
  showHintsButton: "힌트 보기",
  hideHintsButton: "힌트 숨기기",
  showSampleButton: "예시 보기",
  hideSampleButton: "예시 숨기기",
  timeRemainingLabel: "남은 시간",
  saveButton: "말하기 연습 저장",
  savedLabel: "저장 완료",
},

 zh: {
  levelLabel: "KIIP 等级",
  title: "口语考试",
  subtitle: "练习口语和面试题。",
  questionLabel: "问题",
  instruction: "请先尝试用韩语回答，再查看提示或示例答案。",
  hintsLabel: "回答提示",
  sampleLabel: "示例答案",
  showHintsButton: "查看提示",
  hideHintsButton: "隐藏提示",
  showSampleButton: "查看示例",
  hideSampleButton: "隐藏示例",
  timeRemainingLabel: "剩余时间",
  saveButton: "保存口语练习",
  savedLabel: "已保存",
},
};
export type ExamLevelTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  multipleChoiceTitle: string;
  multipleChoiceSubtitle: string;
  writingTitle: string;
  writingSubtitle: string;
  speakingTitle: string;
  speakingSubtitle: string;
};

export const examLevelTranslations: Record<
  string,
  ExamLevelTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "Chọn phần thi",
    subtitle: "Chọn dạng thi bạn muốn luyện.",
    multipleChoiceTitle: "Trắc nghiệm",
    multipleChoiceSubtitle: "Làm đề trắc nghiệm tổng hợp.",
    writingTitle: "Viết",
    writingSubtitle: "Luyện phần thi viết.",
    speakingTitle: "Phỏng vấn / Nói",
    speakingSubtitle: "Luyện phần thi phỏng vấn.",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "Choose Exam Section",
    subtitle: "Choose the exam section you want to practice.",
    multipleChoiceTitle: "Multiple Choice",
    multipleChoiceSubtitle: "Practice a comprehensive multiple-choice exam.",
    writingTitle: "Writing",
    writingSubtitle: "Practice the writing section.",
    speakingTitle: "Speaking / Interview",
    speakingSubtitle: "Practice the speaking and interview section.",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "시험 영역 선택",
    subtitle: "연습할 시험 영역을 선택하세요.",
    multipleChoiceTitle: "객관식",
    multipleChoiceSubtitle: "종합 객관식 시험을 연습합니다.",
    writingTitle: "쓰기",
    writingSubtitle: "쓰기 시험을 연습합니다.",
    speakingTitle: "말하기 / 면접",
    speakingSubtitle: "말하기 및 면접 시험을 연습합니다.",
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "选择考试部分",
    subtitle: "请选择你想练习的考试部分。",
    multipleChoiceTitle: "选择题",
    multipleChoiceSubtitle: "练习综合选择题考试。",
    writingTitle: "写作",
    writingSubtitle: "练习写作考试部分。",
    speakingTitle: "口语 / 面试",
    speakingSubtitle: "练习口语和面试考试部分。",
  },
};
export type LevelOverviewTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;

  learnTitle: string;
  learnSubtitle: string;

  practiceTitle: string;
  practiceSubtitle: string;

  writingTitle: string;
  writingSubtitle: string;

  speakingTitle: string;
  speakingSubtitle: string;
};

export const levelOverviewTranslations: Record<
  string,
  LevelOverviewTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "KIIP Cấp",
    subtitle: "Chọn nội dung bạn muốn học hoặc luyện tập.",

    learnTitle: "Học bài",
    learnSubtitle:
      "Học từ vựng, ngữ pháp, hội thoại và kiến thức theo cấp độ.",

    practiceTitle: "Luyện trắc nghiệm",
    practiceSubtitle:
      "Luyện câu hỏi theo bài và theo chủ đề.",

    writingTitle: "Luyện viết",
    writingSubtitle:
      "Luyện các dạng đề viết và xem bài mẫu.",

    speakingTitle: "Phỏng vấn / Nói",
    speakingSubtitle:
      "Luyện mô tả ảnh, câu hỏi phỏng vấn và tình huống xã hội.",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "KIIP Level",
    subtitle: "Choose what you want to study or practice.",

    learnTitle: "Learn",
    learnSubtitle:
      "Study vocabulary, grammar, dialogue, and knowledge for this level.",

    practiceTitle: "Multiple-Choice Practice",
    practiceSubtitle:
      "Practice questions by lesson and topic.",

    writingTitle: "Writing Practice",
    writingSubtitle:
      "Practice writing tasks and review sample answers.",

    speakingTitle: "Speaking / Interview",
    speakingSubtitle:
      "Practice picture descriptions, interview questions, and social situations.",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "KIIP 단계",
    subtitle: "학습하거나 연습할 내용을 선택하세요.",

    learnTitle: "학습",
    learnSubtitle:
      "단계별 어휘, 문법, 대화 및 관련 지식을 학습합니다.",

    practiceTitle: "객관식 연습",
    practiceSubtitle:
      "수업별, 주제별 문제를 연습합니다.",

    writingTitle: "쓰기 연습",
    writingSubtitle:
      "쓰기 문제 유형을 연습하고 예시 답안을 확인합니다.",

    speakingTitle: "말하기 / 면접",
    speakingSubtitle:
      "사진 묘사, 면접 질문 및 사회 상황을 연습합니다.",
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "KIIP 等级",
    subtitle: "请选择你想学习或练习的内容。",

    learnTitle: "学习",
    learnSubtitle:
      "学习该等级的词汇、语法、会话及相关知识。",

    practiceTitle: "选择题练习",
    practiceSubtitle:
      "按课程和主题练习题目。",

    writingTitle: "写作练习",
    writingSubtitle:
      "练习写作题型并查看示例答案。",

    speakingTitle: "口语 / 面试",
    speakingSubtitle:
      "练习图片描述、面试问题和社会情境。",
  },
};
export type DashboardTranslation = {
  title: string;
  subtitle: string;

  continueLearn: string;
  continuePractice: string;
  continueWriting: string;
  continueSpeaking: string;

  levelLabel: string;
  completedLabel: string;

  learnLabel: string;
  practiceLabel: string;
  writingLabel: string;
  speakingLabel: string;
  examLabel: string;

  allLevelsLabel: string;
  recentExamHistoryTitle: string;
  recentLabel: string;
  deleteHistoryLabel: string;
  deleteHistoryConfirm: string;
  noExamHistoryText: string;

  speakingHistoryTitle: string;
  savedSpeakingCountLabel: string;
  viewSpeakingHistoryLabel: string;

  questionUnit: string;
  questionsDoneLabel: string;
  correctRateLabel: string;
  examsDoneLabel: string;
  reviewQuestionsLabel: string;
  wrongQuestionsSummary: string;
lessonUnit?: string;
sessionUnit?: string;
examUnit?: string;

notStartedLabel?: string;
inProgressLabel?: string;
completedStatusLabel?: string;

resultOverviewTitle?: string;
levelStatsTitle?: string;
correctAnswerRateTitle?: string;

reviewSectionTitle?: string;
noReviewQuestions?: string;

questionsDoneSummary?: string;
writingSavedSummary?: string;
};

export const dashboardTranslations: Record<
  string,
  DashboardTranslation
> = {
  vi: {
    title: "Thống kê học tập",
    subtitle: "Theo dõi tiến độ, kết quả và nội dung cần ôn lại.",

    continueLearn: "Tiếp tục học",
    continuePractice: "Tiếp tục luyện",
    continueWriting: "Tiếp tục viết",
    continueSpeaking: "Tiếp tục luyện nói",

    levelLabel: "KIIP Cấp",
    completedLabel: "mục đã hoàn thành",

    learnLabel: "Đã học",
    practiceLabel: "Đã luyện",
    writingLabel: "Đã viết",
    speakingLabel: "Đã luyện nói",
    examLabel: "Đã làm",
     allLevelsLabel: "Tất cả cấp độ",
  recentExamHistoryTitle: "Lịch sử thi gần đây",
  deleteHistoryLabel: "Xóa lịch sử",
  noExamHistoryText: "Chưa có lịch sử thi.",
   speakingHistoryTitle: "Phỏng vấn",
  savedSpeakingCountLabel: "Đã lưu",
  viewSpeakingHistoryLabel: "Xem lịch sử nói",
   recentLabel: "Gần nhất",
   deleteHistoryConfirm: "Bạn có chắc muốn xóa toàn bộ lịch sử thi không?",
    questionUnit: "câu",
    questionsDoneLabel: "Câu đã làm",
correctRateLabel: "Tỷ lệ đúng",
examsDoneLabel: "Đề đã làm",
reviewQuestionsLabel: "Câu cần ôn lại",
wrongQuestionsSummary: "Bạn đang có {count} câu cần xem lại.",
  },

  en: {
    title: "Learning Statistics",
    subtitle: "Track your progress, results, and items that need review.",

    continueLearn: "Continue Learning",
    continuePractice: "Continue Practice",
    continueWriting: "Continue Writing",
    continueSpeaking: "Continue Speaking",

    levelLabel: "KIIP Level",
    completedLabel: "items completed",

    learnLabel: "Learned",
    practiceLabel: "Practiced",
    writingLabel: "Writing",
    speakingLabel: "Speaking",
    examLabel: "Exams",
     allLevelsLabel: "All Levels",
  recentExamHistoryTitle: "Recent Exam History",
  deleteHistoryLabel: "Clear History",
  noExamHistoryText: "No exam history yet.",
   speakingHistoryTitle: "Speaking",
  savedSpeakingCountLabel: "Saved",
  viewSpeakingHistoryLabel: "View Speaking History",
   recentLabel: "Most recent",
   deleteHistoryConfirm: "Are you sure you want to delete all exam history?",
   questionUnit: "questions",
   questionsDoneLabel: "Questions Completed",
correctRateLabel: "Correct Rate",
examsDoneLabel: "Exams Completed",
reviewQuestionsLabel: "Questions to Review",
wrongQuestionsSummary: "You have {count} questions to review.",
  },

  ko: {
    title: "학습 통계",
    subtitle: "학습 진도, 결과 및 복습할 내용을 확인하세요.",

    continueLearn: "계속 학습하기",
    continuePractice: "계속 문제 풀기",
    continueWriting: "계속 쓰기 연습",
    continueSpeaking: "계속 말하기 연습",

    levelLabel: "KIIP 단계",
    completedLabel: "개 완료",

    learnLabel: "학습",
    practiceLabel: "문제 연습",
    writingLabel: "쓰기",
    speakingLabel: "말하기",
    examLabel: "시험",
     allLevelsLabel: "전체 단계",
  recentExamHistoryTitle: "최근 시험 기록",
  deleteHistoryLabel: "기록 삭제",
  noExamHistoryText: "시험 기록이 없습니다.",
    speakingHistoryTitle: "말하기",
  savedSpeakingCountLabel: "저장됨",
  viewSpeakingHistoryLabel: "말하기 기록 보기",
   recentLabel: "최근",
   deleteHistoryConfirm: "모든 시험 기록을 삭제하시겠습니까?",
   questionUnit: "문제",
   questionsDoneLabel: "푼 문제",
correctRateLabel: "정답률",
examsDoneLabel: "완료한 시험",
reviewQuestionsLabel: "복습할 문제",
wrongQuestionsSummary: "복습할 문제가 {count}개 있습니다.",
   
  },

  zh: {
    title: "学习统计",
    subtitle: "查看学习进度、成绩和需要复习的内容。",

    continueLearn: "继续学习",
    continuePractice: "继续练习",
    continueWriting: "继续写作练习",
    continueSpeaking: "继续口语练习",

    levelLabel: "KIIP 等级",
    completedLabel: "项已完成",

    learnLabel: "已学习",
    practiceLabel: "已练习",
    writingLabel: "写作",
    speakingLabel: "口语",
    examLabel: "考试",
    allLevelsLabel: "所有等级",
  recentExamHistoryTitle: "最近考试记录",
  deleteHistoryLabel: "清除记录",
  noExamHistoryText: "暂无考试记录。",
   speakingHistoryTitle: "口语",
  savedSpeakingCountLabel: "已保存",
  viewSpeakingHistoryLabel: "查看口语记录",
   recentLabel: "最近",
    deleteHistoryConfirm: "确定要删除全部考试记录吗？",
    questionUnit: "题",
    questionsDoneLabel: "已完成题目",
correctRateLabel: "正确率",
examsDoneLabel: "已完成考试",
reviewQuestionsLabel: "待复习题目",
wrongQuestionsSummary: "你有 {count} 道题需要复习。",
  },
};
export type ReviewTranslation = {
  title: string;
  subtitle: string;
  levelSelectLabel: string;
  levelLabel: string;

  emptyText: string;

  questionLabel: string;
  yourAnswerLabel: string;
  unansweredLabel: string;
  correctAnswerLabel: string;
  explanationLabel: string;
};

export const reviewTranslations: Record<
  string,
  ReviewTranslation
> = {
  vi: {
    title: "Câu cần ôn lại",
    subtitle: "Xem lại những câu bạn đã trả lời sai.",
    levelSelectLabel: "Chọn cấp độ:",
    levelLabel: "KIIP Cấp",

    emptyText: "Chưa có câu sai cần ôn lại.",

    questionLabel: "Câu",
    yourAnswerLabel: "Bạn chọn:",
    unansweredLabel: "Chưa trả lời",
    correctAnswerLabel: "Đáp án đúng:",
    explanationLabel: "Giải thích",
  },

  en: {
    title: "Questions to Review",
    subtitle: "Review the questions you answered incorrectly.",
    levelSelectLabel: "Select level:",
    levelLabel: "KIIP Level",

    emptyText: "There are no incorrect questions to review.",

    questionLabel: "Question",
    yourAnswerLabel: "Your answer:",
    unansweredLabel: "Not answered",
    correctAnswerLabel: "Correct answer:",
    explanationLabel: "Explanation",
  },

  ko: {
    title: "복습할 문제",
    subtitle: "틀린 문제를 다시 확인하세요.",
    levelSelectLabel: "단계 선택:",
    levelLabel: "KIIP 단계",

    emptyText: "복습할 틀린 문제가 없습니다.",

    questionLabel: "문제",
    yourAnswerLabel: "선택한 답:",
    unansweredLabel: "응답하지 않음",
    correctAnswerLabel: "정답:",
    explanationLabel: "해설",
  },

  zh: {
    title: "需要复习的题目",
    subtitle: "复习你答错的题目。",
    levelSelectLabel: "选择等级：",
    levelLabel: "KIIP 等级",

    emptyText: "目前没有需要复习的错题。",

    questionLabel: "第",
    yourAnswerLabel: "你的答案：",
    unansweredLabel: "未作答",
    correctAnswerLabel: "正确答案：",
    explanationLabel: "解析",
  },
};
export type WritingHistoryTranslation = {
  title: string;
  subtitle: string;
  emptyText: string;
  levelLabel: string;
  deleteConfirm: string;
  deleteButton: string;
  characterUnit: string;
};

export const writingHistoryTranslations: Record<
  string,
  WritingHistoryTranslation
> = {
  vi: {
    title: "Lịch sử luyện viết",
    subtitle: "Xem lại những bài viết bạn đã lưu.",
    emptyText: "Chưa có bài viết nào được lưu.",
    levelLabel: "KIIP Cấp",
    deleteConfirm: "Bạn có chắc muốn xóa bài viết này không?",
    deleteButton: "Xóa",
     characterUnit: "ký tự",
  },

  en: {
    title: "Writing Practice History",
    subtitle: "Review your saved writing practice.",
    emptyText: "No writing practice has been saved yet.",
    levelLabel: "KIIP Level",
    deleteConfirm: "Are you sure you want to delete this writing practice?",
    deleteButton: "Delete",
    characterUnit: "characters",
  },

  ko: {
    title: "쓰기 연습 기록",
    subtitle: "저장된 쓰기 연습 기록을 확인하세요.",
    emptyText: "저장된 쓰기 연습 기록이 없습니다.",
    levelLabel: "KIIP 단계",
    deleteConfirm: "이 쓰기 연습 기록을 삭제하시겠습니까?",
    deleteButton: "삭제",
      characterUnit: "자",
  },

  zh: {
    title: "写作练习记录",
    subtitle: "查看已保存的写作练习记录。",
    emptyText: "目前还没有保存的写作练习记录。",
    levelLabel: "KIIP 等级",
    deleteConfirm: "确定要删除这条写作练习记录吗？",
    deleteButton: "删除",
    characterUnit: "字",
  },
};
export type SpeakingHistoryTranslation = {
  title: string;
  subtitle: string;
  emptyText: string;
  levelLabel: string;
  deleteConfirm: string;
  deleteButton: string;
  questionLabel: string;
};

export const speakingHistoryTranslations: Record<
  string,
  SpeakingHistoryTranslation
> = {
  vi: {
    title: "Lịch sử luyện nói",
    subtitle: "Xem lại những buổi luyện phỏng vấn đã lưu.",
    emptyText: "Chưa có buổi luyện nói nào được lưu.",
    levelLabel: "KIIP Cấp",
    deleteConfirm: "Bạn có chắc muốn xóa buổi luyện này không?",
    deleteButton: "Xóa",
      questionLabel: "Câu hỏi",
  },

  en: {
    title: "Speaking Practice History",
    subtitle: "Review your saved speaking practice sessions.",
    emptyText: "No speaking practice sessions have been saved yet.",
    levelLabel: "KIIP Level",
    deleteConfirm:
      "Are you sure you want to delete this speaking practice session?",
    deleteButton: "Delete",
     questionLabel: "Question",
  },

  ko: {
    title: "말하기 연습 기록",
    subtitle: "저장된 말하기 및 면접 연습 기록을 확인하세요.",
    emptyText: "저장된 말하기 연습 기록이 없습니다.",
    levelLabel: "KIIP 단계",
    deleteConfirm: "이 말하기 연습 기록을 삭제하시겠습니까?",
    deleteButton: "삭제",
     questionLabel: "질문",
  },

  zh: {
    title: "口语练习记录",
    subtitle: "查看已保存的口语和面试练习记录。",
    emptyText: "目前还没有保存的口语练习记录。",
    levelLabel: "KIIP 等级",
    deleteConfirm: "确定要删除这条口语练习记录吗？",
    deleteButton: "删除",
     questionLabel: "问题",
  },
};
export type ExamOverviewTranslation = {
  title: string;
  subtitle: string;
  levelLabel: string;
  cardDescription: string;
  chooseLevelLabel: string;
};

export const examOverviewTranslations: Record<
  string,
  ExamOverviewTranslation
> = {
  vi: {
    title: "Thi thử tổng hợp",
    subtitle: "Chọn cấp độ để bắt đầu bài thi thử.",
    levelLabel: "KIIP Cấp",
    cardDescription: "Làm đề thi thử tổng hợp cấp",
    chooseLevelLabel: "Chọn cấp độ →",
  },

  en: {
    title: "Comprehensive Mock Test",
    subtitle: "Choose a level to start the mock test.",
    levelLabel: "KIIP Level",
    cardDescription: "Take the comprehensive mock test for level",
    chooseLevelLabel: "Choose Level →",
  },

  ko: {
    title: "종합 모의시험",
    subtitle: "모의시험을 시작할 단계를 선택하세요.",
    levelLabel: "KIIP 단계",
    cardDescription: "단계별 종합 모의시험",
    chooseLevelLabel: "단계 선택 →",
  },

  zh: {
    title: "综合模拟考试",
    subtitle: "选择等级开始模拟考试。",
    levelLabel: "KIIP 等级",
    cardDescription: "参加该等级综合模拟考试",
    chooseLevelLabel: "选择等级 →",
  },
};
export type LevelsPageTranslation = {
  title: string;
  subtitle: string;
  levelLabel: string;
  viewContentLabel: string;
  descriptions: Record<string, string>;
};

export const levelsPageTranslations: Record<
  string,
  LevelsPageTranslation
> = {
  vi: {
    title: "Chọn cấp độ học",
    subtitle: "Chọn cấp độ KIIP phù hợp để bắt đầu học và luyện thi.",
    levelLabel: "KIIP Cấp",
    viewContentLabel: "Xem nội dung →",
    descriptions: {
      "1": "Kiến thức nền tảng, từ vựng và hội thoại cơ bản.",
      "2": "Mở rộng ngữ pháp, từ vựng và tình huống đời sống.",
      "3": "Luyện đọc hiểu, giao tiếp và kiến thức xã hội.",
      "4": "Ôn thi tổng hợp, văn hóa và chính sách xã hội.",
      "5": "Kiến thức nâng cao về xã hội và hội nhập Hàn Quốc.",
    },
  },

  en: {
    title: "Choose a Study Level",
    subtitle: "Choose the KIIP level that suits you to start studying and preparing for the exam.",
    levelLabel: "KIIP Level",
    viewContentLabel: "View Content →",
    descriptions: {
      "1": "Basic knowledge, vocabulary, and everyday conversation.",
      "2": "Expanded grammar, vocabulary, and daily-life situations.",
      "3": "Reading comprehension, communication, and social knowledge.",
      "4": "Comprehensive exam preparation, culture, and social policies.",
      "5": "Advanced knowledge of Korean society and integration.",
    },
  },

  ko: {
    title: "학습 단계 선택",
    subtitle: "학습과 시험 준비를 시작할 KIIP 단계를 선택하세요.",
    levelLabel: "KIIP 단계",
    viewContentLabel: "내용 보기 →",
    descriptions: {
      "1": "기초 지식, 어휘 및 기본 회화를 학습합니다.",
      "2": "문법, 어휘 및 일상생활 상황을 확장해서 학습합니다.",
      "3": "독해, 의사소통 및 사회 지식을 연습합니다.",
      "4": "종합 시험 준비, 문화 및 사회 정책을 학습합니다.",
      "5": "한국 사회와 사회통합에 대한 심화 내용을 학습합니다.",
    },
  },

  zh: {
    title: "选择学习等级",
    subtitle: "选择适合的 KIIP 等级，开始学习和备考。",
    levelLabel: "KIIP 等级",
    viewContentLabel: "查看内容 →",
    descriptions: {
      "1": "学习基础知识、词汇和基本会话。",
      "2": "扩展语法、词汇和日常生活情境。",
      "3": "练习阅读理解、交流和社会知识。",
      "4": "进行综合考试准备，并学习文化和社会政策。",
      "5": "学习有关韩国社会和社会融入的高级知识。",
    },
  },
};
export type SpeakingListTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
  lessonLabel: string;
};

export const speakingListTranslations: Record<
  string,
  SpeakingListTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "Phỏng vấn / Nói",
    subtitle: "Chọn đề để bắt đầu luyện nói.",
    lessonLabel: "Bài",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "Speaking / Interview",
    subtitle: "Choose a prompt to start speaking practice.",
    lessonLabel: "Lesson",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "말하기 / 면접",
    subtitle: "말하기 연습을 시작할 문제를 선택하세요.",
    lessonLabel: "문항",
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "口语 / 面试",
    subtitle: "选择题目开始口语练习。",
    lessonLabel: "题目",
  },
};
export type WritingListTranslation = {
  levelLabel: string;
  title: string;
  subtitle: string;
};

export const writingListTranslations: Record<
  string,
  WritingListTranslation
> = {
  vi: {
    levelLabel: "KIIP Cấp",
    title: "Luyện viết",
    subtitle: "Luyện đề viết, xem gợi ý và bài mẫu.",
  },

  en: {
    levelLabel: "KIIP Level",
    title: "Writing Practice",
    subtitle: "Practice writing prompts, view hints, and sample answers.",
  },

  ko: {
    levelLabel: "KIIP 단계",
    title: "쓰기 연습",
    subtitle: "쓰기 문제를 연습하고 힌트와 예시 답안을 확인하세요.",
  },

  zh: {
    levelLabel: "KIIP 等级",
    title: "写作练习",
    subtitle: "练习写作题目，查看提示和示例答案。",
  },
};