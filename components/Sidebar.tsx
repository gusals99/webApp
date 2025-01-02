import React, { useEffect, useState } from 'react';
import { FiHome, FiUser, FiFolder, FiSun, FiMoon, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const menuItems = [
  { id: 'home', label: '홈', href: '/', icon: <FiHome size={20} /> },
  { id: 'about', label: '소개', href: '/about', icon: <FiUser size={20} /> },
  { id: 'projects', label: '프로젝트', href: '/projects', icon: <FiFolder size={20} /> }
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      setIsCollapsed(!isCollapsed);
    }
    router.push(href);
  };

  return (
    <>
      <aside 
        className={`fixed left-0 h-screen bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 z-40 
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isCollapsed ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          hidden md:block
        `}
      >
        <div className="flex flex-col h-full pt-4">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
              {!isCollapsed && (
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                  Portfolio
                </Link>
              )}
              <div className="flex items-center gap-2">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </button>
                )}
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label={isCollapsed ? '메뉴 펼치기' : '메뉴 접기'}
                >
                  <FiChevronLeft
                    size={20}
                    className={`transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`
                      flex items-center px-4 py-3 rounded-lg
                      text-gray-800 dark:text-gray-200
                      hover:bg-gray-100 dark:hover:bg-gray-700
                      transition-colors
                      ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}
                      ${router.pathname === item.href ? 'bg-gray-100 dark:bg-gray-700' : ''}
                    `}
                  >
                    <span className={`text-gray-500 dark:text-gray-400 ${router.pathname === item.href ? 'text-blue-500 dark:text-blue-400' : ''}`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <span className={`font-medium ${router.pathname === item.href ? 'text-blue-500 dark:text-blue-400' : ''}`}>
                        {item.label}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}
    </>
  );
} 