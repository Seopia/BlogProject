import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login/Login';
import Home from './page/home/Home';
import Blog from './page/blog/Blog';
import Post from './page/blog/Post';
import PostWrite from './page/blog/PostWrite';


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/post/:postCode' element={<Post/>}/>
        <Route path='/blog/post-write' element={<PostWrite/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
