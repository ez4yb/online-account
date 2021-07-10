import { groupBy, map, orderBy, reduce} from "lodash";
import { RecordItem, RecordType } from "../pages/detail/components/record/Record";
import { formatTimeStamp } from "./dateHelper";

export interface Summary{
    totalIncome: number;
    totalExpenditure: number;
}

export interface GroupedDailyRecords {
    timeStamp: number;
    summary: Summary;
    records: RecordItem[];
}

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