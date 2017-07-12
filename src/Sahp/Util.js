import React, { Component } from 'react';

class Util extends Component {
	constructor(props) {
		super(props);

		this.get = this.get.bind(this);
	}

	get(url, callback) {
		return new Promise((resolve, reject) => {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);

			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					// Success!
					resolve(callback(request));

					console.log(request.responseText);
				} else {
					// We reached our target server, but it returned an error
					console.log(request.responseText);
				}
			};

			request.onerror = function (err) {
				// There was a connection error of some sort
				reject(err);
			};

			request.send();
		});
	}


}

export default Util;