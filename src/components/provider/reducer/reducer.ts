import moment, {Moment} from "moment";
import { RecordItem, RecordType } from "../../../pages/detail/components/record/Record";
import { Action, ActionType } from "./action";

export interface State{
    month: Moment;
    monthlyRecords: RecordItem[];
}

export const defaultState: State = {
    month: moment(),
    monthlyRecords:[{
            timeStamp: 1613477254556, 
            name: '餐饮',
            type: RecordType.Expenditure,
            price: 100,
            remark: '请人吃饭',
            id: 1,
        },
        {
            timeStamp: 1612969810000, 
            type: RecordType.Expenditure,
            name: '购物',
            price: 200,
            id: 2,
        },
        {
            timeStamp: 1612969810000, 
            type: RecordType.Expenditure,
            name: '蔬菜',
            price: 20,
            id: 3,
        },
        {
            timeStamp: 1613477254556, 
            type: RecordType.Expenditure,
            name: '宠物',
            price: 200,
            id: 4,
        },
        {
            timeStamp: 1613477254556, 
            type: RecordType.Income,
            name: '工资',
            price: 10000,
            remark: '这可是血汗钱啊',
            id: 5,
        },
    ],
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
                monthlyRecords: state.monthlyRecords.concat(action.record)
            }
        case Action.UPDATE_RECORD:
            return {
                ...state,
                monthlyRecords: state.monthlyRecords.map(item => 
                    item.id === action.record.id ? action.record : item
                )
            }
        case Action.DELETE_RECORD:
            return{
                ...state,
                monthlyRecords: state.monthlyRecords.filter(item => (
                    item.id !== action.recordId
                ))
            }
        default:
            return state;
    }
}

export default reducer;