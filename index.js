'use strict';
const H = require('highland');
const request = require('request');
const token = process.env.TOKEN || {};

const wrappedRequest = H.wrapCallback((params, callback) => {
	console.log(params.url + '?' + require('querystring').stringify(params.qs));
	params.json = true;
	params.headers = {
		'wpa-key': token.key
	};
	request(params, (err, body, data) => {
		callback(err, data);
	});
});

module.exports = wrappedRequest;