import styled from "@emotion/styled";

const Btn = styled.button`
  padding: 14px 28px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: purple;
  }

  &:focus {
    outline: none;
  }
`;

export {Btn}