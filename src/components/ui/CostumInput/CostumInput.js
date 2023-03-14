import React from "react";
import { HiSearch } from "react-icons/hi";
import { InputContainer, InputStyled } from "../UiStyles";

const CostumInput = ({ onChangehandler, placeholder, type }) => {
  return (
    <InputContainer>
      <HiSearch style={{ width: "30px", height: "30px" }} />
      <InputStyled
        onChange={onChangehandler}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default CostumInput;
