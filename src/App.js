import styles from "./style/App.module.css";
import ServiceSection from "./components/ServiceSection";
import HeartShape from "./assets/heartShape.js";

function App() {
  return (
    <div className={styles.app}>
      <HeartShape className={styles.backgroundIcon} strokeWiddth={3} />
      <HeartShape className={styles.backgroundIcon} strokewidth={6} />

      <h1 className={styles.textshadowmoving}>Service Section Design</h1>
      <ServiceSection />
     
    </div>
  );
}

export default App;
