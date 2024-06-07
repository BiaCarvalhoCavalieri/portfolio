import styles from "./footer.module.css";

export default function Footer() {
    return (
        <section className={`${styles.footer} d-flex align-center justify-center`}>
            <p className={styles.footerReservedText}>
                © 2024 Beatriz Carvalho All rights reserved
            </p>
        </section>
    )
}