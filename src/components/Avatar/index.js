import React from 'react';
import {Avatar, Badge} from 'antd';

/**
 * 生成头像
 * 
 * @param { number } unReadMsgCount 未读消息数量
 */
const AvatarWr = ({unReadMsgCount}) => {
  return (
    <span>
        <Badge count={unReadMsgCount}><Avatar shape="square" icon="user"/></Badge>
    </span>
  )
};

export default AvatarWr;