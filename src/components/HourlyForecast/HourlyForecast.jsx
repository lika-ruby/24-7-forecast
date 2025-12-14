import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Container } from "../Container/Container.jsx";
import { WeathersContext } from "../../contexts/WeatherContext.jsx";
import { useContext } from "react";

import { Title, Canvas, Sect } from "./HourlyForecast.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const HourlyForecast = () => {
  const { hourlyWeather } = useContext(WeathersContext);

  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels:
          hourlyWeather && hourlyWeather.length > 0
            ? hourlyWeather
                .slice(0, 8)
                .map((item) => new Date(item.dt * 1000).getHours() + ":00")
            : Array(8).fill(""),
        datasets: [
          {
            label: "Temperature ℃",
            data:
              hourlyWeather && hourlyWeather.length > 0
                ? hourlyWeather.slice(0, 8).map((item) => item.main.temp)
                : Array(8).fill(null),
            borderColor: "#077066",
            backgroundColor: " #84b095",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [hourlyWeather]);

  return (
    <Sect id="hourly">
      <Container>
        <Title>Hourly forecast</Title>
        <div>
          <Canvas ref={canvasRef} />
        </div>
      </Container>
    </Sect>
  );
};
