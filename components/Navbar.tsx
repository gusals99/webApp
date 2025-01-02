import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiHome, FiUser, FiFolder } from 'react-icons/fi';
import { useRouter } from 'next/router';

const menuItems = [
  { id: 'home', label: '홈', href: '/', icon: <FiHome size={20} /> },
  { id: 'about', label: '소개', href: '/about', icon: <FiUser size={20} /> },
  { id: 'projects', label: '프로젝트', href: '/projects', icon: <FiFolder size={20} /> }
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="block md:hidden fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center px-2 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                  ${router.pathname === item.href ? 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400' : ''}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex flex-col items-center px-2 py-1 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="text-lg">
                  {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                </span>
                <span className="text-xs mt-1">
                  {theme === 'dark' ? '라이트' : '다크'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 