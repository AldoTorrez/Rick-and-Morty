import Nav from './Components/Nav.jsx';
import Cards from './Components/Cards.jsx';
import About from './Components/About.jsx';
import Detail from './Components/Detail.jsx';
import Error from './Components/Error.jsx';
import Form from './Components/Form.jsx';
import Favorites from './Components/Favorites.jsx';
import styles from './Styles.module.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'adlotorrez91@gmail.com';
  const password = 'Aldo123me';

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const login = (userData)=>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  const onSearch = (character)=>{
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if(data.name) {setCharacters([...characters,data]);} 
       else{window.alert('No hay personajes con ese ID');}
    });
  }

    const onClose = (id) =>{
      setCharacters(characters.filter(animal => animal.id !== id))
    }

    useEffect(() => {
     !access && navigate('/');
    },[access]);

  return (
    <div>
         {pathname === '/'? null:<div className={styles.search}><Nav onSearch={onSearch}/></div>}
         <Routes>
                <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/detail/:userId' element={<Detail/>}></Route>
                <Route path='*' element={<Error/>}></Route>
                <Route path='/' element={<Form login={login}/>}></Route>
                <Route path='/favorites' element={<Favorites/>}></Route>
         </Routes>
    </div>
  );
}

export default App;