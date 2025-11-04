import React, { useContext, useEffect, useState } from 'react';
import { ResponsivePie } from "@nivo/pie";
import { ThemeModeContext } from '../../../Ui/ThemeToggle';

const PieChart = () => {

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

    const data = [
      { id: "iPhone", value: 200 },
      { id: "iPad", value: 120 },
      { id: "MacBook", value: 80 },
      { id: "AirPods", value: 160 },
      { id: "Galaxy", value: 180 },
      { id: "Note", value: 140 },
      { id: "Tab", value: 70 },
      { id: "Watch", value: 90 },
      { id: "Redmi", value: 150 },
      { id: "Poco", value: 110 },
      { id: "MiPad", value: 40 },
      { id: "Band", value: 100 },
      { id: "Narzo", value: 80 },
      { id: "Pad", value: 60 },
    ];

    return (
      <>
        <div style={{ height: 500 }}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
              "Narzo",
              "Pad",
            ]}
            theme={chartThemes[activeTheme]}
            colors={{ scheme: colorSchemes[activeTheme] }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={
              activeTheme === "dark" ? "#e2e8f0" : "#333333"
            }
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            // legends={[
            //   {
            //     anchor: "bottom-right",
            //     direction: "row",
            //     translateY: 56,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     symbolShape: "circle",
            //   },
            // ]}
          />
        </div>
      </>
    );
}

export default PieChart;
