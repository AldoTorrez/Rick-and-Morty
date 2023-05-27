import styles from '../Styles.module.css';
import { useState } from 'react';

export default function Search({onSearch}){

    const [nombre, setNombre] = useState('');

    const handleNombre = (event) =>{setNombre(event.target.value);} 

    return(
        <>
            <input type="Search" className={styles.input} value={nombre} onChange={handleNombre}/>
            <button className={styles.button} onClick={()=>{onSearch(nombre)}}>Buscar</button>
        </>
    )
}