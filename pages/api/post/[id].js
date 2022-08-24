export default function handler(req, res) {
  const { id } = req.query;

  const arr = [
    {
      id: 1,
      post: {
        title: "文章1",
        content: "这是文章1的内容",
        detail: "这是文章1的内容-详情",
      },
    },
    {
      id: 2,
      post: {
        title: "文章2",
        content: "这是文章2的内容",
        detail: "这是文章2的内容-详情",
      },
    },
    {
      id: 3,
      post: {
        title: "文章3",
        content: "这是文章3的内容",
        detail: "这是文章3的内容-详情",
      },
    },
  ];

  const data = arr[id - 1];

  res.status(200).json(data);
}
