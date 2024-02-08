import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import tokens from "../../styles/variables.module.scss";
import { ButtonSize, ButtonType } from "../enum/ButtonType";

const sizeStyles = {
  [ButtonSize.LG]: css`
    padding: ${tokens.spacingSquishLg};
    font-size: ${tokens.fontSizeSm};
  `,
  [ButtonSize.MD]: css`
    padding: ${tokens.spacingSquishMd};
    font-size: ${tokens.fontSizeXs};
  `,
  [ButtonSize.SM]: css`
    padding: ${tokens.spacingSquishSm};
    font-size: ${tokens.fontSizeBase};
  `,
};

const typeStyles = {
  [ButtonType.PRIMARY]: css`
    background-color: ${tokens.colorActionMedium};
    color: ${tokens.colorNeutralLightest};

    &:hover {
      background-color: ${tokens.colorActionLight};
    }

    &:active {
      background-color: ${tokens.colorActionDark};
    }

    &:disabled {
      background-color: ${tokens.colorActionLightest};
    }
  `,
  [ButtonType.SECONDARY]: css`
    background-color: ${tokens.colorTransparent};
    border: ${tokens.stroke100} solid ${tokens.colorActionMedium};
    color: ${tokens.colorActionMedium};

    &:hover {
      background-color: ${tokens.colorActionMedium};
      color: ${tokens.colorNeutralLight};
    }

    &:active {
      background-color: ${tokens.colorActionDark};
    }
  `,
};

// Componente estilizado para o botão
const StyledButton = styled.button<{
  btnSize: ButtonSize;
  btnType: ButtonType;
}>`
  border-radius: ${tokens.radius300};
  font-family: ${tokens.fontFamilyDigital};
  font-weight: ${tokens.fontWeightRegular};
  line-height: ${tokens.lineHeightTightest};
  ${(props) => sizeStyles[props.btnSize]}
  ${(props) => typeStyles[props.btnType]}
`;

// Props para o componente Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnSize?: ButtonSize;
  btnType?: ButtonType;
}

// Componente Button
const Button: React.FC<ButtonProps> = ({
  children,
  btnSize = ButtonSize.LG,
  btnType = ButtonType.PRIMARY,
  ...props
}) => {
  return (
    <StyledButton
      btnSize={btnSize}
      disabled={true}
      btnType={btnType}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
