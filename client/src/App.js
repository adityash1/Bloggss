import React, { useState, useEffect } from "react";

import BlogForm from "./components/BlogForm";
import blogService from "./services/blogs";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div>
      {user && <h1>blogs</h1>}
      <Notification />
      <LoginForm
        user={user}
        setUser={setUser}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      {user && <BlogForm />}
    </div>
  );
};

export default App;
