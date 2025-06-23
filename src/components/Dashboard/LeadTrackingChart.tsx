import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

const chartData = [
  { name: 'March', closedWon: 88, closedLost: 65 },
  { name: 'April', closedWon: 62, closedLost: 45 },
  { name: 'May', closedWon: 95, closedLost: 25 },
  { name: 'June', closedWon: 65, closedLost: 10 },
  { name: 'July', closedWon: 73, closedLost: 42 },
  { name: 'August', closedWon: 32, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p style={{ color: payload[0].color }}>{`Closed Won: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].color }}>{`Closed Lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadTrackingChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('converted');

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Leads tracking</h3>
          <div className="flex items-baseline gap-4 mt-2">
            <p><span className="text-3xl font-bold">680</span> <span className="text-muted-foreground">total closed</span></p>
            <p><span className="text-3xl font-bold">70</span> <span className="text-muted-foreground">total lost</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden sm:block">
              <TabsList>
                <TabsTrigger value="came">Leads came</TabsTrigger>
                <TabsTrigger value="converted">Leads Converted</TabsTrigger>
                <TabsTrigger value="size">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  last 6 months
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 6 months</DropdownMenuItem>
                <DropdownMenuItem>Last 12 months</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38B2AC" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#38B2AC" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedWon" stroke="#38B2AC" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} dot={{r: 4, fill: '#38B2AC', stroke: 'hsl(var(--card))', strokeWidth: 2}} activeDot={{r: 6}} />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} dot={{r: 4, fill: '#EF4444', stroke: 'hsl(var(--card))', strokeWidth: 2}} activeDot={{r: 6}} />
              <Legend 
                verticalAlign="bottom" 
                wrapperStyle={{ paddingTop: '20px' }} 
                iconType='circle' 
                iconSize={8}
                payload={[
                    { value: 'Closed won', type: 'circle', id: 'ID01', color: '#38B2AC' },
                    { value: 'Closed lost', type: 'circle', id: 'ID02', color: '#EF4444' },
                ]}
               />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadTrackingChart;
