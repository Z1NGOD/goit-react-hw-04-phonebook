import styled from "@emotion/styled";
const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;
`;

const ContactItem = styled.li`
  padding: 16px;
  border-radius: 10px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;


export { ContactsList, ContactItem}