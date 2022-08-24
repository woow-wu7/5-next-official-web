```
1
报错: Error: A required parameter (id) was not provided as a string in getStaticPaths for /post/[id]
原因: id必须 是一个string
解决: 如下

export async function getStaticPaths() {
  const data = await request("http://localhost:3000/api/postList");

  const paths = data.map((post) => {
    return {
      params: {
        id: String(post.id), // 这里post.id转成字符串即可
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
```
