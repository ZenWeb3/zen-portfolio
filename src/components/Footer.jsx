export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#666]">
            <span>© {currentYear}</span>
            <span className="text-[#333]">·</span>
            <span>Samuel Edohoeket</span>
            <span className="text-[#333]">·</span>
            <span className="text-[#00ff88]">@zen</span>
          </div>

          <div className="text-sm text-[#666] font-mono">
            Built with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}