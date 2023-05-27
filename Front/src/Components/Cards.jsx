import Card from './Card';
import styles from '../Styles.module.css';

export default function Cards(props){
    return(
        <div className={styles.cards}>
            {props.characters.map((person, id)=><Card data={person} onClose={props.onClose} key={id}/>)}
        </div>
    )
}