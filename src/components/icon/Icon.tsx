import React, {FC} from "react";
import classNames from 'classnames';
import {Button} from 'antd';
import "./Icon.css";

interface IconProps{
    icon: string;
    className?: string;
}
export const Icon: FC<IconProps> = ({icon, className}) => {
    return (
        <svg className = {classNames('icon', className)}>
            <use xlinkHref = {`#${icon}`}/>
        </svg>
    )
}

export const IconButton: FC<IconProps & {onClick? : React.MouseEventHandler<HTMLElement>}> = ({icon, className, onClick}) =>{
    return(
        <Button 
            shape = "circle"
            className = {className}
            icon = {<Icon icon = {`${icon}`} />}
            onClick = {onClick}
        />
    )
}
