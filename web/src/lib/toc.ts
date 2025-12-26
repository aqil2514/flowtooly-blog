export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function extractToc(source: string): TocItem[] {
  const lines = source.split("\n");

  return lines
    .map((line) => {
      const match = line.match(/^(#{2,3})\s+(.*)/);
      if (!match) return null;

      const level = match[1].length; // ## = 2, ### = 3
      const text = match[2].trim();
      const id = slugify(text);

      return { id, text, level };
    })
    .filter(Boolean) as TocItem[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
