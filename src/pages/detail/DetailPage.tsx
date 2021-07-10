import React, {FC} from 'react';
import { RecordType } from './components/record/Record';
import { IconButton } from '../../components/icon/Icon';
import DailyRecords from './components/dailyRecord/DailyRecords';
import { groupDailyRecords } from '../../services/recordHelpler';
import './DetailPage.css';
import { useContext, useState  } from 'react';
import { Context } from '../../components/provider/Provider';
import RecordModal, { NewRecordItem } from './components/recordModal/RecordModal';
import { addRecord } from '../../components/provider/reducer/action';



const DetailPage: FC = () => {
    const [visible, setVisible] = useState(false);
    const {state, dispatch} = useContext(Context)
	const groupedDailyRecords = groupDailyRecords(state.monthlyRecords);

    const onToggleVisible = () => {
        setVisible(!visible);
    }

    const onAddRecord = (record: NewRecordItem) => {
        dispatch(addRecord({...record, id : record.timeStamp}))
    }

    return(
        <div className = "detail-page">
            <div className = "detail-page-header">
                <IconButton 
                    icon = "icon-huabanfuben"
                    className = "detail-page-add-btn"
                    onClick = {onToggleVisible}
                />
            </div>
            <div className = "detail-page-content">
				{groupedDailyRecords.map(daily => (
					<DailyRecords key = {daily.timeStamp} {...daily} />
				))}
            </div>
            <RecordModal visible = {visible} onClose = {onToggleVisible} onAddRecord = {onAddRecord}/>
        </div>
    )
}

export default DetailPage;