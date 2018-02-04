import React from 'react';
import helperFunctions from './../utils/helperFunctions';

let Details = (props) => {
	let style = {};
	if (props.user[0] && helperFunctions.getGender(props.user[0]).toLowerCase() === 'male') {
		style.background = '#CCEEFB';
	} else {
		style.background = '#FED3C0';
	}
	return (	
		<div className='user_details_wrapper col-sm-5 col-xs-12 col-sm-offset-1'>
			{props.user[0] && (
				<div>
					<div className='user_details_header row'>
						<div className='col-xs-12'><h3 className='striked'><span>User Details</span></h3></div>
					</div>		
					<div style={style} className='user_details row'>			
						<div className='user_details__img col-xs-12'><img src={helperFunctions.getImage(props.user[0])} /></div>			
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Title: </span>{helperFunctions.getTitle(props.user[0])}</p></div>
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Name: </span>{helperFunctions.getFullName(props.user[0])}</p></div>			
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Email: </span><a href={`mailto:${helperFunctions.getEmail(props.user[0])}`}>{helperFunctions.getEmail(props.user[0])}</a></p></div>	
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Phone: </span>{helperFunctions.getPhone(props.user[0])}</p></div>
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>City: </span>{helperFunctions.getCity(props.user[0])}</p></div>
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Street: </span>{helperFunctions.getStreet(props.user[0])}</p></div>	
						<div className='user_details__row col-xs-12'><p className='col-xs-12'><span>Gender: </span>{helperFunctions.getGender(props.user[0])}</p></div>
					</div>
				</div>
			)}					
		</div>

	);
}

export default Details;