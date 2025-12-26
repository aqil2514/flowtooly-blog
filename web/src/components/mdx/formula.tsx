type FormulaProps = {
  label?: string;
  children: React.ReactNode;
};

export function Formula({ label, children }: FormulaProps) {
  return (
    <div className="my-6 rounded-md border bg-muted/40 px-4 py-3 text-sm font-mono">
      {label && (
        <div className="mb-1 text-xs font-medium text-muted-foreground">
          {label}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
