import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import CardAddProject from "../../components/CardAddProject";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home_container}>
        <Profile />

        <div className={styles.project_container}>
          <label className={styles.label}>
            Meus projetos
            <input type="text" name="search" placeholder="Search" />
          </label>

          <div className="projects">
            <CardAddProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
