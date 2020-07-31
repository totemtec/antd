import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Modal, Button } from 'antd';
import { sleep } from '../../utils/utils';
import { queryRule } from '../../services/demo';

const ModalAsync: React.FC<{}> = () => {

  const [ visible, setVisible ] = useState<boolean>(false);
  const [ confirmLoading, setConfirmLoading ] = useState<boolean>(false);
  const [ modalText, setModalText ] = useState<string>("对话框内容");

  const showModal = () => {
    setModalText("对话框内容");
    setVisible(true);
  }

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = async () => {
    setModalText("数据请求完成后关闭");
    setConfirmLoading(true);

    try {
      await sleep(2000);
      const success = await queryRule();
      setConfirmLoading(false);
      setVisible(false);
    } catch (error) {
      setConfirmLoading(false);
    }
  };
  
  return (
    <PageContainer>
      <Button type="primary" onClick={showModal}>
        打开异步提交对话框
      </Button>
      <Modal
        title="异步提交"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </PageContainer>
  );
};

export default ModalAsync;