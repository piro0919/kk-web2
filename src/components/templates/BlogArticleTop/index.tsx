/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import { Link } from "gatsby";
import React, { CSSProperties, ReactNode, useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import ReactMarkdown, { ReactMarkdownOptions } from "react-markdown";
import useScrollbarSize from "react-scrollbar-size";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import useWindowSize from "hooks/useWindowSize";

export type BlogArticleTopProps = Pick<ReactMarkdownOptions, "children"> &
  Pick<CopyToClipboard.Props, "onCopy"> & {
    date: ReactNode;
    title: ReactNode;
  } & {
    next?: {
      date: string;
      slug: string;
      title: string;
    };
    prev?: {
      date: string;
      slug: string;
      title: string;
    };
  };

function BlogArticleTop({
  children,
  date,
  next,
  onCopy,
  prev,
  title,
}: BlogArticleTopProps): JSX.Element {
  const { windowWidth } = useWindowSize();
  const { width } = useScrollbarSize();
  const tableWrapperStyle = useMemo<CSSProperties>(
    () => ({
      maxWidth: `${windowWidth - width - (windowWidth >= 980 ? 24 : 12) * 2}px`,
    }),
    [width, windowWidth]
  );

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
              code: ({ inline, node, ref, ...props }) => {
                const { children } = props;
                const text =
                  Array.isArray(children) && typeof children[0] === "string"
                    ? children[0]
                    : undefined;

                return inline ? (
                  <code {...props} className={styles.code} ref={ref} />
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
                      ref={ref as never}
                      style={atomOneDark}
                    />
                  </div>
                );
              },
              iframe: ({ node, src, ...props }) =>
                typeof src === "string" && src.includes("youtube") ? (
                  <div className={styles.youtubeWrapper}>
                    <iframe
                      {...props}
                      className={styles.youtube}
                      src={src as string}
                    />
                  </div>
                ) : (
                  <iframe {...props} src={src as string} />
                ),
              pre: ({ node, ...props }) => (
                <pre {...props} className={styles.pre} />
              ),
              table: ({ node, ...props }) => (
                <div className={styles.tableWrapper} style={tableWrapperStyle}>
                  <table {...props} className={styles.table} />
                </div>
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
          <nav className={styles.nav}>
            <div>
              {prev ? (
                <Link to={prev.slug}>
                  <p>{prev.title}</p>
                  <p className={styles.date}>{prev.date}</p>
                </Link>
              ) : null}
            </div>
            <div className={styles.nextLinkWrapper}>
              {next ? (
                <Link to={next.slug}>
                  <p>{next.title}</p>
                  <p className={styles.date}>{next.date}</p>
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </Layout>
  );
}

export default BlogArticleTop;
