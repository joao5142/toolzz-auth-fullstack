import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 100%;
`;
export const Checkbox = styled.input.attrs(() => {
  return {
    type: "checkbox",
  };
})`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => props.color};
`;

export const Captcha = styled.div.attrs(() => {
  return {
    className: "h-captcha",
    "data-sitekey": "123123",
    "data-size": "full",
  };
})`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
