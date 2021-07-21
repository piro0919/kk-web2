import { navigate, PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import usePortal from "react-useportal";
import useFetch, { IncomingOptions } from "use-http";
import ContactTop, { ContactTopProps } from "components/templates/ContactTop";
import Loading from "components/templates/Loading";
import Seo from "components/templates/Seo";

export type ContactProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Contact(_: ContactProps): JSX.Element {
  const options = useMemo<IncomingOptions>(
    () => ({
      timeout: 10000,
    }),
    []
  );
  const { post, response } = useFetch(
    `${process.env.GATSBY_BASE_URL}/api`,
    options
  );
  const recaptchaRef = useRef<ContactTopProps["recaptchaRef"]["current"]>(null);
  const [isOpenLoading, setIsOpenLoading] = useState(false);
  const handleSubmit = useCallback<ContactTopProps["onSubmit"]>(
    async ({ email, name, subject, text }) => {
      const { current } = recaptchaRef;

      if (!current) {
        toast.error("An Unknown Network Error Has Occurred");

        return;
      }

      const token = await current.executeAsync();

      if (typeof token !== "string") {
        toast.error("reCAPTCHA Validation Failed");

        current.reset();

        return;
      }

      setIsOpenLoading(true);

      await post("/contact", { email, name, subject, text, token });

      if (!response.ok) {
        setIsOpenLoading(false);

        toast.error("An Unknown Network Error Has Occurred");

        current.reset();

        return;
      }

      navigate("/contact/success");
    },
    [post, response]
  );
  const { Portal } = usePortal();
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Contact");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Contact" />
      <ContactTop onSubmit={handleSubmit} recaptchaRef={recaptchaRef} />
      <ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
      {isOpenLoading ? (
        <Portal>
          <Loading />
        </Portal>
      ) : null}
    </>
  );
}

export default Contact;
