import { PageProps } from "gatsby";
import React, { useCallback } from "react";
import useFetch from "use-http";
import ContactTop, { ContactTopProps } from "components/templates/ContactTop";
import Seo from "components/templates/Seo";

export type ContactProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Contact(_: ContactProps): JSX.Element {
  const { post, response } = useFetch(`${process.env.GATSBY_BASE_URL}/api`);
  const handleSubmit = useCallback<ContactTopProps["onSubmit"]>(
    async ({ email, name, subject, text }) => {
      await post("/contact", { email, name, subject, text });

      console.log(response);
    },
    [post, response]
  );

  return (
    <>
      <Seo title="Contact" />
      <ContactTop onSubmit={handleSubmit} />
    </>
  );
}

export default Contact;
