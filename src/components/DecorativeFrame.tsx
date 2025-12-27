import paisleyCorner from "@/assets/paisley-corner.png";

interface DecorativeFrameProps {
  children: React.ReactNode;
  className?: string;
}

const DecorativeFrame = ({ children, className = "" }: DecorativeFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Corner decorations */}
      <img
        src={paisleyCorner}
        alt=""
        className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 object-contain opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <img
        src={paisleyCorner}
        alt=""
        className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 object-contain opacity-70 pointer-events-none scale-x-[-1]"
        aria-hidden="true"
      />
      <img
        src={paisleyCorner}
        alt=""
        className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 object-contain opacity-70 pointer-events-none scale-y-[-1]"
        aria-hidden="true"
      />
      <img
        src={paisleyCorner}
        alt=""
        className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 object-contain opacity-70 pointer-events-none scale-[-1]"
        aria-hidden="true"
      />
      
      {children}
    </div>
  );
};

export default DecorativeFrame;
