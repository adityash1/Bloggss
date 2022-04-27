import { useDispatch } from "react-redux";
import { likeBlog } from "../reducers/blogReducer";
import { setNotification } from "../reducers/notificationReducer";
import { Link } from "react-router-dom";

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
};

export const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();

  const handleLikeChange = () => {
    const newObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    };

    dispatch(likeBlog(blog.id, newObject));
    dispatch(setNotification(`liked blog ${blog.title} by ${blog.author}`));
  };

  return (
    <div style={blogStyle}>
      <h1>
        {blog.title} by {blog.author}
      </h1>
      <div>{blog.url}</div>
      <div>
        {blog.likes} likes{" "}
        <button onClick={() => handleLikeChange(blog)}>like</button>
      </div>
      <div>added by {blog.author}</div>
    </div>
  );
};

export const Blog = ({ blog }) => {
  return (
    <div style={blogStyle}>
      <Link to={`/blogs/${blog.id}`}>
        {blog.title} {blog.author}
      </Link>
    </div>
  );
};
