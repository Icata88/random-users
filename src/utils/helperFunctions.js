let helperFunctions = (function() {
	let getTitle = (user) => {
		if ('name' in user && 'title' in user.name) {
			return capitalizeFirstLetter(user.name.title);
		}
		return;
	}

	let getFullName = (user) => {	
		let name = '';
		if ('name' in user && 'first' in user.name) {
			name += capitalizeFirstLetter(user.name.first);
		}
		if ('name' in user && 'last' in user.name) {
			name += ' ' + capitalizeFirstLetter(user.name.last);
		}
		return name; 		
	}

	let getImage = (user) => {
		if ('picture' in user && 'large' in user.picture) {
			return user.picture.large;
		}
		return;
	}

	let getEmail = (user) => {
		if ('email' in user) {
			return user.email;
		}
		return;
	}

	let getPhone = (user) => {
		if ('phone' in user) {
			return user.phone;
		}
		return;
	}

	let getCity = (user) => {
		if ('location' in user && 'city' in user.location) {
			return capitalizeFirstLetter(user.location.city);
		}
		return;
	}

	let getStreet = (user) => {
		if ('location' in user && 'street' in user.location) {
			return user.location.street;
		}
		return;
	}

	let getGender = (user) => {
		if ('gender' in user) {
			return capitalizeFirstLetter(user.gender);
		}
		return;
	}

	let getFirstName = (user) => {
		if ('name' in user && 'first' in user.name) {
			return capitalizeFirstLetter(user.name.first);
		}
		return;
	}

	let getLastName = (user) => {
		if ('name' in user && 'last' in user.name) {
			return capitalizeFirstLetter(user.name.last);
		}
		return;
	}

	let getThumbnail = (user) => {
		if ('picture' in user && 'thumbnail' in user.picture) {
			return user.picture.thumbnail;
		}
		return;
	}

	let capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return {
		getTitle: getTitle,
		getFullName: getFullName,
		getImage: getImage,
		getEmail: getEmail,
		getPhone: getPhone,
		getCity: getCity,
		getStreet: getStreet,
		getGender: getGender,
		getFirstName: getFirstName,
		getLastName: getLastName,
		getThumbnail: getThumbnail,
		capitalizeFirstLetter: capitalizeFirstLetter
	}
})();

export default helperFunctions;


