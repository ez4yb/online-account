import moment from 'moment';
import 'moment/locale/zh-cn';

export enum DateFormat {
    MONTH_DATEOFWEEK = 'MMMDo dddd',//月 日 星期
    YEAR_MONTH_DAY = 'YYYY-MM-DD',//年 月 日
}

export const formatTimeStamp = (timeStamp: number, format = DateFormat.YEAR_MONTH_DAY) => {
    return moment(timeStamp).format(format)
}