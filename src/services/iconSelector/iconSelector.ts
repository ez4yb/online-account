import { EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "../../constans";
import { RecordType } from "../../pages/detail/components/record/Record";

export const getIconByName = (type: RecordType, name: string) => {
    const list = type === RecordType.Income ? INCOME_ICON_LIST : EXPENDITURE_ICON_LIST;
    //！类型断言
    return list.find(item => item.name === name)!;
}