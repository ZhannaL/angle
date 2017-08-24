import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

class TableAcute extends Component {
	render() {
		return (
			<div>
				<Table basic='very' compact>
					<Table.Body>
						<Table.Row>
							<Table.Cell><img src={this.props.img}/></Table.Cell>
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
	}
}

export default TableAcute;
