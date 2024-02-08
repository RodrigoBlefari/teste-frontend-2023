import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import tokens from "../../styles/variables.module.scss";
import { InputType } from "../enum/InputTextType";

const typeColors = {
  [InputType.NORMAL]: tokens.colorNeutralMedium04,
  [InputType.FOCUS]: tokens.colorActionMedium,
  [InputType.SUCCESS]: tokens.colorAlertSuccess,
  [InputType.ERROR]: tokens.colorAlertError,
  [InputType.DISABLED]: tokens.colorActionMedium04,
};

const ContainerInput = styled.div`
  position: relative;
`;

const StyledInput = styled.input<{ inputtype: InputType }>`
  padding: ${tokens.spacingXxxs} ${tokens.spacingXxs};
  padding-top: ${tokens.spacingXs};
  border-color: ${(props) => typeColors[props.inputtype]};
  border-style: solid;
  border-width: ${tokens.stroke100};
  border-radius: ${tokens.radius200};
  background: transparent;
  font-size: ${tokens.fontSizeXs};
  height: 50px;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:disabled {
    border-color: ${typeColors[InputType.DISABLED]};
  }

  &:focus {
    border-color: ${typeColors[InputType.FOCUS]};
    padding: ${tokens.spacingNano} ${tokens.spacingXxs};
    padding-top: ${tokens.spacingXxs};
  }

  &:focus + label {
    top: 12px;
    font-size: ${tokens.fontSizeNano};
  }
`;

const Label = styled.label<{ value: string }>`
  z-index: -1;
  position: absolute;
  top: ${(props) => (props.value ? "12px" : "50%")};
  left: ${tokens.spacingXxs};
  font-size: ${(props) =>
    props.value ? tokens.fontSizeNano : tokens.fontSizeXs};
  color: ${tokens.colorNeutralMedium02};
  transition: top 0.3s, font-size 0.3s, color 0.3s;
  transform: translateY(-50%);
`;

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  types?: InputType;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  types = InputType.NORMAL,
  ...props
}) => {
  return (
    <ContainerInput>
      <StyledInput
        disabled={types == InputType.DISABLED}
        placeholder=""
        inputtype={types}
        {...props}
      />
      <Label value={value ? value.toString() : ""}>{label}</Label>
    </ContainerInput>
  );
};

export default InputText;
