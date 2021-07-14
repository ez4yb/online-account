import axios from "axios";
import { NewRecordItem } from "../pages/detail/components/recordModal/RecordModal";
import { RecordItem } from "../pages/detail/components/record/Record";

axios.interceptors.response.use((response) => response.data);

export const getRecordsBetweenRangeUsingGet = (start: number, end: number) => {
    return axios.get<any, RecordItem[]>(
        `https://qc2xts.fn.thelarkcloud.com/getRecords?timeStamp_gte=${start}&timeStamp_lte=${end}`
    )
}

export const createNewRecordUsingPost = (record: NewRecordItem) => {
    return axios.post<any, RecordItem>(
        `https://qc2xts.fn.thelarkcloud.com/createRecord`, 
        record
    )
}

export const updateRecordUsingPut = (record: RecordItem) => {
    return axios.put<any, RecordItem>(
        `https://qc2xts.fn.thelarkcloud.com/updateRecord`,
        record
    )
}

export const deleteRecordUsingDelete = (recordId: String) => {
    return axios.delete<any, RecordItem>(
        `https://qc2xts.fn.thelarkcloud.com/deleteRecord?id=${recordId}`
    )
}