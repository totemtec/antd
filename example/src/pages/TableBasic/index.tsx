import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table } from 'antd';

const TableBasic: React.FC<{}> = () => {
  const data: any[] = [
    {
      key: 99,
      name: 'TradeCode 99',
      status: 0,
      updatedAt: '2020-07-20T16:39:01.254Z',
    },
    {
      key: 98,
      name: 'TradeCode 98',
      status: 3,
      updatedAt: '2020-07-20T16:39:01.254Z',
    },
  ];

  const columns = [
    {
      title: '规则名称',
      dataIndex: 'name',
      align: 'center',
      render: (text, record) => {
        console.log(text);
        return (
          <div style={{textAlign: 'left'}}>{text}</div>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
    },
  ];

  return (
    <PageContainer>
      <Table dataSource={data} columns={columns} />
    </PageContainer>
  );
};

export default TableBasic;
