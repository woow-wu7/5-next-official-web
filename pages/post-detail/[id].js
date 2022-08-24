import { request } from "../../utils/index";
import Detail from "../../components/PostDetail";

export async function getStaticPaths() {
  const data = await request("http://localhost:3000/api/postList");

  const paths = data.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context; // 获取路由传递过来的 ( 动态路由参数 )
  const data = await request(`http://localhost:3000/api/post/${params.id}`);

  return {
    props: { post: data },
  };
}

export default function PostDetail({ post }) {
  return <Detail data={post}></Detail>;
}
