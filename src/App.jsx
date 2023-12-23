// Form.js

import { useEffect, useState } from "react";
import "./App.css";
import { createUser, deleteUser, getAllUsers } from "./axios-crud";

const App = () => {
  // form states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // users state
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const _users = await getAllUsers();
    setUsers(_users);
  };

  const removeUser = async (userId) => {
    await deleteUser(userId);
    // logic to remove the user from FE
    setUsers(users.filter((user) => user.id !== userId));
  };

  const adduser = async (usrData) => {
    const data = await createUser(usrData);

    // logic to add the user into fe
    setUsers([...users, data]);
  };

  const updateUser = (userId, userData) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    adduser({ name, username, email, phone });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="form-container">
        <h2>Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {users.map(({ id, name, username, email, phone }) => (
        <div className="card" key={name}>
          Name: {name}
          <br />
          Username: {username}
          <br />
          Email: {email}
          <br />
          Phone: {phone}
          <br />
          <button onClick={() => removeUser(id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default App;
