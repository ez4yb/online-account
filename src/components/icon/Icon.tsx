import React, {FC} from "react";
import classNames from 'classnames';
import "./Icon.css";

interface IconProps{
    icon: string;
    className?: string;
}
const Icon: FC<IconProps> = ({icon, className}) => {
    return (
        <svg className = {classNames('icon', className)}>
            <use xlinkHref = {`#${icon}`}/>
        </svg>
    )
}

export default Icon;