import React from "react";
import * as T from "./types";
import * as S from "./styles";

const Input = React.forwardRef<HTMLInputElement, T.InputProps>((props, ref) => {
  const { value, onChange, disabled, placeholder } = props;

  return (
    <S.Container>
      <S.Input
        ref={ref}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </S.Container>
  );
});

export default Input;
