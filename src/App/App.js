import React, { Component } from 'react';
import { Grid, Sidebar, Segment, Menu } from 'semantic-ui-react'
import './App.css';

import Logo from '../common/components/Logo/Logo.js';
// import MenuMobile from '../common/components/Menu/MenuMobile.js';
import Content from '../common/components/Content/Content.js';
import MenuSideBar from '../common/components/Menu/MenuSideBar.js';



class App extends Component {
  render() {
    return (
		<Grid >
			<Grid.Row >
				<Grid.Column width={6}>
					<Grid padded='horizontally'>
						<Grid.Row  >
							<Grid.Column width={1}>	</Grid.Column>
							<Grid.Column width={14} only='computer'>
								<Logo />
							</Grid.Column>
							<Grid.Column width={1}>	</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			{/* <Grid.Row only='tablet mobile'>
				<Grid.Column width={16}>
					<MenuMobile />
				</Grid.Column>
			</Grid.Row> */}

			<Grid.Row>
				<Grid.Column width={16} only='computer' className="menuSidebarPushable">
					<Sidebar.Pushable as={Segment} className="menuSidebarPushable">
						<Sidebar
							as={Menu}
							animation='push'
							direction='left'
							visible='true'
							inverted
							id="menuSidebar">
								<MenuSideBar/>
						</Sidebar>
						<Sidebar.Pusher className="SegmentPusher" >
							<Segment basic id="segment" >
								<Content/>
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid.Row>
		</Grid>
    );
  }
}

export default App;
//
// <Grid.Column width={4} only='computer'>
// 	<Grid>
// 		<Grid.Row >
// 			<Grid.Column width={14} >
// 				<Menu />
// 			</Grid.Column>
// 			<Grid.Column width={2}>	</Grid.Column>
// 		</Grid.Row>
// 	</Grid>
// </Grid.Column>
// <Grid.Column computer={12} mobile={16}>
// 	<Grid>
// 		<Grid.Row >
// 			<Grid.Column computer={15} mobile={16}>
// 				{/* <Home /> */}
// 				{/* <Categories /> */}
// 				{/* <Acute /> */}
// 				{/* <Contacts /> */}
// 			</Grid.Column>
// 			<Grid.Column width={1} only='computer'>	</Grid.Column>
// 		</Grid.Row>
// 	</Grid>
// </Grid.Column>
