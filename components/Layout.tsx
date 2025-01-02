import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className={`flex-grow transition-all duration-300 ${
          isCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-64'
        } pt-4`}>
          {children}
        </main>
      </div>
    </div>
  );
} 