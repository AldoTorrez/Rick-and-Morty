import Search from "./Search";
import { Link } from "react-router-dom";
import styles from "../Styles.module.css";

export default function Nav({onSearch}){
    return(
        <div className={styles.search}>
            <Link to='/home'> <button>Home</button> </Link>
            <Link to='/about'> <button>About</button> </Link>
            <Link to='/favorites'> <button>Favorites</button> </Link>
            <Search onSearch={onSearch}/>
        </div>
    )
}