import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Button, Card} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'umi';
import { queryRule } from '../../services/service';
import CreateForm from './components/CreateForm';

const ModalCreate: React.FC<{}> = () => {

  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  const { loading, data, pagination, run } = useRequest(queryRule, {
    paginated: true,
  })

  const onCreateSuccess = () => {
    //销毁对话框
    setCreateModalVisible(false);

    //刷新列表
    run();
  };

  const columns = [
    {
      title: '规则名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
  ];
    
  return (
    <PageContainer>
      <Card style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setCreateModalVisible(true)}>
          <PlusOutlined /> 新建
        </Button>
      </Card>

      <CreateForm
        visible={createModalVisible}
        onCancel={() => setCreateModalVisible(false)}
        onSuccess={onCreateSuccess}>
        
      </CreateForm>

      <Table loading={loading} dataSource={data?.data} columns={columns} pagination={pagination}/>
    </PageContainer>
  );
};

export default ModalCreate;
