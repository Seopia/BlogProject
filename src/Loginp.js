import { useState } from 'react';
import './App.css';
import axios from 'axios';

const Login = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

  const join = async() => {

    const formData = new FormData();
    formData.append('accountId',id);
    formData.append('accountPassword',password);

    const response = await axios.post('http://localhost:8080/join', formData);

    console.log(response);
  }


  const login = async() => {

    const formData = new FormData();
    formData.append('username',loginId);
    formData.append('password',loginPassword);

    try{
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response);
      localStorage.setItem("token", response.headers.get("Authorization"));

    }catch(err){
      alert("로그인 안됨: ",err);
    }

  }

  

  
  const boardList = async() => {

    // 서버에 요청만
    const response = await axios.get('http://localhost:8080/board/posts?page=0',  
      {
        headers: { Authorization:
            localStorage.getItem("token")
         }
      });

    console.log(response);

  }


  return (
    <div className="App">


      <div>
        
        Id: <input type='text' value={id} onChange={(e) => setId(e.target.value)}/> <br />
        Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={join}>가입</button>

      </div>

      <div>
        
        Id: <input type='text' value={loginId} onChange={(e) => setLoginId(e.target.value)}/> <br />
        Password: <input type='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={login}>로그인</button>

      </div>


      <button onClick={boardList}>게시글 리스트</button>

      

    </div>
  );


}

export default Login;