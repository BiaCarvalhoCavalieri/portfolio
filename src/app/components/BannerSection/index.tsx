"use client"
import { useEffect, useState } from "react"
import BannerImage from "../../../assets/images/banner-image.png"
import BannerMobileImage from "../../../assets/images/banner-image-mobile.png"
import ArrowDown from "../../../assets/icons/circle_down.svg"
import LinkedinIcon from "../../../assets/icons/linkedin.svg"
import GithubIcon from "../../../assets/icons/github.svg"
import WhatsAppIcon from "../../../assets/icons/whatsapp.svg"
import Image from "next/image";
import styles from "./bannerSection.module.css";

export default function BannerSection() {
    const [isDesktop, setIsDesktop] = useState(false);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1024);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [])

    return (
        <section className={`${styles.banner} d-flex w-100 container`}>
            <div className={`${styles.bannerInfos} d-flex`}>
                <h1 className={styles.bannerInfosTitle}>Beatriz Carvalho</h1>
                <h2 className={styles.bannerInfosSubtitle}> Front-end Developer</h2>
                <span className={styles.bannerInfosPhrase}>Front-end developer focused on creating Web applications. I really like different projects that solve real problems.</span>
                <a
                    className={`${styles.bannerInfosButton} d-flex align-center justify-center`}
                    href="/Beatriz_Carvalho_Cavalieri_Resume.pdf"
                    download="Beatriz_Carvalho_Cavalieri_Resume.pdf"
                >
                    <Image src={ArrowDown} alt="download CV" /> Download CV
                </a>
                <div className={`${styles.bannerInfosLinks} d-flex`}>
                    <a
                        className={`${styles.bannerInfosLinkItem}    d-flex align-center justify-center`}
                        href="https://www.linkedin.com/in/beatriz-carvalho-cavalieri/"
                        target="_blank"
                    >
                        <Image src={LinkedinIcon} alt="linkedin" />
                    </a>
                    <a
                        className={`${styles.bannerInfosLinkItem} d-flex align-center justify-center`}
                        href="https://github.com/BiaCarvalhoCavalieri"
                        target="_blank"
                    >
                        <Image src={GithubIcon} alt="github" />
                    </a>
                    <a
                        className={`${styles.bannerInfosLinkItem}  d-flex align-center justify-center`}
                        href="https://api.whatsapp.com/send/?phone=5514988194114&text=Ol%C3%A1+Entrei+em+contato+pelo+seu+portfio&type=phone_number&app_absent=0"
                        target="_blank"
                    >
                        <Image src={WhatsAppIcon} alt="WhatsAppIcon" />
                    </a>
                </div>
            </div>
            <Image
                src={isDesktop ? BannerImage : BannerMobileImage}
                alt={"Banner com Imagem da Programadora Beatriz Carvalho"}
                className={styles.bannerImage}
            />
        </section>
    )
}