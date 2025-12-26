import { cn } from "@/lib/utils";

type CalloutProps = {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
};

const styles = {
  info: "border-blue-500/30 bg-blue-500/5",
  warning: "border-yellow-500/30 bg-yellow-500/5",
  success: "border-green-500/30 bg-green-500/5",
};

export function Callout({
  type = "info",
  children,
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border px-4 py-3 text-sm",
        styles[type]
      )}
    >
      {children}
    </div>
  );
}
