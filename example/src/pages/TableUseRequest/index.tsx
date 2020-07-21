import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table } from 'antd';

import { useRequest } from 'umi';
import { queryRule } from './service';

const TableUseRequest: React.FC<{}> = () => {
  const { data, loading } = useRequest(() => {
    let params = {
      current: 1,
      pageSize: 20,
      sorter: {},
      filter: {},
    };
    return queryRule(params);
  });

  const columns = [
    {
      title: '规则名称',
      dataIndex: 'name',
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

export default TableUseRequest;
