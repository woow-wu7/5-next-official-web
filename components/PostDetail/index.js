import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { Button } from "antd";

const Detail = (props) => {
  const { data = {} } = props || { data: {} };
  const router = useRouter();

  console.log("router", router);

  return (
    <div key={data.id} className={styles.container}>
      <h3>{data.post.title}</h3>
      <div>{data.post.content}</div>
      <div>{data.post.detail}</div>
      <div type="link" onClick={() => router.back()}>
        <a href="#">返回</a>
      </div>
    </div>
  );
};

export default Detail;
