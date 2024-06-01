import { useNavigate } from "react-router-dom";
import './PostComponent.css';

const PostComponent = (props) => {
    const nav = useNavigate();
    return(
    <>
        {
        props.posts? 
        ( props.posts.map((post)=> (
            <div key={post.postCode} className="blog-post" onClick={()=>{nav(`${props.url}/${post.postCode}`)}}>
                <div>
                    <div className="post-title">{post.postTitle}</div>
                    <div className="post-content">{post.postContent}</div>
                    <div className="post-write-date">{post.postWriteDate}</div>
                </div>
                <img className="post-img" src="/home/homeImg.png" height='200px' width='200px'/>
            </div> 
        ))
        
        )
        : <div>글이 없습니다.</div>
        }
    </>
    )
    
}

export default PostComponent;