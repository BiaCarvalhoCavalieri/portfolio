import phoneIcon from "../../../assets/icons/icon-phone.svg"
import mailIcon from "../../../assets/icons/icon-mail.svg"
import githubIcon from "../../../assets/icons/github.svg"
import locationIcon from "../../../assets/icons/icon-location.svg"
import Image, { StaticImageData } from "next/image"
import styles from "./contact.module.css";

interface IContactListInfos {
    icon: StaticImageData;
    alt: string;
    text: string;
}

const contactListInfos: IContactListInfos[] = [
    {
        icon: phoneIcon,
        alt: 'Phone icon',
        text: '+55 14 988194114'
    },
    {
        icon: mailIcon,
        alt: 'Mail icon',
        text: 'bia3003carvalho@gmail.com'
    },
    {
        icon: githubIcon,
        alt: 'GitHub icon',
        text: 'BiaCarvalhoCavalieri'
    },
    {
        icon: locationIcon,
        alt: 'Location icon',
        text: 'Piraju, São Paulo, Brazil'
    }
]
export default function ContactSection() {
    return (
        <section className={styles.contactWrapper} id="contact">
            <div className={styles.contactCard}>
                <h3 className={styles.contactCardTitle}>Contact</h3>
                {contactListInfos.map((contactItem, index) => {
                    return (
                        <div key={`item-${index}`} className={styles.contactCardItem}>
                            <Image
                                src={contactItem.icon}
                                alt={contactItem.alt}
                                className={styles.contactCardItemImage}
                            />
                            <span className={styles.contactCardItemText}>{contactItem.text}</span>
                        </div>
                    )
                })}
                <div className={styles.contactCardLineBottom}></div>
            </div>
        </section >
    )
}