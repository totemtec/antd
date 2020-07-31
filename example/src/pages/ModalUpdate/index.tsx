import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table } from 'antd';
import { useRequest } from 'umi';
import { queryRule } from '../../services/service';
import UpdateForm from './components/UpdateForm';

const ModalCreate: React.FC<{}> = () => {

  const [ updateModalVisible, setUpdateModalVisible ] = useState<boolean>(false);
  const [ updateFormValues, setUpdateFormValues] = useState({});

  const { loading, data, pagination, run } = useRequest(queryRule, {
    paginated: true,
  })

  const onUpdateSuccess = () => {
    //销毁对话框
    setUpdateModalVisible(false);

    //刷新列表
    run();
  };

  const onUpdateCancel = () => {
    setUpdateModalVisible(false);
    setUpdateFormValues({});
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
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setUpdateModalVisible(true);
              setUpdateFormValues(record);
            }}
          >
            更新
          </a>
        </>
      ),
    },
  ];
    
  return (
    <PageContainer>

     {updateFormValues && Object.keys(updateFormValues).length ? (
        <UpdateForm
          onSuccess={onUpdateSuccess}
          onCancel={onUpdateCancel}
          visible={updateModalVisible}
          values={updateFormValues}
        />
      ) : null}

      <Table loading={loading} dataSource={data?.data} columns={columns} pagination={pagination}/>
    </PageContainer>
  );
};

export default ModalCreate;
