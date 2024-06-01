import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    const nav = useNavigate();
    return(
        <div onClick={()=>{nav(props.href)}} className="blog-header">
            <h1 style={{cursor:'pointer',userSelect:'none'}}>{props.title}</h1>
            <div>
                <button onClick={()=>{
                    alert('마이페이지 이동');
                    nav('/mypage');
                }}>profile</button>
            </div>
        </div>
    )
}

export default Header;