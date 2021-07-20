import { PageProps } from "gatsby";
import React, { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
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

      if (response.ok) {
        toast.success("Send Success Email!");

        return;
      }

      toast.error("An Unknown Network Error Has Occurred");
    },
    [post, response]
  );

  return (
    <>
      <Seo title="Contact" />
      <ContactTop onSubmit={handleSubmit} />
      <ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
    </>
  );
}

export default Contact;
