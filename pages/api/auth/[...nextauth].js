import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from "axios";

export default async function auth(req, res) {
  const providers = [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "用户名", type: "text" },
        password: { label: "密码", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials =>", credentials);

        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
              email: credentials?.username,
              password: credentials?.password,
            }
          );

          console.log("response.data =>", response.data);

          // const response_user = await axios.get("/me", undefined, {
          //   headers: { Authorization: `Bearer ${response.data.accessToken}` },
          // });

          // 登录成功后需要return你需要存储在 cookie 当中的数据
          // if (response_user.data)
          //   return {
          //     ...response_user.data,
          //     accessToken: response.data.accessToken,
          //     refreshToken: response.data.refreshToken,
          //     accessTokenExpires: response.data.expiresIn,
          //   };

          return response.data;
        } catch (error) {
          return null;
        }
      },
    }),
  ];

  return await NextAuth(req, res, {
    providers,
    callbacks: {
      // 每次调用 getSession() 、useSession() 的时候 都会触发并将 token 存入 user 中
      async session({ session, token }) {
        console.log("session =>", session);
        console.log("token =>", token);

        session.user.accessToken = token.accessToken;
        // session.user.refreshToken = token.refreshToken;
        session.error = token.error; // 用于处理token 失效

        return session;
      },

      // 上面登录成功后，jwt 回调会执行， user 中会拿到你 return 出来的数据， 注意： 仅在你调用 signin 接口的时候才会有值，之后都是在 cookie中读取
      async jwt(params) {
        console.log("params => ", params);
        const { token, user, account } = params;

        // 判断是自定义登录方式 credentials ， 并且是在登录页面调 signin 接口的时候 才会有 user信息
        // 如果有user信息，证明用户正在进行登录，所以需要将数据保存持久化到 cookie 中， 这样 session 回调就能拿到数据了
        if (account?.type === "credentials" && user) {
          token.accessToken = user.accessToken;
          // token.refreshToken = user.refreshToken;
          // token.accessTokenExpires =
          //   Date.now() + user.accessTokenExpires * 1000; // 设置过期时间 ，这里需要跟后端开发对接询问过期时间，或者直接叫后端返回 expiresAt 字段告诉我们过期时间 ， 目的是问了让 next-auth  token 同步服务端 token
          // token.userRole = "admin";
        }

        // 判断 token的有效期， 这里有个注意点，token 的有效期需要跟后端沟通，
        // 直接告诉你或者加个字段告诉你过期时间，这么做的目的是，next-auth 的 token 过期是独立的，
        // 并且是每次用户活跃都会刷新token的时间，这样就会出现跟后端服务的token过期不同步的情况，
        // 所以这里的方案是直接用服务端的token作为过期信号
        // if (Date.now() < token.accessTokenExpires) {
        //   return token;
        // }

        // 如果 登录信息过期， 希望无感刷新登录， 这里可以处理
        return {
          ...token,
          error: "accessTokenExpiresError", // 返回给客户端，让客户端处理退出登录的问题
        };
      },
    },
    session: {
      strategy: "jwt", // 如果这里设置的不是 jwt，那么 jwt 回调函数不会触发
    },
    pages: {
      // signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
  });
}
