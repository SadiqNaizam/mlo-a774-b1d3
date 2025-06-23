import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  hasTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400', hasTooltip: true },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-gray-800' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const FunnelCount: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold">{totalCount}</span>
          <span className="text-muted-foreground">active leads</span>
        </div>
        <div className="flex w-full h-2 rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="space-y-4 text-sm">
          {funnelData.map((stage) => (
             <div key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-4 text-muted-foreground">
              <div className={cn('w-2.5 h-2.5 rounded-full', stage.color)}></div>
              <div className="text-card-foreground font-medium">{stage.name}</div>
              <div className="justify-self-end">{stage.count}</div>
              <div className="justify-self-end">$ {stage.value}</div>
               {stage.hasTooltip ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <div className="justify-self-end cursor-pointer">{stage.duration}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                 <div className="justify-self-end text-right">{stage.name === 'In conversation' ? '' : stage.duration}</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCount;
