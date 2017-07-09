import React from 'react';

/**
 * 生成指定数量的空白格
 */
const renderSpace = ({ num = 1 }) => {
  const spaces = [];

  for (var index = 0; index < num; index++) {
    spaces[index] = <span key={index}>&nbsp;</span>;
  }
  return (
    <span>
      {spaces}
    </span>
  );
};


export default renderSpace;
