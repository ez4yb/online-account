import React, {FC} from "react";
import "./Logo.css";
import {Icon} from '../icon/Icon';

interface LogoProps{
    size?: 'large' | 'default'
}

const Logo: FC<LogoProps> = ({size = 'default'}) => {
    return(
        <div className = {`logo logo-${size}`}>
            <Icon icon = {`icon-bookkeeping`}/>
            <span>在线记账</span>
        </div>
    )
}

export default Logo;