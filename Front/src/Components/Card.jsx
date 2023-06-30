import styles from '../Styles.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../Redux/action';
import { useState } from 'react';
import { useEffect } from 'react';

export function Card({data, onClose, myFavorites, addCharacter, deleteCharacter}){

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = ()=>{
    isFav ? deleteCharacter(data.id):addCharacter(data);
    setIsFav(!isFav); 
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === data.id) setIsFav(true);
    });
  }, [myFavorites, data]);

    return(
      <div className={styles.container}>
          <button onClick={handleFavorite} className={styles.render}>{isFav?'❤️':'🤍'}</button>
          <button onClick={()=>{onClose(data.id)}}>X</button>
          <h2>{data.name}</h2>
          <NavLink to={`/detail/${data.id}`}> <img src={data.image} alt={data.name} /> </NavLink>
          <div>
              <h3>{data.species}</h3>
              <h3>{data.gender}</h3>
          </div>
      </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addCharacter:(data)=>dispatch(actions.addCharacter(data)),
    deleteCharacter:(id)=>dispatch(actions.deleteCharacter(id))
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);