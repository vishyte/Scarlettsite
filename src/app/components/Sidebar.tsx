import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  FolderOpen, 
  Settings, 
  BarChart3,
  Calendar,
  Bell
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems: NavItem[] = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { icon: <FileText className="w-5 h-5" />, label: 'Documents' },
    { icon: <FolderOpen className="w-5 h-5" />, label: 'Projects' },
    { icon: <Users className="w-5 h-5" />, label: 'Users' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Reports' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Calendar' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeItem === item.label
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
