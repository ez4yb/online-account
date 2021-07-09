import React, {FC} from "react";
import { DatePicker } from "antd";
import moment, {Moment} from "moment";
import locale from 'antd/es/date-picker/locale/zh_CN';
import './LoaclDatePicker.css';

interface MonthPickerProps{
    picker?: 'month' | 'date';
    value?: Moment;
    onChange?: (timeStamp: Moment, dateString: string) => void;
}

const LocaleDatePicker: FC<MonthPickerProps> = ({picker = 'month', value, onChange }) => {
    return(
        <DatePicker 
            locale = {locale}
            picker = {picker}
            inputReadOnly = {true}
            allowClear = {false}
            disabledDate = {(time) => time.isAfter(moment())}
            value = {value}
            onChange = {onChange as any}
        />
    )
}

export default LocaleDatePicker;