import React from 'react';
import { Table, Icon, Menu } from 'semantic-ui-react';
import './Basket.scss';

const options = [
  [
    '1today',
    'today1',
    'today2',
    'Today3',
  ], [
    '2this week',
    'this week1',
    'this week2',
    'This Week3',
  ], [
    '3this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    '4this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    '5this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    '6today',
    'today1',
    'today2',
    'Today3',
  ], [
    '7this week',
    'this week1',
    'this week2',
    'This Week3',
  ], [
    '8this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    '9this month',
    'this month1',
    'this month2',
    'This Month3',
  ], [
    '10this month',
    'this month1',
    'this month2',
    'This Month3',
  ],
];

const Basket = () => (
  <Table singleLine inverted className="basket_tab">
    <Table.Header>
      <Table.Row className="basket_header">
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {options.map(value => (
        <Table.Row>
          {value.map(index => (
            <Table.Cell>{index}</Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="4">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default Basket;
