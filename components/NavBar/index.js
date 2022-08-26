import styles from "./index.module.scss";
import { AntDesignOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <aside>
        <AntDesignOutlined className={styles.logo} />
        <div className={styles.menuItem}>掘金</div>
        <div className={styles.menuItem}>GitHub</div>
      </aside>
      <main>
        <div onClick={() => router.push("/login")}>登录</div>
        {/* <div onClick={() => signIn("Credentials")}>登录</div> */}
        <div>退出登录</div>
      </main>
    </div>
  );
}
