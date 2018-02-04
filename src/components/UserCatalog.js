import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import Details from './Details';
import Welcome from './Welcome';
import WelcomeUsers from './WelcomeUsers';
import Button from './Button';

class UserCatalog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedUserID: -1,
			isButtonClicked: false,
			windowWidth: window.innerWidth
		}

		this.onUserClick = this.onUserClick.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
		this.handleWindowWidth = this.handleWindowWidth.bind(this);
	}

	onUserClick(id) {
		this.setState({selectedUserID: id});
	}

	onButtonClick() {
		this.setState({isButtonClicked: true});
	}

	handleWindowWidth() {
		this.setState({windowWidth: window.innerWidth});
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowWidth);
	}

	render() {
		return (
			<div className='users row'>
				{!this.state.isButtonClicked ? <Welcome /> : <WelcomeUsers />}
				{!this.state.isButtonClicked ? <Button clickHandler={this.onButtonClick} /> : null}
				{this.state.isButtonClicked ? <UserList
					users={this.props.users}
					clickHandler={this.onUserClick}
					selectedUserID={this.state.selectedUserID}
					windowWidth={this.state.windowWidth}
				/> : null}
				{this.state.isButtonClicked && this.state.windowWidth > 755 ? <Details user={this.props.users.filter((user) => this.props.users.indexOf(user) === this.state.selectedUserID)} /> : null}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.results
	};
}

export default connect(mapStateToProps)(UserCatalog);