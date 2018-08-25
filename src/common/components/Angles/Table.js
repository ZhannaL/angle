import React from 'react';
import { Table, Divider } from 'semantic-ui-react';

const TableAcute = () => (
  <div>
    <Table basic="very" compact>
      <Table.Body>
        <Table.Row>
          <Table.Cell><img src={this.props.img} alt="альтернативный текст" /></Table.Cell>
          <Table.Cell>{this.props.descrip}</Table.Cell>
          <Table.Cell>{this.props.angle}</Table.Cell>
          <Table.Cell>{this.props.size}</Table.Cell>
          <Table.Cell>{this.props.count}</Table.Cell>
          <Table.Cell>{this.props.button}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Divider />
  </div>
);
export default TableAcute;
