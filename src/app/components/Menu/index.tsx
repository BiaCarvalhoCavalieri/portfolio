import styles from "./menu.module.css";
export default function Menu() {
 return (
    <nav className={`${styles.menu} d-flex justify-center container w-100`}>
        <a className={`${styles.menuItem} ${styles.menuItemHome} d-flex align-center`} href="/">Home</a>
        <a className={styles.menuItem}>About Me</a>
        <a className={styles.menuItem}>Projects</a>
        <a className={styles.menuItem}>Skills</a>
        <a className={styles.menuItem}>Contact</a>
    </nav>
 )
}