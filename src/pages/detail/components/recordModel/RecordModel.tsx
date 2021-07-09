import React, {FC} from "react";
import { Input, Modal, Tabs } from "antd";
import LocaleDatePicker from "../../../../components/localDatePicker/LocalDatePicker";
import {RecordType, RecordItem} from '../Record';
import {Moment} from "moment";
import classNames from "classnames";
import { EXPENDITURE_ICON_LIST, INCOME_ICON_LIST } from "../../../../constans";
import { IconButton } from "../../../../components/icon/Icon";
import './RecordModel.css'

const { Item, ErroList } = Form;
interface RecordModalProps{
    visible: boolean;
    onClose: () => void;
}

interface Values extends Omit<RecordItem, 'id' | 'timeStamp'>{
    month: Moment
}

const RecordModal: FC<RecordModalProps>  = ({visible, onClose}) => {
    const [values, dispatch] = useReducer(state: values, update: Partial)
    return (
        <Modal
            centered
            okText = {'确认'}
            cancelText = {'取消'}
            destroyOnClose = {true}
            visible = {visible}
            onCancel = {onClose}
        >
            <div className = "record-modal">
                <Tabs centered size = "middle"> 
                    <Tabs.TabPane tab = {'支出'} key = {RecordType.Expenditure}>
                        {EXPENDITURE_ICON_LIST.map( item => (
                            <div key = {item.name} className = "record-item">
                                <IconButton icon = {item.icon} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab = {'收入'} key = {RecordType.Income}>
                        {INCOME_ICON_LIST.map( item => (
                            <div key = {item.name} className = "record-item">
                                <IconButton icon = {item.icon} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                </Tabs>
                    <div className = {'record-modal__list'}>
                        <div className = {'record-modal__list__item'}>
                            <span>日期:</span>
                            <LocaleDatePicker />
                        </div>
                        <div className = {'record-modal__list__item'}>
                            <span>金额:</span>
                            <Input type = "number" />
                        </div>
                        <div className = {'record-modal__list__item'}>
                            <span>备注:</span>
                            <Input maxLength = {20} />
                        </div>
                    </div>
            </div>
        </Modal>
    )
}

export default RecordModal;