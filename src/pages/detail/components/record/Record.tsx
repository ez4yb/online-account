import React, {FC} from "react";
import {Icon, IconButton} from "../../../../components/icon/Icon";
import { Popconfirm } from "antd";
import { getIconByName } from "../../../../services/iconSelector/iconSelector";
import './Record.css';

export enum RecordType{
    Income = 'income',
    Expenditure = 'expenditure'
}

export interface RecordItem{
    id: number;
    timeStamp: number;
    type: RecordType;
    name: string;
    price: number;
    //可选的备注信息
    remark?: string;
}

interface RecordProps extends RecordItem{
    onOpenUpdateModal: (id: number) => void;
    onDeleteRecord: (id: number) => void;
}

const Record: FC<RecordProps> = ({id, type, name, price, remark, onOpenUpdateModal, onDeleteRecord}) => {
    const icon = getIconByName(type, name);

    return(
        <div className = "record">
            <Icon className = "record-icon" icon = {icon.icon}/>
            <div className= "record-name">{name}</div>
            <div className = "record-remark">{remark}</div>
            <div className = "record-price">
                {type === RecordType.Income ? '+' : '-'}
                {price}
            </div>
            <div className = "record-action">
                <IconButton 
                    icon = "icon-bianji"
                    onClick = {() => {onOpenUpdateModal(id)}}
                />
                <Popconfirm
                    title = "确定要删除这条记录吗"
                    onConfirm = {() => {onDeleteRecord(id)}}
                    okText = "确认"
                    cancelText = "取消"
                >
                    <IconButton 
                        icon = "icon-shanchu"
                        onClick = {() => console.log('delete')}
                    />
                </Popconfirm>
            </div>
        </div>
    )
}

export default Record;