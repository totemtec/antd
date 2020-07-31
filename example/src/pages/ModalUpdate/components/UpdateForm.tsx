import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { sleep } from '../../../utils/utils';
import { updateRule } from '../../../services/service';

const UpdateForm: React.FC<{}> = (props) => {

  const { visible, onCancel, onSuccess, values } = props;

  const [ loading, setLoading ] = useState<boolean>(false);
  
  const onSubmit = async (params) => {
    // 提交按钮禁用，开始转圈圈
    setLoading(true);

    //手动校验一下数据，如果校验不通过还需要设置setLoading(false);
    //TODO: ...

    try {
      //网络提交数据，更新需要把ID字段加上
      const updateParams = {...params, key:values.key}
      const response = await updateRule(updateParams);

      //这里是模拟慢速网络请求，真实生产环境中不需要
      await sleep(2000);

      if (response) {
        message.success("更新成功");

        //回调列表，告诉列表更新成功了，隐藏对话框，刷新列表
        onSuccess();
      } else {
        message.error("更新失败，请稍后重试");
      }
    } catch (error) {
      console.log("发生错误: " + error);
      message.error("更新失败: " + error);
    } finally {
      setLoading(false);
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
      title="更新规则"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >

      <Form
        {...formItemLayout}
        name="modalUpdate"
        layout="horizontal"
        onFinish={onSubmit}
        initialValues={{
          name: values.name,
          desc: values.desc,
        }}
      >

        <Form.Item label="规则名称" name="name" >
          <Input placeholder="规则名称" />
        </Form.Item>
        <Form.Item label="描述" name="desc" >
          <Input placeholder="描述" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
        </Form.Item>
      </Form>
      
    </Modal>
  );
};

export default UpdateForm;
