const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token"),
			comments: []
		},
		actions: {
			login: (userCredentials, history) => {
				console.log(userCredentials);
				fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(userCredentials)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data.access_token);
						localStorage.clear();
						localStorage.setItem("token", data.access_token);
						history.push("/accounts");
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
			}
		}
	};
};

export default getState;
