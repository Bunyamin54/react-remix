import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // Destr.

  const handleSubmit = (e) => {
    e.preventDefault(); // Default davranislari kapattik.
    alert(`
        username:$(username)
        email:$(email)
        password:$(password)
        `);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.Id]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">Forms Object in React</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello{username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={handleFormData}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : <span className="text-danger"></span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleFormData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleFormData}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
