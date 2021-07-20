import * as express from "express";
import * as functions from "firebase-functions";
import contact from "./routes/contact";

const app = express();
const {
  enviroment: {node_env: nodeEnv},
} = functions.config();
const {
  [nodeEnv]: {access_control_allow_origin: accessControlAllowOrigin},
} = functions.config();

app.use((_, res, next) => {
  res.header({
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
  });

  next();
});
app.use("/contact", contact);

export const api = functions.region("asia-northeast1").https.onRequest(app);
