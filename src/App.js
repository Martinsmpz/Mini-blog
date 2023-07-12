import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import {useState, useEffect} from "react"
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './Context/AuthContext';


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Register from './Register/Register';
import LOgin from "./Login/LOgin"
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Serach/Search';
import Post from './pages/Post/Post'
import Editpost from './pages/Editpost/Editpost'


function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUSer = user === undefined


  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user)
      })
     }, [auth])


  if (loadingUSer) {
    return <p>Carregando...</p>
  }


  
  return (
    <div className="App">
     <AuthProvider value={{user}}>
     <BrowserRouter>
     <Navbar/>
     <div className='cointainer'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>  }/>
        <Route path="/search" element={<Search/>  }/>
        <Route path="/posts/:id" element={<Post />} />
        
        <Route 
        path="/Editpost/:id" element={user ? <Editpost/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={!user ? <LOgin/> : <Navigate to="/"/> } />
        <Route path="/register" element={ !user ? <Register/> : <Navigate to="/"/> } />
        <Route path="/CreatePost" element={ user ? <CreatePost/> : <Navigate to="/Login"/>} />
        <Route path="/Dashboard" element={ user ? <Dashboard/> : <Navigate to="/Login"/>} />
        
      </Routes>
     </div>
     <Footer/>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
