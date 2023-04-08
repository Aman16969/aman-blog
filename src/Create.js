import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[author,setAuthor]=useState("");
    const [isPending,setIsPending]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true)
        fetch('http://localhost:3001/blogs',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            navigate("/")
        })
       
    }
    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="BlogTitle">Blog Title:</label>
                <input type="text" placeholder="Enter Title" vlaue={title} onChange={(e)=>setTitle(e.target.value)} required/>
                <label htmlFor="BlogBody">Blog Body:</label>
                <textarea name="blogBody" id="" cols="30" rows="5" value={body} onChange={(e)=>setBody(e.target.value)}></textarea> 
                <label htmlFor="BlogAuthor">Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)} >
                    <option value="mario">Mario</option>
                    <option value="aman">Aman</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;