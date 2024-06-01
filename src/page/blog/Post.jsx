import { useParams } from "react-router-dom";
import Header from "../../common/component/Header";

const Post = () => {
    const params = useParams();
    return(
        <section className="blog-container">
            <Header title="블로그"/>
            <div>{params.postCode} 번 포스트 조회</div>
        </section>
        
    )
}

export default Post;