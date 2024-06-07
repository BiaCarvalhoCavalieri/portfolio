import boaVistaImage from "../../../assets/project-boa-vista-2.png"
import checkoutSimulation from "../../../assets/checkout-simulation.png"
import productPage from "../../../assets/product-page.png"
import arrowRight from "../../../assets/arrow-right.svg"
import mobileDevice from "../../../assets/mobile-device.svg"
import desktopDevice from "../../../assets/desktop-device.svg"
import Image, { StaticImageData } from "next/image";
import styles from './projectsSection.module.css'
interface IProjectInformations {
    image: StaticImageData
    name: string
    link: string
    codeLink: string | null
    mobile: boolean
    desktop: boolean
}
export default function ProjectsSection() {
    const projectInformations: IProjectInformations[] = [
        {
            image: boaVistaImage,
            name: 'Landing Page - Boa Vista Investimento',
            link: 'https://boavistainvestimentos.com.br/',
            codeLink: null,
            mobile: true,
            desktop: true,
        },
        {
            image: checkoutSimulation,
            name: 'Checkout Example Simulation',
            link: 'https://checkout-example-simulation-nuyb8j4k1-biacarvalhocavalieri.vercel.app/',
            codeLink: 'https://github.com/BiaCarvalhoCavalieri/checkout-example-simulation',
            mobile: false,
            desktop: true,
        },
        {
            image: productPage,
            name: 'Product Page Nike Overview',
            link: 'https://biacarvalhocavalieri.github.io/ProjectNike2022/',
            codeLink: 'https://github.com/BiaCarvalhoCavalieri/ProjectNike2022',
            mobile: true,
            desktop: true,
        }
    ]

    return (
        <div className={styles.projectsWrapper}>
            <div className={`${styles.projectsContainer} container`}>
                <h3 className={styles.projectsTitle}>Projects</h3>
                <div className={`${styles.projectsCardsContainer} d-flex align-center`}>
                    {projectInformations.map((project) => {
                        return (
                            <div key={project.name} className={styles.projectsCard}>
                                <Image
                                    className={styles.projectsCardImage}
                                    src={project.image}
                                    alt={`Imagem da ${project.name}`}
                                />
                                <div className={styles.projectsCardInformations}>
                                    <h4 className={styles.projectsCardTitle}>{project.name}</h4>
                                    <div className={`${styles.projectsCardType} d-flex align-center`}>
                                        <span className={styles.projectsCardTypeTitle}>Web Development</span>
                                        {project.mobile && (
                                            <Image src={mobileDevice} alt="Ícone de celular" />
                                        )}
                                        {project.desktop && (
                                            <Image src={desktopDevice} alt="Ícone de computador" />
                                        )}
                                    </div>
                                    <div className={`${styles.projectsCardButtons} d-flex align-center justify-between`}>
                                        <a
                                            className={`${styles.projectsCardButtonLive} d-flex align-center justify-center`}
                                            href={project.link}
                                            target='_blank'
                                        >
                                            Live Preview
                                        </a>
                                        {project.codeLink &&
                                            <a
                                                className={`${styles.projectsCardButtonCode} d-flex align-center`}
                                                href={project.codeLink}
                                                target="_blank"
                                            >
                                                View Code
                                                <Image src={arrowRight} alt="Arrow Right" />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}