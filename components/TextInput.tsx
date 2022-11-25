import styled from "styled-components"

const Component = styled.textarea<{ focus?: boolean; isEditing?: boolean }>`
  font-size: 30px;
  background: transparent;
  height: auto;
  line-height: 1.5;
  margin-top: 38px;
  outline: none;
  resize: none;
  width: 100%;
  white-space: pre-wrap;

  &::placeholder {
    color: rgba(0, 0, 0, 0.18);
    font-size: 30px;
    font-weight: 500;
  }
`

export const TextInput = () => {
    return <Component placeholder="Type somthing"/>
}