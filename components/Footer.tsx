export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#475569] text-sm">
          Built by <span className="text-[#4f9cf9]">Nick Perry</span> · {new Date().getFullYear()}
        </p>
        <p className="text-[#334155] text-xs font-mono">
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
