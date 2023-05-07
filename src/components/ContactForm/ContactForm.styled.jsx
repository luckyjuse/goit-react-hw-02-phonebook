import styled from '@emotion/styled';

export const StyledForm = styled.form`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Input = styled.input`
  display: block;
`;
export const FormContainerDiv = styled.div``;
export const Label = styled.label``;

export const Button = styled.button`
  width: 100px;
  height: 24px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: rgb(184, 184, 184);
  :hover,
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 255);
  }
`;
