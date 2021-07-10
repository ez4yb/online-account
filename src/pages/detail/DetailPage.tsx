import React, {FC} from 'react';
import { RecordItem } from './components/record/Record';
import { IconButton } from '../../components/icon/Icon';
import DailyRecords from './components/dailyRecord/DailyRecords';
import { groupDailyRecords } from '../../services/recordHelpler';
import './DetailPage.css';
import { useContext, useState  } from 'react';
import { Context } from '../../components/provider/Provider';
import RecordModal, { NewRecordItem } from './components/recordModal/RecordModal';
import { addRecord, deleteRecord, updateRecord } from '../../components/provider/reducer/action';



const DetailPage: FC = () => {
    const [visible, setVisible] = useState(false);
    const [updateRecordId, setUpdateRecordId] = useState<number>()
    const {state, dispatch} = useContext(Context);
	const groupedDailyRecords = groupDailyRecords(state.monthlyRecords);

    const onToggleVisible = () => {
        setVisible(!visible);
    }

    const onAddRecord = (record: NewRecordItem) => {
        dispatch(addRecord({...record, id : record.timeStamp}))
    }

    const onUpdateRecord = (record: RecordItem) => {
        dispatch(updateRecord(record))
    }

    const onDeleteRecord = (recordId: number) => {
        dispatch(deleteRecord(recordId))
    }
    
    const onOpenUpdateModal = (id: number) => {
        setUpdateRecordId(id);
        setVisible(true);
    }

    const target = updateRecordId ? state.monthlyRecords.find(item => item.id === updateRecordId) : undefined;

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
					<DailyRecords 
                        key = {daily.timeStamp} 
                        {...daily} 
                        onOpenUpdateModal = {onOpenUpdateModal}
                        onDeleteRecord = {onDeleteRecord}
                    />
				))}
            </div>
            <RecordModal 
                visible = {visible} 
                updateRecord = {target}
                onClose = {onToggleVisible} 
                onProcessRecord = {target ? onUpdateRecord : onAddRecord}/>
        </div>
    )
}

export default DetailPage;