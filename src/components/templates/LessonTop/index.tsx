import React, { useCallback } from "react";
import * as styles from "./style.module.scss";
import Button from "components/atoms/Button";

function LessonTop(): JSX.Element {
  const handleClick = useCallback(() => {
    window.open(
      "https://join.slack.com/t/kk-webhq/shared_invite/zt-r0qjvw1f-5QCnXyGzW4~OA6574tIipg",
      "_blank"
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>
        主に React を用いた開発を行うフロントエンド初心者 〜
        中級者プログラマー向けの Slack ワークスペースを運用しています。
        <br />
        無料でコードレビューなども行っていますので、お気軽にご参加ください。
      </p>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleClick}>ワークスペースに参加する</Button>
      </div>
    </div>
  );
}

export default LessonTop;
