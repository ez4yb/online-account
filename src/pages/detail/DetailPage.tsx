import React, {FC} from 'react';
import { RecordType } from './components/Record';
import { IconButton } from '../../components/icon/Icon';
import DailyRecords from './components/dailyRecord/DailyRecords';
import { groupDailyRecords } from '../../services/recordHelpler';
import './DetailPage.css';

const mockRecordList = [
    {
        timeStamp: 1625731841870,
        type: RecordType.Expenditure,
        name: '餐饮',
        price: 100,
        remark: '请人吃饭',
        id: 1,
    },
    {
        timeStamp: 2625731841800,
        type: RecordType.Expenditure,
        name: '购物',
        price: 200,
        id: 2,
    },
	{
        timeStamp: 2625731841700,
        type: RecordType.Expenditure,
        name: '蔬菜',
        price: 20,
        id: 3,
    },
    {
        timeStamp: 2625731841600,
        type: RecordType.Expenditure,
        name: '宠物',
        price: 200,
        id: 4,
    },
    {
        timeStamp: 1625619436295,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625619436297,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731841300,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731841200,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731841100,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731841000,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840900,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840800,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840700,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840600,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840400,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840300,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840200,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840100,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731840000,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731830000,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731849900,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731341500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731891500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731441500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625738841500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731541500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731141500,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625331441800,
        type: RecordType.Income,
        name: '工资',
        price: 10000,
        remark: '这可是血汗钱啊',
        id: 5,
    },
    {
        timeStamp: 1625731846500,
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
        <div className = "detail-page">
            <div className = "detail-page-header">
                <IconButton 
                    icon = "icon-huabanfuben"
                    className = "detail-page-add-btn"
                    onClick = {() => console.log('add')}
                />
            </div>
            <div className = "detail-page-content">
				{groupedDailyRecords.map(daily => (
					<DailyRecords key = {daily.timeStamp} {...daily} />
				))}
            </div>
        </div>
    )
}

export default DetailPage;