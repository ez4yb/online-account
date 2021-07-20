import React, {FC} from "react";
import { useEffect } from "react";
import useAnimateNumber from 'use-animate-number';


interface AnimateNumberProps{
    num: number;
}

const AnimateNumber:FC<AnimateNumberProps> = ({num}) => {
    const options = {
        duration: 1000,
        enterance: true,
        direct: false,
        disabled: false,
        decimals: 0
    }
    const [value, setValue] = useAnimateNumber(0, options)
    useEffect(() => {
        setValue(num, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num])
    return (
        <span>{value}</span>
    )
}

export default AnimateNumber;