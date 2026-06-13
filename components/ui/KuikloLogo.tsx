import Image from "next/image";

export function KuikloLogo({ className }: { className?: string }) {
  return (
    <img 
      src="/images/categories/kuiklo-logo.png" 
      alt="Kuiklo Logo" 
      className={className || "h-10 w-auto"} 
    />
  );
}
