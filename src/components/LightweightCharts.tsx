import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { LightweightChartsProps } from "../utils/Types/allTypes";

const LightweightCharts = (props: LightweightChartsProps) => {
  const {
    data,
    colors: {
      backgroundColor,
      textColor,
      upColor,
      downColor,
      borderVisible,
      wickUpColor,
      wickDownColor,
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current?.clientWidth,
      height: chartContainerRef.current?.clientHeight,
    });
    chart.timeScale().fitContent();

    const candlestickSeries = chart.addCandlestickSeries({
      upColor,
      downColor,
      borderVisible,
      wickUpColor,
      wickDownColor,
    });

    candlestickSeries.setData(data);

    window.addEventListener("resize", handleResize);

    console.log(
      chartContainerRef.current?.clientWidth,
      chartContainerRef.current?.clientHeight
    );

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    textColor,
    upColor,
    downColor,
    borderVisible,
    wickUpColor,
    wickDownColor,
    chartContainerRef.current?.clientWidth,
    chartContainerRef.current?.clientHeight,
  ]);

  return (
    <div className="flex items-center justify-center h-[90vh] w-[90vw]  ">
      <div className="w-full h-full " ref={chartContainerRef}></div>
    </div>
  );
};

export default LightweightCharts;
