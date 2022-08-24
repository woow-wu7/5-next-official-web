import Link from "next/link";
import styles from "./index.module.scss";

const List = (props) => {
  const { data = [] } = props || { data: [] };
  return (
    <div>
      {data.map((post) => {
        console.log("post.id", post.id);
        return (
          <div key={post.id} className={styles.container}>
            <h3>{post.post.title}</h3>
            <div>{post.post.content}</div>
            <Link href={`/post-detail/${post.id}`}>
              <a>详情</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
