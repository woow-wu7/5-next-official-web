import Head from "next/head";
import { Input } from "antd";
import { useState } from "react";
import styles from "../styles/GetServerSideProps.module.scss";
import Translate from "../components/Translate";

const fetchEnglish = async (params) => {
  const response = await fetch(
    `https://api.66mz8.com/api/translation.php?info=${params}`
  );
  const data = await response.json();
  return data;
};

const GetServerSideProps = (props) => {
  console.log("props", props);

  const [input, setINput] = useState("I come from China");
  const [data, setData] = useState(props.data);

  // spa
  const onChangeInput = async (e) => {
    const value = e.target.value;
    setINput(() => value);

    const data = await fetchEnglish(value);
    setData(() => data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>8 next official web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Translate
        input={input}
        data={data}
        onChangeInput={onChangeInput}
      ></Translate>
    </div>
  );
};

// 服务端渲染
export const getServerSideProps = async ({ req, res }) => {
  const data = await fetchEnglish("I come from China");
  console.log("req", req);
  console.log("res", res);
  return { props: { data } };
};

export default GetServerSideProps;