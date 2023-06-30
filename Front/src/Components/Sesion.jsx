import { useState } from 'react';
import styles from '../Styles.module.css';
import axios from 'axios';

export default function Sesion({login}){

    const [userData, setUserData] = useState({email:'', password:''});

    const handleInputChange = (event)=>{
        const newValues = {...userData, [event.target.name]: event.target.value,};
        setUserData(newValues); 
    };

    const handleSubmit = ()=>{
        axios.get('http://localhost:3001/logins', {params: userData})
        .then((response) => {})
        .catch((error) => {
            console.log(error)
        })
        login(userData)
    };

    return(
        <div className={styles.font_form}>
        <form className={styles.sesion}>
            <h3>LOGIN</h3>
            <label htmlFor="email">Username</label>
            <input type="email" placeholder="email" name='email' value={userData.email} onChange={handleInputChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name='password' value={userData.password} onChange={handleInputChange}/>
            <br/>
            <button type='submit' onClick={handleSubmit}>Iniciar Sesion</button>
        </form>
        </div>
    )
}