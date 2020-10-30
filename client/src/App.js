import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = function () {
  // State Variables
	const [users, setUsers] = useState(null);
	const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (username === "") {
			alert("Please fill the username field");
			return;
    }
    
		if (email === "") {
			alert("Please fill the email field");
			return;
    }
    
		axios
			.post("/api/users", {
				username: username,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				setTimeout(() => window.location.reload(), 1000);
			})
			.catch(function () {
				alert("Could not create account. Please try again!");
			});
  }
  
	return (
		<>
			<h1>User Pro Membership Database</h1>
			{users && users === null ? (
				<p>Loading...</p>
			) : users && users.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Users</h2>
					<ol>
						{users && users.data.map((user, index) => (
							<li key={index}>
								Name: {user.name} - Email: {user.email}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Enter your username"
					name="username"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
					name="email"
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default App