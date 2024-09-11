"use client";

import SensorDataChart, { SensorData } from "@/components/Chart_Component_2";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSensorData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get<SensorData[]>("/api/proxy/collect", {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-store",
        },
      });

      console.log("Data fetched:", response.data);
      setSensorData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`Failed to fetch sensor data: ${err.message}`);
        console.error("Error details:", err.response?.data || err.message);
        console.error("Full error object:", err);
      } else {
        setError("An unexpected error occurred");
        console.error("Unexpected error:", err);
      }
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
