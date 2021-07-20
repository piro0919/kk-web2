import React from "react";
import Layout from "../Layout";
import * as stylse from "./style.module.scss";
import ContactForm, {
  ContactFormProps,
} from "components/organisms/ContactForm";

export type ContactTopProps = Pick<ContactFormProps, "onSubmit">;

function ContactTop({ onSubmit }: ContactTopProps): JSX.Element {
  return (
    <Layout>
      <div className={stylse.wrapper}>
        <ContactForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}

export default ContactTop;
