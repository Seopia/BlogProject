import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { LoginTest } from "../../common/functions";
import { useNavigate } from "react-router-dom";
import './Blog.css';
import Header from "../../common/component/Header";
import PostComponent from "./component/PostComponent";
import Button from "../../common/component/Button";

const Blog = () => {

    //테스트 데이터
    const postTitle = '[일본생활] [D+108] 일본생활 최대위기, 여러모로 조진 것 같다!';
    const postContent = '또 50일여만에 쓰는거같다. 그동안 너무 정신없다기보다 정신을 놓고 놀다보니 조졌다. 회사 신입사원 연수도 마쳤고, 현장에 나가기전에 대기자로 있으면서 정신헤이하게 월급루팡 엄청나게 했다. 공부도 거의 안했고 그냥 회사에서 하라는것만 따박따박 억지로 보고서 써다내고 이렇게하다가, 도쿄에서 살고싶었는데, 삿 포로지점 전근명령받았더니, 일자리는 하코다...';
    const postWriteDate = '2021.05.26';

    const data = [
        {
            postCode: 1,
            postTitle: postTitle,
            postContent: postContent,
            postWriteDate: postWriteDate,
        },
        {
            postCode: 2,
            postTitle: '제목',
            postContent: '내용',
            postWriteDate: '날짜',
        },
        {
            postCode: 3,
            postTitle: '제목2',
            postContent: '내용2',
            postWriteDate: '날짜2',
        },
    ]
    //테스트 데이터 끝

    const nav = useNavigate();
    // const [user, setUser] = useState({});

    // useEffect(()=>{
    //     setUser(LoginTest(()=>{nav('/')}));  //로그인 상태인지 확인하는 부분
    // },[])

    //프로필 이미지(토큰), 블로그 이름, 블로그 이미지, (글제목,글내용,쓴날짜,글사진), (큰 카테고리, 세부 카테고리)
    //받아오면 store 저장 후 post 상세보기 때 selector 로 꺼내 쓰자.


    return(
        <section className="blog-container">
            <Header title="블로그" href="/blog"/>
            <div className="blog-content">
                <div className="image-container">
                    <img className="blog-main-img" src="/blog/test.jpg"/>
                    <div>블로그 이름</div>
                </div>
                
                <article className="blog-article">
                    <div>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{fontWeight:'bold'}}>최신 글</div>
                        <Button text="글 쓰기" onClick={()=>{nav('/blog/post-write')}}/>
                        </div>
                        <hr/>
                        <PostComponent posts={data} url="post"/>
                    </div>
                    <section>
                        <div>테스트 카테고리</div>
                        <ol>
                            <li>리스트</li>
                            <li>as2</li>
                            <li>as2</li>
                            <li>as2</li>
                            <li>as2</li>
                            <li>as2</li>
                        </ol>
                    </section>
                </article>
            </div>
        </section>
    )
}

export default Blog;