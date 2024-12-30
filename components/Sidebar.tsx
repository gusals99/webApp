import React from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { id: 'home', label: '홈', href: '/', icon: <FiHome size={20} /> },
  { id: 'about', label: '소개', href: '/about', icon: <FiUser size={20} /> },
  { id: 'skills', label: '기술', href: '/skills', icon: <FiCode size={20} /> },
  { id: 'projects', label: '프로젝트', href: '/projects', icon: <FiFolder size={20} /> },
  { id: 'contact', label: '연락처', href: '/contact', icon: <FiMail size={20} /> },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
    router.push(href);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 dark:bg-gray-700 text-white md:hidden"
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Link 
              href="/" 
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
            >
              <span className={`text-xl font-bold text-gray-900 dark:text-white ${isCollapsed ? 'hidden' : 'block'}`}>
                Portfolio
              </span>
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
            </Link>
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
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
} 