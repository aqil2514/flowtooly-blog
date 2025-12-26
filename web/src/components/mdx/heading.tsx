type HeadingProps = {
  children: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function H2({ children }: HeadingProps) {
  const id = slugify(children);
  return (
    <h2 id={id} className="scroll-mt-24">
      {children}
    </h2>
  );
}

export function H3({ children }: HeadingProps) {
  const id = slugify(children);
  return (
    <h3 id={id} className="scroll-mt-24">
      {children}
    </h3>
  );
}
