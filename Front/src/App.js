import Favorites from './Components/Favorites.jsx';
import Detail from './Components/Detail.jsx';
import Cards from './Components/Cards.jsx';
import About from './Components/About.jsx';
import Error from './Components/Error.jsx';
import Form from './Components/Form.jsx';
import Nav from './Components/Nav.jsx';
import Sesion from './Components/Sesion.jsx';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const login = (userData)=>{
  }

  const register = (username, password)=>{
    if(username === true && password === true){
      setAccess(true);
      navigate('/home');
    }
  }

  const onSearch = (character)=>{
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if(data.name) {setCharacters([...characters,data])}
       else{window.alert('No hay personajes con ese ID')}
    })
    .catch(()=>{window.alert('n')})
  };

    const onClose = (id) =>{setCharacters(characters.filter(animal => animal.id !== id))};

    useEffect(() => {
      if(pathname !== '/s')
      !access && navigate('/');
    },[access, navigate, pathname]);

  return (
    <div>
         {pathname === '/' || pathname === '/s'? null: <Nav onSearch={onSearch}/>}
         <Routes>
                <Route path ='/home' element ={<Cards characters ={characters} onClose ={onClose}/>}/>
                <Route path ='/detail/:userId' element ={<Detail/>}/>
                <Route path ='/' element ={<Form register={register}/>}/>
                <Route path ='/s' element ={<Sesion login={login}/>}/>
                <Route path ='/favorites' element ={<Favorites/>}/>
                <Route path ='/about' element ={<About/>}/>
                <Route path ='*' element ={<Error/>}/>
         </Routes>
    </div>
  );
}

export default App;