
import { useState, useEffect } from 'react';
// @ts-ignore
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
// @ts-ignore
import { Link } from 'react-router-dom';

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-blue-100', 'text-black');
    } else {
      document.body.classList.add('bg-blue-100', 'text-black');
      document.body.classList.remove('bg-white', 'text-black');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <header className={`${isLightMode ? 'bg-slate-200' : 'bg-blue-200'} shadow-md`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Sahil</span>
            <span className="text-slate-700">Housing</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline text-slate-700 hover:underline">Sign in</li>
          </Link>
          <li>
            <button onClick={toggleTheme} className="text-slate-700 hover:underline flex items-center">
              {isLightMode ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
