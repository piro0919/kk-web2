import React, { forwardRef, RefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./style.module.scss";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import Textarea from "components/atoms/Textarea";

type FieldValues = {
  email: string;
  name: string;
  subject: string;
  text: string;
};

export type ContactFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  ref: RefObject<ReCAPTCHA>;
};

const ContactForm = forwardRef<ReCAPTCHA, Omit<ContactFormProps, "ref">>(
  ({ onSubmit }: Omit<ContactFormProps, "ref">, ref): JSX.Element => {
    const {
      formState: { errors },
      register,
      handleSubmit,
    } = useForm<FieldValues>({
      defaultValues: {
        email: "",
        name: "",
        subject: "",
        text: "",
      },
    });

    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fieldsWrapper}>
          <div className={styles.fieldWrapper}>
            <Label>
              Name<abbr>*</abbr>
            </Label>
            <Input
              {...register("name", { required: true })}
              hasError={"name" in errors}
            />
          </div>
          <div className={styles.fieldWrapper}>
            <Label>
              Email<abbr>*</abbr>
            </Label>
            <Input
              {...register("email", { required: true })}
              hasError={"email" in errors}
              type="email"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <Label>
              Subject<abbr>*</abbr>
            </Label>
            <Input
              {...register("subject", { required: true })}
              hasError={"subject" in errors}
            />
          </div>
          <div className={styles.fieldWrapper}>
            <Label>
              Message<abbr>*</abbr>
            </Label>
            <Textarea
              {...register("text", { required: true })}
              hasError={"text" in errors}
            />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit">Submit</Button>
        </div>
        {typeof process.env.RECAPTCHA_SITE_KEY === "string" ? (
          <ReCAPTCHA
            ref={ref}
            sitekey={process.env.RECAPTCHA_SITE_KEY}
            size="invisible"
          />
        ) : null}
      </form>
    );
  }
);

export default ContactForm;
