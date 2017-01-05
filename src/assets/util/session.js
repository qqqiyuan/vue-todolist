const key = 'todos';

if(!localStorage.getItem(key)) {

	let data = {
		sessionList: [
			{
				id: 0,
				param: 'This is the first one',
				createTime: '2016-8-20 15:32:53',
				status: 0
			},
			{
				id: 1,
				param: 'This is the second one',
				createTime: '2016-8-20 15:40:53',
				status: 0
			}
		]
	};

	localStorage.setItem(key, JSON.stringify(data));
}

export default {
	fecth() {
		return JSON.parse(localStorage.getItem(key));
	},
	store(list) {
		localStorage.setItem(key, JSON.stringify(list));
	}
}