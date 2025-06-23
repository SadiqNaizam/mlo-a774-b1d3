import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Reason {
  percentage: number;
  text: string;
}

interface OtherData {
  value: string;
  text: string;
  hasInfo?: boolean;
}

const reasonsData: Reason[] = [
  { percentage: 40, text: 'The proposal is unclear' },
  { percentage: 20, text: 'However venture pursuit' },
  { percentage: 10, text: 'Other' },
  { percentage: 30, text: 'The proposal is unclear' },
];

const otherData: OtherData[] = [
  { value: '900', text: 'total leads count' },
  { value: '12', text: 'days in average to convert lead' },
  { value: '30', text: 'inactive leads', hasInfo: true },
];

const ReasonCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {reasonsData.map((reason, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-foreground">{reason.percentage}%</p>
                <p className="text-sm text-muted-foreground mt-1">{reason.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            {otherData.map((data, index) => (
              <div key={index}>
                <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-foreground">{data.value}</p>
                    {data.hasInfo && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Leads that have not been contacted in 30 days.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{data.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonCards;
