import { useState } from 'react';
import styles from '../Styles.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Form({register}){

    const [erroruser, setErroruser] = useState(false);
    const [errorpass, setErrorpass] = useState(false);
    const [userData, setUserData] = useState({email:'', password:''});

    const handleInputChange = (event)=>{
        const newValues = {...userData, [event.target.name]: event.target.value,};
        setUserData(newValues); 
        
        validateUsername.test(newValues.email)? setErroruser(true): setErroruser(false);
        validatePassword.test(newValues.password)? setErrorpass(true): setErrorpass(false);
    };

    const validatePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const validateUsername = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;

    const handleSubmit = ()=>{
        register(erroruser, errorpass)
        if(erroruser && errorpass === true){
            axios.post('http://localhost:3001/login', userData)
            .then((response) => {})
            .catch((error) => {
                console.log(error)
            })
        }
    };

    return(
        <div className={styles.font_form}>
        <form className={styles.form}>
            <h3>SING UP</h3>
            <label htmlFor="email">Username</label>
            <input type="email" placeholder="email" name='email' value={userData.email} onChange={handleInputChange}/>
            <p>{erroruser === false?'*El correo electrónico no es válido.': null}</p>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name='password' value={userData.password} onChange={handleInputChange}/>
            <p>{errorpass === false?'*La contraseña debe tener entre 8 y 16 caracteres.': null}</p>
            <NavLink to={"/s"}>
            <h5>Iniciar sesíon?</h5>
            </NavLink>
            <button type="submit" onClick={handleSubmit}>Registrarse</button>
        </form>
        </div>
    )
}