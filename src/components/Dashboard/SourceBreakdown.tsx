import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#38B2AC' }, // teal-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#6EE7B7' }, // emerald-300
];

const SourceBreakdown: React.FC = () => {
  const chartData = data.map(item => ({ name: item.name, value: item.percentage }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip
                    contentStyle={{ 
                        background: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)'
                    }}
                    formatter={(value: number, name: string) => [`${value}%`, name]}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map((source) => (
              <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-sm">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }}></div>
                <div className="text-card-foreground font-medium">{source.name}</div>
                <div className="text-muted-foreground justify-self-end">$ {source.value}</div>
                <div className="text-muted-foreground justify-self-end w-10 text-right">{source.percentage}%</div>
              </div>
            ))}
             <div className="flex justify-end pt-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <div className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md cursor-pointer">
                          from leads total
                       </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage calculated from total leads.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourceBreakdown;
