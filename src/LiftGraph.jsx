import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import orp from "./OneRepMaxCalculator";

export default function LiftGraph({ logs }) {

    const [data, setData] = useState({
        labels: logs.map(p => p.date),
        datasets: [{
            label: "One rep max",
            data: logs.map(p => p.weight)
        }]
    })

    useEffect(() => {
        setData(prevData => ({
          ...prevData,
          labels: logs.map(p => p.date),
          datasets: [{
            ...prevData.datasets[0],
            data: logs.map(p => orp(p.weight, p.reps))      // one rep max given weight and reps
          }]
        }));
      }, [logs]);

    return (
        <Line data={data}/>
    )
}