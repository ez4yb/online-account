import { groupBy, map, orderBy, reduce} from "lodash";
import { RecordItem, RecordType } from "../pages/detail/components/record/Record";
import { DateFormat, formatTimeStamp } from "./dateHelper";
import { Moment } from "moment";

export interface Summary{
    totalIncome: number;
    totalExpenditure: number;
}

export interface TypeSummary{
    name: string;
    total: number;
}

export interface GroupedDailyRecords {
    timeStamp: number;
    summary: Summary;
    records: RecordItem[];
}

export type DailySummary = Summary & {date: number}

export const getSummary = (records: RecordItem[]) : Summary => {
    return reduce(
        records,
        (summary, record) => {
            if(record.type === RecordType.Income){
                summary.totalIncome += record.price;
            }
            if(record.type === RecordType.Expenditure){
                summary.totalExpenditure += record.price;
            }
            return summary;
        },
        {totalIncome: 0, totalExpenditure: 0}
    )
}

export const groupDailyRecords = (records: RecordItem[]): GroupedDailyRecords[] => {
    const groupedDailyRecords = groupBy(records, (record) => (
        formatTimeStamp(record.timeStamp)
    ))

    return orderBy(
        map(Object.keys(groupedDailyRecords), (day) => {
            const dailyRecords = groupedDailyRecords[day]
            const summary = getSummary(dailyRecords)
            return{
                summary,
                timeStamp: dailyRecords[0].timeStamp,
                records: orderBy(dailyRecords, ['timeStamp'], ['desc'])
            }
        }),
        ['timeStamp'],
        ['desc']
    )
}

export const getDailySummaryInMonth = (
    records: RecordItem[],
    month: Moment
): DailySummary[] => {
    const daysInMonth = month.daysInMonth();

    const resultOfPayment = groupDailyRecords(records).map(d => ({
        date: parseInt(formatTimeStamp(d.timeStamp, DateFormat.Day)),
        totalExpenditure: d.summary.totalExpenditure,
        totalIncome: d.summary.totalIncome
    }))

    const result = [];

    for(let i = 1; i <= daysInMonth; i++){
        const payment = resultOfPayment.find(d => d.date === i);
        result.push(payment || {date: i, totalExpenditure: 0, totalIncome: 0})
    }

    return result;
}

export const getTypeSummaryInMonth = (records: RecordItem[]) => {
    const incomeSummary: TypeSummary[] = [];
    const expenditureSummary: TypeSummary[] = [];

    records.forEach(record => {
        const targetList = record.type === RecordType.Income ? incomeSummary : expenditureSummary;

        const targetType = targetList.find(item => item.name === record.name)

        if(targetType){
            targetType.total += record.price
        }else{
            targetList.push({name: record.name, total: record.price});
        }
    })

    return {incomeSummary, expenditureSummary};
}