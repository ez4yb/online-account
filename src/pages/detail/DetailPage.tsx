import React, {FC} from 'react';
import { RecordType } from './components/Record';
import DailyRecords from './components/dailyRecord/DailyRecords';
import { groupDailyRecords } from '../../services/recordHelpler';

const mockRecordList = [
    {
        timeStamp: 1625619436295,
        type: RecordType.Expenditure,
        name: '餐饮',
        price: 100,
        remark: '请人吃饭',
        id: 1,
    },
    {
        timeStamp: 1625619436295,
        type: RecordType.Expenditure,
        name: '购物',
        price: 200,
        id: 2,
    },
	{
        timeStamp: 1625619436295,
        type: RecordType.Expenditure,
        name: '蔬菜',
        price: 20,
        id: 3,
    },
    {
        timeStamp: 1625619436293,
        type: RecordType.Expenditure,
        name: '宠物',
        price: 200,
        id: 4,
    },
    {
        timeStamp: 1625619436293,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
]

const DetailPage: FC = () => {
	const groupedDailyRecords = groupDailyRecords(mockRecordList);
    return(
        <div className = "detailPage">
            <div className = "detail-page-content">
				{groupedDailyRecords.map(daily => (
					<DailyRecords key = {daily.timeStamp} {...daily} />
				))}
            </div>
        </div>
    )
}

export default DetailPage;