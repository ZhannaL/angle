import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addGood } from './AcuteActions';
import './Acute.scss';


const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  addGood,
};

const Buy = () => (
  <Button
    compact
    primary
    onClick={() => this.addGood()}
  >
    <Icon name="shop" />
      В корзину
  </Button>
);
const Order = () => (
  <Button
    compact
    secondary
  >
    <Icon name="teletype" />
      Заказать
  </Button>
);
const acutes = [
  {
    img: '/assets/jcnh2.png',
    descrip: 'описание уголка',
    angle: 'угол в градусах',
    size: 'размер=длина',
    count: '2',
  }, {
    img: '/assets/jcnh2.png',
    descrip: 'описание уголка',
    angle: 'угол в градусах',
    size: 'размер=длина',
    count: '0',
  }, {
    img: '/assets/jcnh2.png',
    descrip: 'описание уголка',
    angle: 'угол в градусах',
    size: 'размер=длина',
    count: '1',
  }, {
    img: '/assets/jcnh2.png',
    descrip: 'описание уголка',
    angle: 'угол в градусах',
    size: 'размер=длина',
    count: '1',
  },
];
const Acute = () => (
  <div className="Acute">
    <div className="prodAcute" >
      <div className="img"> <img src="/assets/jcnh2.png" alt="альтернативный текст" /> </div>
      <div className="descr" >
        <p className="propName"><b>Острый уголОК</b></p>
        <br />
        <p>Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.
          Осталось только выбрать материал
        </p>
        <p>Острый уголок варьируется от 1<sup>о</sup> до 89<sup>о</sup> с шагом в 1 градус,
        т.е. возможен вариант в 2<sup>о</sup>, 18<sup>о</sup> или 73<sup>о</sup>
        </p>
        <p>Материал для уголков также различен и удовлетворит любой запрос</p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="tableAngle">
      <Table basic="very" compact>
        <Table.Body>
          {acutes.map(table => (
            <Table.Row >
              <Table.Cell><img src={table.img} alt="альтернативный текст" /></Table.Cell>
              <Table.Cell>{table.descrip}</Table.Cell>
              <Table.Cell>{table.angle}</Table.Cell>
              <Table.Cell>{table.size}</Table.Cell>
              <Table.Cell>{table.count}</Table.Cell>
              <Table.Cell textAlign="right">{(table.count === 0) ? Order() : Buy()}</Table.Cell>
            </Table.Row>
))}
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Acute);
