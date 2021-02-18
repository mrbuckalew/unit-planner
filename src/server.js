import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import { json } from "body-parser";
import session from "express-session";
import sessionFileStore from "session-file-store";
import morgan from "morgan";
require("dotenv").config();

const {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_BASE,
  SESSION_SECRET,
} = process.env;
const dev = NODE_ENV === "development";

const FileStore = new sessionFileStore(session);

polka() // You can also use Express
  .use(
    morgan("dev"),
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 31536000,
      },
      store: new FileStore({
        path: `.sessions`,
      }),
    }),
    compression({ threshold: 0 }),
    json(),
    sirv("static", { dev }),
    sapper.middleware({
      session: (req, res) => {
        return {
          token: req.session.token,
        };
      },
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
