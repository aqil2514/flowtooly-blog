export function BlogArticleHeader({
  title,
  description,
  date,
  readingTime,
}: {
  title: string;
  description: string;
  date?: string;
  readingTime?: string;
}) {
  return (
    <header className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

      <p className="text-muted-foreground">{description}</p>

      {(date || readingTime) && (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {date && <span>{date}</span>}
          {date && readingTime && <span>•</span>}
          {readingTime && <span>{readingTime}</span>}
        </div>
      )}
    </header>
  );
}
