"use client";

import SensorDataChart, { SensorData } from "@/components/Chart_Component_2";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Home = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSensorData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: SensorData[] = await response.json();
      setSensorData(data);
    } catch (err) {
      setError("Failed to fetch sensor data");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {sensorData.length === 0 && (
        <Button
          onClick={fetchSensorData}
          disabled={loading}
          size={"lg"}
          className="text-2xl p-6"
        >
          {loading ? "Fetching..." : "Get Sensor Data"}
        </Button>
      )}

      {error && <p className="text-red-500 text-xl mt-4">{error}</p>}

      {sensorData.length > 0 && <SensorDataChart data={sensorData} />}
    </div>
  );
};

export default Home;
