import React, { useContext, useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ThemeModeContext } from "../../../Ui/ThemeToggle";

const BarChart = () => {
  const { themeMode } = useContext(ThemeModeContext);
  const [activeTheme, setActiveTheme] = useState(themeMode);

  useEffect(() => {
    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setActiveTheme(mediaQuery.matches ? "dark" : "light");
      const handler = (e) => setActiveTheme(e.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      setActiveTheme(themeMode);
    }
  }, [themeMode]);

  const data = [
    { brand: "Apple", iPhone: 200, iPad: 120, MacBook: 80, AirPods: 160 },
    { brand: "Samsung", Galaxy: 180, Note: 140, Tab: 70, Watch: 90 },
    { brand: "Xiaomi", Redmi: 150, Poco: 110, MiPad: 40, Band: 100 },
    { brand: "Huawei", Mate: 100, Nova: 130, PSeries: 90, Watch: 60 },
    { brand: "Oppo", Reno: 120, ASeries: 100, Find: 70, Band: 50 },
    { brand: "Realme", GT: 130, CSeries: 110, Narzo: 80, Pad: 60 },
  ];

  const chartThemes = {
    light: {
      background: "var(--bg-200)",
      textColor: "#222",
      axis: {
        domain: { line: { stroke: "#999" } },
        ticks: { line: { stroke: "#999" }, text: { fill: "#222" } },
      },
      grid: { line: { stroke: "#e5e7eb" } },
      legends: { text: { fill: "#222" } },
      tooltip: { container: { background: "#fff", color: "#000" } },
    },
    dark: {
      background: "var(--bg-200)",
      textColor: "#e2e8f0",
      axis: {
        domain: { line: { stroke: "#475569" } },
        ticks: { line: { stroke: "#475569" }, text: { fill: "#e2e8f0" } },
      },
      grid: { line: { stroke: "#1e293b" } },
      legends: { text: { fill: "#e2e8f0" } },
      tooltip: { container: { background: "#1e293b", color: "#fff" } },
      legend: {
        textColor: "#e2e8f0",
      },
    },
    system: {},
  };

  
  const colorSchemes = {
    light: "blues",
    dark: "greys",
  };

  return (
    <div style={{ height: 500 }}>
      <ResponsiveBar
        data={data}
        keys={[
          "iPhone",
          "iPad",
          "MacBook",
          "AirPods",
          "Galaxy",
          "Note",
          "Tab",
          "Watch",
          "Redmi",
          "Poco",
          "MiPad",
          "Band",
          "Mate",
          "Nova",
          "PSeries",
          "Reno",
          "ASeries",
          "Find",
          "GT",
          "CSeries",
          "Narzo",
          "Pad",
        ]}
        indexBy="brand"
        theme={chartThemes[activeTheme]}
        colors={{ scheme: colorSchemes[activeTheme] }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Brand",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Device Count",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemWidth: 100,
            itemHeight: 16,
            symbolSize: 20,
          },
        ]}
        animate={true}
        motionConfig="gentle"
      />
    </div>
  );
};

export default BarChart;
