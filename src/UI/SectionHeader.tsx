type SectionHeaderProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className="w-full flex flex-col items-center justify-center text-center pt-20 pb-16 px-4">
      {/* Subtitle with lines on both sides */}
      <div className="flex items-center gap-4 mb-6 ">
        <div className="w-10 md:w-14 h-[1px] bg-white" />
        <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] bg-gradient-to-r from-[#80FFDB] to-[#64DFDF] bg-clip-text text-transparent filter drop-shadow-sm">
          {subtitle}
        </span>
        <div className="w-10 md:w-14 h-[1px] bg-white" />
      </div>

      {/* Main Title with Serif Italic injection */}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 ">
        {firstPart} <span className="font-serif italic font-semibold bg-gradient-to-r from-[#B79CED] to-[#72EFDD] bg-clip-text text-transparent filter drop-shadow-sm">{lastWord}</span>
      </h2>

      {/* Description */}
      <p className="max-w-md mx-auto text-white text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}