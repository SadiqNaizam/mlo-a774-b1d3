import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  FileStack, 
  ShoppingBasket, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings, 
  Layers 
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

interface NavSection {
  id: string;
  items: NavItem[];
}

const navData: NavSection[] = [
  {
    id: 'main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, active: true },
      { id: 'leads', label: 'Leads', icon: Users },
      { id: 'customers', label: 'Customers', icon: User },
    ]
  },
  {
    id: 'work',
    items: [
      { id: 'proposals', label: 'Proposals', icon: FileText },
      { id: 'invoices', label: 'Invoices', icon: FileStack },
      { id: 'items', label: 'Items', icon: ShoppingBasket },
    ]
  },
  {
    id: 'communication',
    items: [
      { id: 'mail', label: 'Mail', icon: Mail },
      { id: 'shoebox', label: 'Shoebox', icon: Archive },
      { id: 'calendar', label: 'Calendar', icon: Calendar },
    ]
  },
];

const helpData: NavItem[] = [
  { id: 'help-main', label: 'Help', icon: HelpCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 bg-card text-card-foreground border-r flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-black rounded-lg text-white">
             <Layers size={24} />
          </div>
          <span className="font-bold text-lg">b.io</span>
        </div>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-6">
        {navData.map((section) => (
          <div key={section.id}>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium',
                      item.active 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}\
      </nav>
      <div className="mt-auto p-4 border-t">
        <ul className="space-y-1">
          {helpData.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;