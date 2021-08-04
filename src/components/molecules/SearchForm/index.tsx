import { navigate, useLocation } from "@reach/router";
import { parse } from "query-string";
import React, { useCallback, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Icon from "react-icons-kit";
import { ic_search } from "react-icons-kit/md/ic_search";
import * as styles from "./style.module.scss";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

type FieldValues = {
  q: string;
};

function SearchForm(): JSX.Element {
  const { search } = useLocation();
  const { q } = useMemo(() => parse(search), [search]);
  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      q: typeof q === "string" ? q : "",
    },
  });
  const onSubmit = useCallback<SubmitHandler<FieldValues>>(({ q }) => {
    navigate(`/blog${q && `?q=${encodeURIComponent(q)}`}`);
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("q")} />
      <div className={styles.button}>
        <Button>
          <Icon icon={ic_search} size={18} />
        </Button>
      </div>
    </form>
  );
}

export default SearchForm;
