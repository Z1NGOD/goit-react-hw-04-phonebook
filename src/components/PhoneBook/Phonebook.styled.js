import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const MainText = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  margin-bottom: 20px;
  ::placeholder {
    color: #999;
  }
`;

export { MainText, Input, Form};