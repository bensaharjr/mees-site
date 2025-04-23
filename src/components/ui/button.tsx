export function Button({
    children,
    className = "",
    onClick,
    variant = "default",
  }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "default" | "ghost";
  }) {
    const base = "px-4 py-2 rounded text-sm font-medium";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
    };
  
    return (
      <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  