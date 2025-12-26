export type ReadingTimeResult = {
  minutes: number;
  text: string;
  words: number;
};

const WORDS_PER_MINUTE = 200; // standar umum

export function getReadingTime(content: string): ReadingTimeResult {
  // Hapus code block & MDX tags agar hitungan bersih
  const cleaned = content
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/<[^>]+>/g, "") // MDX/HTML tags
    .replace(/\s+/g, " ")
    .trim();

  const words = cleaned ? cleaned.split(" ").length : 0;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    minutes,
    words,
    text: `${minutes} menit baca`,
  };
}
