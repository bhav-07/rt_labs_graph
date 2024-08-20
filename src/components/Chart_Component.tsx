"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { sensorData } from "@/lib/constant";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="w-screen h-screen py-3">
      <LineChart
        accessibilityLayer
        data={sensorData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={true} horizontal={true} />
        <XAxis
          dataKey="time_ms"
          // tickLine={false}
          // axisLine={false}
          tickMargin={8}
          className="text-xs"
        />
        <YAxis dataKey="ax" />
        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
        <Line
          dataKey="ax"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
