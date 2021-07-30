import React from "react";
import * as stylse from "./style.module.scss";
import ContactForm, {
  ContactFormProps,
} from "components/organisms/ContactForm";

export type ContactTopProps = Pick<ContactFormProps, "onSubmit"> & {
  recaptchaRef: ContactFormProps["ref"];
};

function ContactTop({ onSubmit, recaptchaRef }: ContactTopProps): JSX.Element {
  return (
    <div className={stylse.wrapper}>
      <ContactForm onSubmit={onSubmit} ref={recaptchaRef} />
    </div>
  );
}

export default ContactTop;
