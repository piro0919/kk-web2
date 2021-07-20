/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import ReactMarkdown, { ReactMarkdownOptions } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import { useWindowSize } from "rooks";
import Layout from "../Layout";
import * as styles from "./style.module.scss";

export type BlogArticleTopProps = Pick<ReactMarkdownOptions, "children"> &
  Pick<CopyToClipboard.Props, "onCopy"> & {
    date: ReactNode;
    title: ReactNode;
  };

function BlogArticleTop({
  children,
  date,
  onCopy,
  title,
}: BlogArticleTopProps): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.heading1}>{title}</h1>
          <div>{date}</div>
          <ReactMarkdown
            className={`markdown-body ${styles.reactMarkDown}`}
            components={{
              a: ({ node, ...props }) => <a {...props} className={styles.a} />,
              blockquote: ({ node, ...props }) => (
                <blockquote {...props} className={styles.blockquote} />
              ),
              code: ({ inline, node, ...props }) => {
                const { children } = props;
                const text =
                  Array.isArray(children) && typeof children[0] === "string"
                    ? children[0]
                    : undefined;

                return inline ? (
                  <code {...props} className={styles.code} />
                ) : (
                  <div className={styles.codeWrapper}>
                    {typeof text === "string" ? (
                      <div className={styles.copyToClipboardWrapper}>
                        <CopyToClipboard onCopy={onCopy} text={text}>
                          <Icon icon={ic_content_copy} />
                        </CopyToClipboard>
                      </div>
                    ) : null}
                    <SyntaxHighlighter
                      {...props}
                      PreTag="div"
                      className={styles.code}
                      codeTagProps={{
                        className: styles.code,
                      }}
                      style={atomOneDark}
                    />
                  </div>
                );
              },
              iframe: ({ node, ...props }) => (
                <iframe {...props} className={styles.iframe} />
              ),
              pre: ({ node, ...props }) => (
                <pre {...props} className={styles.pre} />
              ),
              table: ({ node, ...props }) => (
                <table {...props} className={styles.table} />
              ),
              tr: ({ node, ...props }) => (
                <tr {...props} className={styles.tr} />
              ),
              ul: ({ node, ordered, ...props }) => (
                <ul {...props} className={styles.ul} />
              ),
            }}
            linkTarget="_blank"
            rehypePlugins={[rehypeRaw as never]}
            remarkPlugins={[[gfm as never, { singleTilde: false }]]}
          >
            {children}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export default BlogArticleTop;
