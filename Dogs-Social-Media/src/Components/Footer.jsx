import styles from "./Footer.module.css";
// import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import ReactDogs from '../Assets/dogs.svg?react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ReactDogs />
            <p>Dogs. Alguns direitos reservados.</p>
        </footer>
    );
};

export default Footer;