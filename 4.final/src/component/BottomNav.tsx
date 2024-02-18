import React from "react";

interface BottomNavigationProps {
  children: React.ReactNode;
  className?: string;
}

interface BottomNavigationItemProps {
  className?: string;
  title: string;
  icon: React.ReactNode;
}

const BottomNavigation: React.FC<BottomNavigationProps> & {
  Item: React.FC<BottomNavigationItemProps>;
} = ({ children, className }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ${className}`}
    >
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {children}
      </div>
    </div>
  );
};

BottomNavigation.Item = ({ title, icon }) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
      >
        {icon}
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600">
          {title}
        </span>
      </button>
    </>
  );
};

export { BottomNavigation };
