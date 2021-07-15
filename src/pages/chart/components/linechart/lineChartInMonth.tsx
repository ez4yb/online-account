import React, {FC} from 'react';
import {Card} from 'antd';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { DailySummary } from '../../../../services/recordHelpler';

interface LineChartInMonthProps{
    title: string;
    data: DailySummary[]
}

const LineChartInMonth: FC<LineChartInMonthProps> = ({title, data}) => {
    return (
        <Card title = {`${title}:`}>
            <ResponsiveContainer height = {300}>
                <LineChart data = {data}>
                    <CartesianGrid strokeDasharray = "3 3"/>
                    <XAxis dataKey = "date" />
                    <YAxis name = "¥"/>
                    <Line dataKey = "totalIncome" name = "收入" stroke = "#8884d8" />
                    <Line dataKey = "totalExpenditure" name = "支出" stroke = "#8dd1e1" />
                    <Tooltip labelFormatter = {label => <span>{label}日明细: </span>} />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default LineChartInMonth;