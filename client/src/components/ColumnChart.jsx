import React, { Component } from 'react'
import Chart from "react-apexcharts";



export default function ColumnChart({ productData }) {
  const xaxisData = productData.map(elm => elm.date);
  const seriesData = productData.map(elm => elm.inventory_level);

  const options = {
    xaxis: {
      categories: xaxisData
    }
  };

  const series = [
    {
      name: "Inventory level",
      data: seriesData
    }
  ]

  return (
    <div className="cont-width_0">
      <div className="column-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="800"
        />
      </div>
    </div>
  )
}
