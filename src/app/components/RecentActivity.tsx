import { FileText, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';

interface Activity {
  id: number;
  type: 'document' | 'user' | 'success' | 'alert';
  title: string;
  time: string;
  user?: string;
}

export function RecentActivity() {
  const activities: Activity[] = [
    { id: 1, type: 'document', title: 'New document uploaded', time: '5 minutes ago', user: 'John Doe' },
    { id: 2, type: 'user', title: 'New user registered', time: '1 hour ago', user: 'Jane Smith' },
    { id: 3, type: 'success', title: 'Project approval completed', time: '2 hours ago', user: 'Admin' },
    { id: 4, type: 'alert', title: 'System maintenance scheduled', time: '3 hours ago' },
    { id: 5, type: 'document', title: 'Report submitted', time: '5 hours ago', user: 'Mike Johnson' },
  ];

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'document':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'user':
        return <UserPlus className="w-5 h-5 text-green-600" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="mt-1">{getIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-gray-900">{activity.title}</p>
              {activity.user && <p className="text-sm text-gray-500">by {activity.user}</p>}
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
