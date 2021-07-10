import React, {FC} from "react";
import { Input, Modal, Tabs, message } from "antd";
import LocaleDatePicker from "../../../../components/localDatePicker/LocalDatePicker";
import {RecordType, RecordItem} from '../record/Record';
import moment, {Moment} from "moment";
import { useReducer, useEffect } from "react";
import classnames from "classnames";
import { EXPENDITURE_ICON_LIST, INCOME_ICON_LIST } from "../../../../constans";
import { IconButton } from "../../../../components/icon/Icon";
import './RecordModal.css'

export type NewRecordItem = Omit<RecordItem, 'id'>

interface RecordModalProps{
    visible: boolean;
    updateRecord?: RecordItem
    onClose: () => void;
    onProcessRecord: ((record: NewRecordItem) => void) | ((record: RecordItem) => void)
}

interface Values extends Omit<RecordItem, 'id' | 'timeStamp'>{
    month: Moment
}

const RecordModal: FC<RecordModalProps>  = ({visible, updateRecord, onClose, onProcessRecord})=> {
    //Partial将定义类型所有的属性都修改为可选
    const [values, dispatch] = useReducer((state: Values, update: Partial<Values>) => 
        ({...state, ...update}),
        {} as Values
    )  

    const onTypeChange = (type?: RecordType, name?: string) => {
        dispatch({type, name});
    }

    const onMonthChange = (month: Moment) => {
        dispatch({month});
    }

    const onPriceChange = (price: number) => {
        dispatch({price});
    }

    const onRemarkChange = (remark: string) => {
        dispatch({remark});
    }
  
    const getNewRecordItem = ({month, price, ...props}: Values): NewRecordItem | RecordItem => {
        const timeStamp = month.valueOf();
        const normalizedPrice = Math.abs(values.price);
        return {...updateRecord, ...props, timeStamp, price: normalizedPrice};
    }

    const onSubmit = () => {
        if(!values.name){
            message.error('请选择类型');
            return;
        }

        if(!values.month){
            message.error('请选择日期');
            return;
        }

        if(!values.price){
            message.error('请输入金额');
            return;
        }

        message.success('提交成功')
        onProcessRecord(getNewRecordItem(values) as RecordItem);
        onClose();
        return;
    }

    useEffect(() => {
        if(!visible){
            return;
        }

        if(updateRecord){
            const {id, timeStamp, ...props} = updateRecord;
            dispatch({...props, month: moment(timeStamp)})
        }else{
            dispatch({
                type: RecordType.Expenditure,
                month: moment(),
                name: '',
                price: undefined,
                remark: ''
            })
        }
    }, [visible, updateRecord])

    return (
        <Modal
            centered
            okText = {'确认'}
            cancelText = {'取消'}
            destroyOnClose = {true}
            visible = {visible}
            onOk = {onSubmit}
            onCancel = {onClose}
        >
            <div className = "record-modal">
                <Tabs 
                    centered size = "middle"
                    activeKey = {values.type || RecordType.Expenditure}
                    onChange = {activeKey => {
                        onTypeChange(activeKey as RecordType, undefined)
                    }}
                > 
                    <Tabs.TabPane tab = {'支出'} key = {RecordType.Expenditure}>
                        {EXPENDITURE_ICON_LIST.map( item => (
                            <div key = {item.name} className = "record-item">
                                <IconButton 
                                    icon = {item.icon}
                                    className = {classnames({active: values.name === item.name})}
                                    onClick = {() => onTypeChange(RecordType.Expenditure, item.name)}
                                />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab = {'收入'} key = {RecordType.Income}>
                        {INCOME_ICON_LIST.map( item => (
                            <div key = {item.name} className = "record-item">
                                <IconButton 
                                    icon = {item.icon} 
                                    className = {classnames({active: values.name === item.name})}
                                    onClick = {() => onTypeChange(RecordType.Income, item.name)}
                                />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                </Tabs>
                    <div className = {'record-modal__list'}>
                        <div className = {'record-modal__list__item'}>
                            <span>日期:</span>
                            <LocaleDatePicker 
                                picker = 'date'
                                value = {values.month}
                                onChange = {onMonthChange}
                            />
                        </div>
                        <div className = {'record-modal__list__item'}>
                            <span>金额:</span>
                            <Input 
                                placeholder = "请输入金额"
                                // suffix="元"
                                type = "number" 
                                value = {values.price}
                                onChange = {e => onPriceChange(parseInt(e.target.value))}
                            />
                        </div>
                        <div className = {'record-modal__list__item'}>
                            <span>备注:</span>
                            <Input 
                                maxLength = {20} 
                                value = {values.remark}
                                onChange = {e => onRemarkChange(e.target.value)}
                            />
                        </div>
                    </div>
            </div>
        </Modal>
    )
}

export default RecordModal;