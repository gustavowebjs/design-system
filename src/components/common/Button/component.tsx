import React from "react";
import * as T from "./types";
import * as S from "./styles";

const Button = React.forwardRef<HTMLButtonElement, T.ButtonProps>(
  (props, ref) => {
    const { children, type, variant } = props;

    return (
      <S.Container>
        <S.Button variant={variant} type={type} ref={ref}>
          {children}
        </S.Button>
      </S.Container>
    );
  }
);

export default Button;
