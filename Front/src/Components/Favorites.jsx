import { connect } from "react-redux";
import Card from "./Card";
import styles from '../Styles.module.css';

export function Favorites({myFavorites}){
    return(
        <div className={styles.favorites}>
            {
            myFavorites.map((element)=>{
                return(
                    <Card data={element} key={element.id} onClose={()=>null}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites); 