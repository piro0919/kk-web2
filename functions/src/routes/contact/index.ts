import * as express from "express";
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import axios from "axios";

const {
  nodemailer: {pass, user},
  recaptcha: {secret},
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
    const {body: {email, name, subject, text, token}} = req;

    const {
      data: {success},
    } = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
        }
    );

    if (!success) {
      res.status(503);
      res.send();

      return;
    }

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

  res.status(500);
  res.send();
});

export default router;
