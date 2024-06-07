import styles from './aboutMeSection.module.css'

export default function AboutMeSection() {

    return (
        <div className={styles.aboutMeWrapper}>
            <div className={`${styles.aboutMeContainer} container`}>
                <h3 className={styles.aboutMeTitle}>About Me</h3>
                <p className={styles.aboutMeText}>
                    I'm <b>Beatriz Carvalho</b>, with 29 years old currently living in state of São Paulo - Brazil. <b>Frontend Developer</b>, working professionally as a developer since 2022.       
                    <br/>
                    <br/>
                    I engage in <b>e-commerce</b> projects focused on <b>website development</b> and <b>maintenance</b>. I also contribute to the development of <b>Landing Pages</b>, using technologies like NextJs, ReactJS, Tailwind, and others.
                </p>
            </div>
        </div>
    )
}