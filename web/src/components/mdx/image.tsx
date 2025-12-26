import Image from "next/image";

type MdxImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function MdxImage({ src, alt, caption }: MdxImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="rounded-lg border"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
