import { Plus, Upload, Download, Send } from 'lucide-react';

export function QuickActions() {
  const actions = [
    { icon: <Plus className="w-5 h-5" />, label: 'New Document', color: 'blue' },
    { icon: <Upload className="w-5 h-5" />, label: 'Upload File', color: 'green' },
    { icon: <Download className="w-5 h-5" />, label: 'Export Data', color: 'orange' },
    { icon: <Send className="w-5 h-5" />, label: 'Submit Report', color: 'purple' },
  ];

  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg text-white transition-colors ${
              colorClasses[action.color as keyof typeof colorClasses]
            }`}
          >
            {action.icon}
            <span className="text-sm">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
