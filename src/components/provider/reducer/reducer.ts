import moment, {Moment} from "moment";
import { RecordItem} from "../../../pages/detail/components/record/Record";
import { isSameMonth } from "../../../services/dateHelper";
import { Action, ActionType } from "./action";

export interface State{
    month: Moment;
    monthlyRecords: RecordItem[];
}

export const defaultState: State = {
    month: moment(),
    monthlyRecords:[]
}

const reducer  = (state: State, action: ActionType) => {
    switch(action.type){
        case Action.UPDATE_MONTH:
            return{
                ...state,
                month: action.month
            }
        case Action.ADD_RECORD:
            return{
                ...state,
                monthlyRecords: isSameMonth(action.record.timeStamp, state.month) 
                ? state.monthlyRecords.concat(action.record) 
                : state.monthlyRecords
            }
        case Action.UPDATE_RECORD:
            return {
                ...state,
                
                monthlyRecords: isSameMonth(action.record.timeStamp, state.month)
                ? 
                state.monthlyRecords.map(item => 
                    item._id === action.record._id ? action.record : item
                )
                : state.monthlyRecords.filter(item => item._id !== action.record._id)
            }
        case Action.DELETE_RECORD:
            return{
                ...state,
                monthlyRecords: state.monthlyRecords.filter(item => (
                    item._id !== action.recordId
                ))
            }
        case Action.UPDATE_MONTHLY_RECORDS:
            return{
                ...state,
                monthlyRecords: action.records
            }
        default:
            return state;
    }
}

export default reducer;