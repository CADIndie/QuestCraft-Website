// File: components/DarkModeToggle.js
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const active = localStorage.getItem('darkMode') === 'true';
    setDarkMode(active);
    if (active) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      title="Toggle Dark Mode"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}