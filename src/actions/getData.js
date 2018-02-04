
const URL = 'https://randomuser.me/api/?results=100';


export default () => {
	return (dispatch) => {
		fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			dispatch({type: 'GOT_DATA', data});
		});
	}
}

