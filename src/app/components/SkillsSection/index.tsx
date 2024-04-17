import reactIcon from '../../../assets/icons/icon-react.svg'
import sassIcon from '../../../assets/icons/icon-sass.svg'
import typescriptIcon from '../../../assets/icons/icon-typescript.svg'
import jsIcon from '../../../assets/icons/icon-js.svg'
import gitIcon from '../../../assets/icons/icon-git.svg'
import htmlIcon from '../../../assets/icons/icon-html.svg'
import graphqlIcon from '../../../assets/icons/icon-graphql.svg'
import tailwindIcon from '../../../assets/icons/icon-tailwind.svg'
import nextIcon from '../../../assets/icons/icon-nextjs.svg'
import cssIcon from '../../../assets/icons/icon-css.svg'
import vtexIcon from '../../../assets/icons/icon-vtex.svg'
import githubIcon from '../../../assets/icons/icon-github.svg'
import Image, { StaticImageData } from "next/image";
import styles from './skillsSection.module.css'

interface ISkillsItemsInfos {
    icon: StaticImageData
    name: string
}
export default function SkillsSection() {
    const skillsItemsInfos: ISkillsItemsInfos[] = [
        {
            icon: reactIcon,
            name: 'ReactJS',
        },
        {
            icon: sassIcon,
            name: 'Sass',
        },
        {
            icon: typescriptIcon,
            name: 'Typescript',
        },
        {
            icon: jsIcon,
            name: 'Javascript',
        },
        {
            icon: gitIcon,
            name: 'Git',
        },
        {
            icon: htmlIcon,
            name: 'HTML',
        },
        {
            icon: graphqlIcon,
            name: 'GraphQL',
        },
        {
            icon: tailwindIcon,
            name: 'Tailwind CSS',
        },
        {
            icon: nextIcon,
            name: 'NextJS',
        },
        {
            icon: cssIcon,
            name: 'CSS',
        },
        {
            icon: vtexIcon,
            name: 'VTEX IO',
        },
        {
            icon: githubIcon,
            name: 'GitHub',
        }
    ]

    return (
        <div className={styles.skillsWrapper}>
            <div className={`${styles.skillsContainer} container`}>
                <h3 className={styles.skillsTitle}>My Skills</h3>
                <div className={styles.skillsItems}>
                    {skillsItemsInfos.map((item) => {
                        return (
                            <div key={item.name} className={`${styles.skillsItem} d-flex align-center`}>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    className={styles.skillsItemImage}
                                />
                                <h4 className={styles.skillsItemText}>{item.name}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}