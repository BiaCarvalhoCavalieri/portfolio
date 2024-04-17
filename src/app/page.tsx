import Menu from "./components/Menu/index";
import BannerSection from "./components/BannerSection/index";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <BannerSection />
        <AboutMeSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
