import { Moment } from "moment";
import { RecordItem } from "../../../pages/detail/components/Record";

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

export type ActionType = ReturnType<typeof updateMonth>