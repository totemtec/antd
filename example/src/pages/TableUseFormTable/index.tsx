import React from 'react';
import { useFormTable } from 'sunflower-antd';
import { Input, Button, Table, Form } from 'antd';
import { queryRule } from '../../services/service'

// 参考文档
// https://github.com/ant-design/sunflower/blob/master/src/useFormTable/index.zh-CN.md

export default props => {
  const { formProps, tableProps, form } = useFormTable({
    async search(values) {
      const res = await queryRule(values);
      return {
        dataSource: res.data,
        total: res.total,
      };
    },
    defaultPageSize: 10,
  });

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <div>
      <Form layout="inline" {...formProps}>
        <Form.Item label="用户名" name="name">
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>

      <Table
        style={{ marginTop: 20 }}
        columns={columns}
        rowKey="id"
        {...tableProps}
      />
    </div>
  );
};