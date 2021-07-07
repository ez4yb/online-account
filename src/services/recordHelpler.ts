import { groupBy, map, orderBy, reduce} from "lodash";
import { RecordItem, RecordType } from "../pages/detail/components/Record";
import { formatTimeStamp } from "./dateHelper";

export interface Summary{
    totalIncome: number;
    totalExpenditure: number;
}

export interface GroupDailyRecords {
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

export const groupDailyRecords = (records: RecordItem[]): GroupDailyRecords[] => {
    const groupDailyRecords = groupBy(records, (record) => {
        formatTimeStamp(record.timeStamp);
    })

    return orderBy(
        map(Object.keys(groupDailyRecords), (day) => {
            const dailyRecords = groupDailyRecords[day]
            const summary = getSummary(dailyRecords)
            return{
                timeStamp: dailyRecords[0].timeStamp,
                summary,
                records: orderBy(dailyRecords, ['timeStamp'], ['desc'])
            }
        }),
        ['timeStamp'],
        ['desc']
    )
}