import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../Styles.module.css'

export default function Detail(){

    const [character, setCharacter] = useState({});
    const {userId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${userId}`)
          .then((response) => response.json())
          .then((char) => {setCharacter(char)})
          .catch((err) => {window.alert("No hay personajes con ese ID");});
        }, [userId]);

    return(
        <div className={styles.detail}>
            <Link to='/home'> <button>Regresar</button> </Link>
            <div>
                <h1>{character.name}</h1>
                <h3>{'status: '+character.status}</h3>
                <h3>{'species: '+character.species}</h3>
                <h3>{'gender: '+character.gender}</h3>
                <h3>{'origen: '+character.origin?.name}</h3>
                <h3>{'id: '+character.id}</h3>
            </div>
            <div>
                <img src={character.image} alt="" />
            </div>
        </div>
    )
}