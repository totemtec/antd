import React from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import { Button } from 'antd';

// export default () => {
//   const message = useModel('demo');
//   return <div>{message}</div>;
// };

export default () => {
  const { add, minus, counter } = useModel('counter', (ret) => ({
    counter: ret.counter,
    add: ret.increment,
    minus: ret.decrement,
  }));

  return (

    <Button.Group>
      <div>{counter}</div>
      <Button onClick={add}>add by 1</Button>
      <Button onClick={minus}>minus by 1</Button>
    </Button.Group>
  );
};
