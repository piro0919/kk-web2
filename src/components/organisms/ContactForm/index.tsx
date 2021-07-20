import React from "react";
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
};

function ContactForm({ onSubmit }: ContactFormProps): JSX.Element {
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
    </form>
  );
}

export default ContactForm;
