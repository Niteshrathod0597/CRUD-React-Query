import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts } from "../api/posts";
import AddPost from "../components/AddPost";

const PostLists = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

//   return (
//     <div>
//       {posts.map((post) => (
        
//           <h3 style={{ cursor: "pointer" }} onClick={() => navigate(`/post/${post.id}`)}>
//             <div className="row">
//               <div className="col-md-12">

//             <table >
//               <thead>
//                 <tr>
//                   {/* <th>ID</th> */}
//                   <th>Name</th>
//                   <th>Username</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {/* <th>{post.id}</th> */}
//                   <th>{post.name}</th>
//                   <th>{post.username}</th>
//                   <th>
          

//                   </th>
//                   <th>
         

//                   </th>
//                 </tr>
//               </tbody>

//             </table>
//               </div>
//             </div>
//             {/* {post.title} <br /><hr /> */}
//             {/* {post.body} */}
//           </h3>
//         </div>
//       ))}
//     </div>
//   );
// };

return (
  <>
<AddPost />
<br />
      <div className='row'>
          <div className='col-md-12'>

              <div className='mb-2 mt-2'>
                 
              </div>

              <table className='table table-bordered table-striped table-dark table-hover'>
                  <thead>
                      <tr>
                          <th>NAME</th>
                          <th>Username</th>
                          <th>EDIT</th>
                          <th>DELETE</th>s
                      </tr>
                  </thead>
                  <tbody>
                  {/* {users.map((apiData) => */}
                      {posts.map((post) => {
                        <div key={post.id} style={{ background: '#C9C8C8' }}></div>
                              return (
                                  <>
                                      <tr>
                                          <td>{post.name}</td>
                                          <td>{post.username}</td>
                                          
                                          <td>
                                          <button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
                                          </td>
                                          <td>
                                          <button onClick={() => handleDelete(post.id)}>Delete</button>
                                          </td>
                                      </tr>
                                  </>
                              )
                          })
                      }
                  
                  </tbody>
              </table>
          </div>
      </div>
  </>
)
                    }
export default PostLists;
