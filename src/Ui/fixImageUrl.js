export const fixImageUrl = (url) => {
  if (!url) return "";

  // لو الرابط فعلاً يبدأ بـ uploads فقط
  if (url.startsWith("uploads")) {
    return `https://e-commerce.versai-home.com/${url}`;
  }

  // لو الرابط فيه localhost → نستبدله بالدومين الحقيقي
  if (url.includes("localhost:3000")) {
    return url.replace(
      "http://localhost:3000",
      "https://e-commerce.versai-home.com"
    );
  }

  // لو الرابط نسبي أو فيه مشاكل، نستخدم Regex للـ /uploads/
  const match = url.match(/\/uploads\/.*/);
  if (match) {
    return `https://e-commerce.versai-home.com${match[0]}`;
  }

  // آخر احتمال: نرجع الرابط نفسه كما هو
  return url;
};
