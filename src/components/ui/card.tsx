export function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-white shadow rounded-lg border border-gray-200">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  