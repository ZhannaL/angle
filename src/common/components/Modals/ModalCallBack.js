import React from 'react';
import {
  Button, Header, Icon, Modal, Form,
} from 'semantic-ui-react';
import './ModalCallBack.scss';

const ModalCallBack = () => (
  <Modal
    trigger={(
      <div className="callBack">
        <a href>
          <Icon name="phone" />
            Заказать обратный звонок
        </a>
      </div>
)}
    closeIcon
  >
    <Header icon="phone" content="Обратный звонок?" />
    <Modal.Content>
      <Form>
        <Form.Group>
          <Form.Input label="Имя" placeholder="First Name" width={6} />
          <Form.Input label="Фамилия" placeholder="Last Name" width={6} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="Номер Телефона" placeholder="+7(xxx) " width={8} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="Email" placeholder="Email" width={8} />
        </Form.Group>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green">
        <Icon name="checkmark" />
        Да!
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalCallBack;
