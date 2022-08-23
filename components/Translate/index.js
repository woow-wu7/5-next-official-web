import { Input } from "antd";
import styles from "./index.module.scss";

const Translate = (props) => {
  const { data, input, onChangeInput } = props;
  return (
    <main className={styles.main}>
      <div>
        <span>请输入要翻译的中文：</span>
        <Input
          style={{ width: "300px" }}
          value={input}
          onChange={onChangeInput}
        ></Input>
      </div>
      <div>english: {data.info}</div>
      <div>chinese: {data.fanyi}</div>
    </main>
  );
};

export default Translate;
