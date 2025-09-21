
import React, { useState } from "react";

const Form = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault() // default davranislari kapattik 

    alert(`
        username:$(username)
        email:$(email)
        password:$(password)
        
        
        `);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">Forms Object in React</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            // onCahnge eventi inputun degeri degistiginde tetiklenir. bizde yazdigimzi eventhandler ile statimizi guncelleriz
            onChange={handelUserName}
            value={username} // value propu inputlara baslangic degeri vermemizi saglar.
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
