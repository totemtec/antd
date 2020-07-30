import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Form, Input, Button, Card} from 'antd';
import { useRequest } from 'umi';
import { queryRule } from './service';

const TableSearch: React.FC<{}> = () => {

  const { run, loading, data, pagination } = useRequest(queryRule, {
    paginated: true,
  })

  const onFinish = values => {
    console.log('查询表单提交:', values);
    run(values);
  };

  const columns = [
    {
      title: '规则名称',
      dataIndex: 'name',
    }
  ];

  const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 }, };

  if(pagination) {
    console.log(pagination);
  }
    
  return (
    <PageContainer>
      <Card style={{ marginBottom: 16 }}>
        <Form
          layout="inline"
          onFinish={onFinish} >
          <Form.Item label="用户名" name="username">
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Form.Item>
        </Form>
      </Card>

      <Table loading={loading} dataSource={data?.data} columns={columns} pagination={pagination}/>
    </PageContainer>
  );
};

export default TableSearch;