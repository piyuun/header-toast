import { ChangeEventHandler } from "react";
import styled from "styled-components"

const Component = styled.textarea`
  font-size: 30px;
  background: transparent;
  line-height: 1.5;
  margin-top: 38px;
  outline: none;
  resize: none;
  width: 100%;
  white-space: pre-wrap;
  &::placeholder {
    color: red;
    font-size: 30px;
    font-weight: 500;
  }
  resize: none;
`
interface TextInputProps {
    textAreaRef:React.MutableRefObject<any>;
    handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  }

export const TextInput = ({textAreaRef, handleChange} : TextInputProps) => {
    return <Component placeholder="Type somthing" ref={textAreaRef} onChange={handleChange} />
}