import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { sleep } from '../../../utils/utils';
import { queryRule } from '../../../services/demo';

const CreateForm: React.FC<{}> = (props) => {

  const { modalVisible, onCancel, onCreateSuccess } = props;

  const [ submitting, setSubmitting ] = useState<boolean>(false);
  
  const onSubmit = async (values) => {
    // 提交按钮禁用，开始转圈圈
    setSubmitting(true);

    //手动校验一下数据，如果校验不通过还需要设置setSubmitting(false);
    //TODO: ...

    try {
      //网络提交数据
      const response = await queryRule(values);

      //这里是模拟慢速网络请求，真实生产环境中不需要
      await sleep(2000);

      if (response?.success) {
        message.success("创建成功");

        //回调列表，告诉列表创建成功了，隐藏对话框，刷新列表
        onCreateSuccess();
      } else {
        message.error("添加失败，请稍后重试");
      }
    } catch (error) {
      console.log("发生错误: " + error);
      message.error("添加失败: " + error);
    } finally {
      setSubmitting(false);
    }
  };

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 }, };

  return (
    <Modal
      destroyOnClose
      maskClosable={false}
      title="新建规则"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >

      <Form
        {...formItemLayout}
        name="modalCreate"
        layout="horizontal"
        onFinish={onSubmit}
      >

        <Form.Item label="账号" name="username" >
          <Input placeholder="账号" />
        </Form.Item>
        <Form.Item label="手机号" name="mobile" >
          <Input placeholder="手机号" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" loading={submitting}>提交</Button>
        </Form.Item>
      </Form>
      
    </Modal>
  );
};

export default CreateForm;
