import React, {FC} from 'react';
import { RecordItem } from './components/record/Record';
import { IconButton } from '../../components/icon/Icon';
import DailyRecords from './components/dailyRecord/DailyRecords';
import { groupDailyRecords } from '../../services/recordHelpler';
import './DetailPage.css';
import { useContext, useState  } from 'react';
import { Context } from '../../components/provider/Provider';
import RecordModal, { NewRecordItem } from './components/recordModal/RecordModal';
import { createNewRecordAsync, deleteRecordAsync, updateRecordAsync } from '../../components/provider/reducer/asyncActions';
import { useEffect } from 'react';


const DetailPage: FC = () => {
    const [visible, setVisible] = useState(false);
    const [updateRecordId, setUpdateRecordId] = useState<string>()
    const {state, dispatch} = useContext(Context);
	const groupedDailyRecords = groupDailyRecords(state.monthlyRecords);

    const onToggleVisible = () => {
        setVisible(!visible);
    }

    const onAddRecord = (record: NewRecordItem) => {
        dispatch(createNewRecordAsync(record))
    }

    const onUpdateRecord = (record: RecordItem) => {
        dispatch(updateRecordAsync(record))
    }

    const onDeleteRecord = (recordId: string) => {
        dispatch(deleteRecordAsync(recordId))
    }
    
    const onOpenUpdateModal = (_id: string) => {
        setUpdateRecordId(_id);
        setVisible(true);
    }

    const target = updateRecordId ? state.monthlyRecords.find(item => item._id === updateRecordId) : undefined;
    useEffect(() => {
        if(visible){
            return;
        }
        setUpdateRecordId(undefined);
    }, [visible]);

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