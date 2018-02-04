import React from 'react';

let Button = (props) => {
	return (
		<div className='button-wrapper col-xs-12'>
			<div className='row center-xs'>
				<button onClick={() => props.clickHandler()}>Generate random users</button>
			</div>	
		</div>
	);
}

export default Button;