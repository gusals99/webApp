import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useSidebar } from '@/src/contexts/SidebarContext';

export const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const motionProps: HTMLMotionProps<"div"> = {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      width: '16rem',
      backgroundColor: 'white',
      zIndex: 50
    },
    initial: { x: '100%' },
    animate: { x: isOpen ? 0 : '100%' },
    transition: { type: 'spring', damping: 20 }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      <motion.div {...motionProps}>
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            닫기
          </button>
          <div className="mt-8">
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">메뉴 1</a>
              <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">메뉴 2</a>
              <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">메뉴 3</a>
            </nav>
          </div>
        </div>
      </motion.div>
    </>
  );
} 