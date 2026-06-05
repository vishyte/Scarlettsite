import { Settings, LogOut } from 'lucide-react';
import logo from 'figma:asset/551d314fc96416939080bbd7c6a9c37705fa6cef.png';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="DICT Logo" className="h-12" />
        </div>

        {/* User Info & Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-700">vishy te</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-flex items-center gap-1">
              <span className="text-lg">👤</span>
              Staff
            </span>
            <span className="text-gray-600">eGOVSD</span>
          </div>
          
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
