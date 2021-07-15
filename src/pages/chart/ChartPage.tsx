import React, {FC, useContext} from 'react';
import { Context } from '../../components/provider/Provider';
import { getDailySummaryInMonth, getTypeSummaryInMonth } from '../../services/recordHelpler';
import LineChartInMonth from './components/linechart/lineChartInMonth';
import PieChartInMonth from './components/piechart/pieChartInMonth';
import './ChartPage.css';

const ChartPage: FC = () => {
    const {
        state: {monthlyRecords, month}
    } = useContext(Context);

    const dailySummaryInMonth = getDailySummaryInMonth(monthlyRecords, month);
    const {incomeSummary, expenditureSummary} = getTypeSummaryInMonth(monthlyRecords);

    return (
        <div className = "chart-page">
            <div className = "chart-page__header"></div>
            <div className = "chart-page__content">
                <LineChartInMonth title = "本月收支统计" data = {dailySummaryInMonth} />
                <PieChartInMonth title = "支出统计" data = {expenditureSummary} />
                <PieChartInMonth title = "收入统计" data = {incomeSummary} />
            </div>
        </div>
    )
}

export default ChartPage;