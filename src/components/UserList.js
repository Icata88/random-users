import React from 'react';
import User from './User';
import Details from './Details';

import helperFunctions from './../utils/helperFunctions';

let UserList = (props) => {
	return (
		<div className='user_list col-md-6 col-sm-6 col-xs-12'>
			<div className='row user_list__header'>
				<div className='col-md-7 col-sm-8 col-xs-6 user_list__header-name'><h3>User Name</h3></div>
				<div className='col-md-5 col-sm-4 col-xs-6 user_list__header-city'><h3>City</h3></div>
			</div>						
			{props.users.map((v, k) => (
				<div key={k}>
					<User
						selected={props.selectedUserID === k}
						onClick={() => props.clickHandler(k)}
						firstName={helperFunctions.getFirstName(v)}
						lastName={helperFunctions.getLastName(v)}
						thumbnail={helperFunctions.getThumbnail(v)}
						city={helperFunctions.getCity(v)}
					 />					 
					 {props.selectedUserID === k && props.windowWidth < 756 ? <div className='row'><Details mobile={true} user={props.users.filter((user) => props.users.indexOf(user) === props.selectedUserID)} /></div> : null}		
				 </div>				 
			))}		

		</div>
	);
}

export default UserList;