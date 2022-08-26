// mock
export default function login(req, res) {
  res.status(200).json({
    id: 1,
    token: "xxx",
    username: "woow_wu7",
  });
}
