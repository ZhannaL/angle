import React from 'react';
import { Table } from 'semantic-ui-react';
import './Basket.scss';

const options = [
  [
    'today',
    'today1',
    'today2',
    'Today3',
  ], [
    'this week',
    'this week1',
    'this week2',
    'This Week3',
  ], [
    'this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    'this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    'this month',
    'this month1',
    'this month2',
    'This Month3',
  ],
];

const Basket = () => (
  <Table singleLine inverted className="basket_tab">
    <Table.Header>
      <Table.Row className="basket_header" >
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {options.map(value => (
        <Table.Row> {value.map(index => (
          <Table.Cell >{index}</Table.Cell>
        ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default Basket;
