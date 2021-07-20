import * as express from "express";
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

const {
  nodemailer: {pass, user},
} = functions.config();
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const transporter = nodemailer.createTransport({
  auth: {
    pass,
    user,
  },
  port: 46,
  secure: true,
  service: "gmail",
});

router.all("/", async (req, res) => {
  const {method} = req;

  if (method === "OPTIONS") {
    res.status(200);
    res.send();

    return;
  }

  if (method === "POST") {
    const {body: {email, name, subject, text}} = req;

    await transporter.sendMail({
      subject,
      text,
      replyTo: {
        name,
        address: email,
      },
      to: user,
    });

    res.status(201);
    res.send();

    return;
  }
});

export default router;
