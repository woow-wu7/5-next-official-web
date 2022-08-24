// mock
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      post: {
        title: "文章1",
        content: "这是文章1的内容",
      },
    },
    {
      id: 2,
      post: {
        title: "文章2",
        content: "这是文章2的内容",
      },
    },
    {
      id: 3,
      post: {
        title: "文章3",
        content: "这是文章3的内容",
      },
    },
  ]);
}
