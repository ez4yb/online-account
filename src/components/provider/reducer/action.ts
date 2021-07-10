import { Moment } from "moment";
import { RecordItem } from "../../../pages/detail/components/record/Record";

export enum Action{
    ADD_RECORD = 'add_record',
    DELETE_RECORD = 'delete_record',
    UPDATE_RECORD = 'update_record',
    UPDATE_MONTHLY_RECORDS = 'update_monthly_records',
    UPDATE_MONTH = 'update_month'
}

export const updateMonth = (month: Moment) => (
    {
        type: Action.UPDATE_MONTH,
        month,
    }as const
)

export const addRecord = (record: RecordItem) => (
    {
        type: Action.ADD_RECORD,
        record
    } as const
)

export const updateRecord = (record: RecordItem) => (
    {
        type: Action.UPDATE_RECORD,
        record
    } as const 
)

export const deleteRecord = (recordId: number) => (
    {
        type: Action.DELETE_RECORD,
        recordId
    } as const
)

export const updateMonthlyRecords = (records: RecordItem[]) => (
    {
        type: Action.UPDATE_MONTHLY_RECORDS,
        records
    }as const
)

export type ActionType = 
| ReturnType<typeof updateMonth> 
| ReturnType<typeof addRecord> 
| ReturnType<typeof updateRecord>
| ReturnType<typeof deleteRecord>
| ReturnType<typeof updateMonthlyRecords>