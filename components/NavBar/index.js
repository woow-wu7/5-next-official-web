import styles from "../../styles/components/NavBar.module.scss";
import { AntDesignOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <AntDesignOutlined className={styles.logo} />
      <div className={styles.menuItem}>掘金</div>
      <div className={styles.menuItem}>GitHub</div>
    </div>
  );
}
