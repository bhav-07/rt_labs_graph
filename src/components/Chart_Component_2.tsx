"use client";

import { sensorData } from "@/lib/constant";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SensorData {
  time_ms: number;
  ax: number;
}

const SensorDataChart: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sensorData}>
          <XAxis
            dataKey="time_ms"
            label={{
              value: "Time (ms)",
              position: "insideBottom",
              offset: 2,
            }}
            interval={50}
          />
          <YAxis
            dataKey="ax"
            label={{
              value: "Acceleration (ax)",
              angle: -90,
              position: "center",
              offset: -20,
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ax" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorDataChart;
