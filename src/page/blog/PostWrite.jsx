import ReactQuill from 'react-quill';
import MyEditor from '../../common/component/MyEditor';
import { useState } from 'react';
import Header from '../../common/component/Header';


const PostWrite = () => {
    const [editorContent, setEditorContent] = useState('');

    const writePost = () => {
        //api 요청
        console.log(editorContent);
    }

    return(
        <section>
            <Header title="블로그" href="/blog"/>
            <div style={{marginBottom:50}} className="image-container">
                <img className="blog-main-img" src="/blog/test.jpg"/>
                <div>블로그 이름</div>
            </div>
            <MyEditor editorContent={editorContent} setEditorContent={setEditorContent} />
            <button onClick={writePost}>글 쓰기</button>
        </section>
    )
}

export default PostWrite;