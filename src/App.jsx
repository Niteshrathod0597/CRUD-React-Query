import { Route, Routes } from "react-router-dom"
import EditPost from "./pages/EditPost"
import Post from "./pages/Post"
import PostLists from "./pages/PostLists"

function App() {

  return (
    <div>
      <h1 style={{ background: '#C9C8C8' }}>CRUD Operations Using React-Query</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App
