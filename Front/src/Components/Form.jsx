import { useState } from 'react';
import styles from '../Styles.module.css';

export default function Form({login}){

    const [errorpass, setErrorpass] = useState(false);
    const [userData, setUserData] = useState({
        username:'',
        password:''
    })

    const handleInputChange = (event)=>{
        const newValues = {
            ...userData,
            [event.target.name]: event.target.value,
          };
        setUserData(newValues);  

        if(validatePassword.test(userData.password)){setErrorpass(true);}
    }

    let validatePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    const handleSubmit = ()=>{
        login(userData)
    }

    return(
        <div className={styles.font_form}>
        <form className={styles.form}>
            <h3>LOGIN</h3>
            <label htmlFor="email">Username</label>
            <input type="email" placeholder="email@gmail.com" name='username' value={userData.username} onChange={handleInputChange}/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="*******" name='password' value={userData.password} onChange={handleInputChange}/>
            <p>{errorpass === false?'*La contraseña no cumple con los requisitos': null}</p>
            <button onClick={handleSubmit}>LOGIN</button>
        </form>
        </div>
    )
}