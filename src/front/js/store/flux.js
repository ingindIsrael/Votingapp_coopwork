const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			login: (userCredentials, history) => {
				console.log(userCredentials);
				fetch("https://3001-aquamarine-crane-w176dc9p.ws-us03.gitpod.io/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(userCredentials)
				})
					.then(response => response.json())
					.then(data => {
						localStorage.setItem("token", data);
						history.push("/accounts");
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
