import React, {FC} from "react";
import {Icon, IconButton} from "../../../components/icon/Icon";
import { getIconByName } from "../../../services/iconSelector/iconSelector";
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

interface RecordProps extends RecordItem{}

const Record: FC<RecordProps> = ({timeStamp, type, name, price, remark}) => {
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
                    icon = {'icon-bianji'}
                    onClick = {() => console.log('update')}
                />
                <IconButton 
                    icon = {'icon-shanchu'}
                    onClick = {() => console.log('delete')}
                />
            </div>
        </div>
    )
}

export default Record;