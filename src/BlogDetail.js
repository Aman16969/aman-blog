import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom/dist";
const BlogDetail = () => {
    const{id}=useParams();
    const navigate=useNavigate();
    const{data:blog,isPending,error}=useFetch('http://localhost:3001/blogs/'+id);
    const handleClick=()=>{
        fetch('http://localhost:3001/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate("/")
        })
    }
    return ( 
        <div className="blog-details">
             
            {isPending && <div>Loding.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By :{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
          
        </div>
     );
}
 
export default BlogDetail;