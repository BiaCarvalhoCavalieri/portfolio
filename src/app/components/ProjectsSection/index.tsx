"use client"
import React from "react"
import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from "swiper/modules"

//Assets
import boaVistaImage from "../../../assets/images/project-boa-vista-2.png"
import checkoutSimulation from "../../../assets/images/checkout-simulation.png"
import productPage from "../../../assets/images/product-page.png"
import arrowRight from "../../../assets/icons/arrow-right.svg"
import mobileDevice from "../../../assets/icons/mobile-device.svg"
import desktopDevice from "../../../assets/icons/desktop-device.svg"
//Styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import styles from "./projectsSection.module.css"

interface IProjectInformations {
    image: StaticImageData;
    name: string;
    link: string;
    codeLink: string;
    mobile: boolean;
    desktop: boolean;
}
const projectInformations: IProjectInformations[] = [
    {
        image: boaVistaImage,
        name: 'Landing Page - Boa Vista Investimento',
        link: 'https://boavistainvestimentos.com.br/',
        codeLink: '',
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
    },
    {
        image: boaVistaImage,
        name: 'Landing Page - Boa Vista Investimento',
        link: 'https://boavistainvestimentos.com.br/',
        codeLink: '',
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
export default function ProjectsSection() {
    return (
        <div className={styles.projectsWrapper} id="projects">
            <div className={`${styles.projectsContainer} container`}>
                <h3 className={styles.projectsTitle}>Projects</h3>
                <div className={`${styles.projectsCardsContainer}`}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        {projectInformations.map((project, index) => {
                            return (
                                <SwiperSlide key={`${project.name}${index}`} className={styles.projectsCard}>
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
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}