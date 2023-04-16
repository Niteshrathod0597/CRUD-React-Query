import { useState } from "react"

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue.title || "",
    body: initialValue.body || ""
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      name: "",
      username: ""
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Name')} <br />
      {renderField('Username')} <br />
      <button type="submit">Add User</button>
    </form>
  )
}

export default PostForm