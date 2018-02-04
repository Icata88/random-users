import React from 'react';

let User = (props) => {
	let selected = props.selected ? 'selected' : '';
	return (
		<div onClick={props.onClick} className={`user_list__user row ${selected}`}>
			<img className='user_list__thumbnail' src={props.thumbnail} />
			<div className='user_list__name col-md-6 col-sm-7 col-xs-5'><span>{props.firstName} {props.lastName}</span></div>
			<span className='user_list__city col-md-4 col-sm-3 col-xs-4'>{props.city}</span>
		</div>
	);
}


export default User;