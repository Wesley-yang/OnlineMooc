import React from 'react';
import {Modal} from 'antd';

const UpdateForm = props => {
  const {modalVisible, onCancel} = props;
  return (
    <Modal
      destroyOnClose
      title="修改课程目录信息"
      visible={modalVisible}
      
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
