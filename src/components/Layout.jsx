function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 導覽列 (全寬背景，內容置中) */}
      <nav className="bg-white border-b border-gray-100 py-6">
        {/* <div className="my-container flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            LIWEN<span className="text-gray-400">STUDIO</span>
          </div>
          <ul className="flex gap-8 text-sm font-medium text-gray-600">
            <li className="cursor-pointer hover:text-black transition-colors">WORKS</li>
            <li className="cursor-pointer hover:text-black transition-colors">BLOG</li>
            <li className="cursor-pointer hover:text-black transition-colors">CONTACT</li>
          </ul>
        </div> */}
      </nav>

      {/* 主要內容區 (自動置中) */}
      <main className="my-container flex-grow">
        {children}
      </main>

      {/* 頁尾 (全寬背景，內容置中) */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        {/* <div className="my-container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-400">
            © 2026 Liwen Studio. Built with React & Tailwind.
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <span>INSTAGRAM</span>
            <span>DRIBBBLE</span>
            <span>LINKEDIN</span>
          </div>
        </div> */}
      </footer>
    </div>
  );
}

export default Layout;
