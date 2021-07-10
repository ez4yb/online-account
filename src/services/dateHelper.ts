import moment, { Moment } from 'moment';
import 'moment/locale/zh-cn';

export enum DateFormat {
    MONTH_DATEOFWEEK = 'MMMDo dddd',//月 日 星期
    YEAR_MONTH_DAY = 'YYYY-MM-DD',//年 月 日
    Day = "D"
}

export const formatTimeStamp = (timeStamp: number, format = DateFormat.YEAR_MONTH_DAY) => {
    return moment(timeStamp).format(format)
}

export const getMonthRange = (month: Moment) => {
    const start = moment(month).startOf('month').valueOf();
    const end = moment(month).endOf('month').valueOf();
    return [start, end];
}

export const isSameMonth = (timeStamp: number, currentMonth: Moment) => {
    const month = moment(timeStamp);
    return(
        month.isSame(currentMonth, 'year') && month.isSame(currentMonth, 'month')
    )
}