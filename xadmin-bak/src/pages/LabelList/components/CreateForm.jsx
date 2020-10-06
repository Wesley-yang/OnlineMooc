import React from 'react';
import {Modal} from 'antd';

const CreateForm = props => {
  const {modalVisible, onCancel} = props;
  return (
    <Modal
      destroyOnClose
      title="新建Label小项"
      visible={modalVisible}
      
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
