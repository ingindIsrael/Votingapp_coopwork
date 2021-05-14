const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: sessionStorage.getItem("token"),
			comments: [],
			events: [],
			admin: false
		},
		actions: {
			reminder: () => {
				const store = getStore();
				fetch(`${process.env.BACKEND_URL}/api/sms`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						// setStore({ comments: data });
					})
					.catch(error => console.log(error));
			},
			comment: commentTXT => {
				const store = getStore();
				console.log(store);
				fetch(`${process.env.BACKEND_URL}/api/comment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify(commentTXT)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ comments: store.comments.concat(data) });
					})
					.catch(error => console.log(error));
			},
			allcomments: () => {
				const store = getStore();
				fetch(`${process.env.BACKEND_URL}/api/comments`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				})
					.then(response => response.json())
					.then(data => {
						setStore({ comments: data });
					})
					.catch(error => console.log(error));
			},
			createuser: newUser => {
				const store = getStore();
				console.log(store);
				fetch(`${process.env.BACKEND_URL}/api/createuser`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify(newUser)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						// setStore({ comments: store.comments.concat(data) });
					})
					.catch(error => console.log(error));
			},
			createevent: newEvent => {
				const store = getStore();
				console.log(store);
				fetch(`${process.env.BACKEND_URL}/api/createevent`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify(newEvent)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ events: data });
					})
					.catch(error => console.log(error));
			},
			all_events: () => {
				const store = getStore();
				fetch(`${process.env.BACKEND_URL}/api/events`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ events: data });
					})
					.catch(error => console.log(error));
			},
			vote: vote => {
				const store = getStore();
				console.log(store);
				fetch(`${process.env.BACKEND_URL}/api/vote`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					},
					body: JSON.stringify(vote)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						// setStore({ events: store.events.concat(data) });
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
