// Recharts, Chart.js, ECharts, Highcharts, antv/g2
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as React from 'react';
const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
class SimpleLineChart extends React.Component {
    render() {
        return (React.createElement(LineChart, { width: 600, height: 300, data: data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },
            React.createElement(XAxis, { dataKey: "name" }),
            React.createElement(YAxis, null),
            React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
            React.createElement(Tooltip, null),
            React.createElement(Legend, null),
            React.createElement(Line, { type: "monotone", dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } }),
            React.createElement(Line, { type: "monotone", dataKey: "uv", stroke: "#82ca9d" })));
    }
}
export default SimpleLineChart;
//# sourceMappingURL=Charts.js.map