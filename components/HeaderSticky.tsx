import styled from 'styled-components';

export const Component = styled.header`
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 1px 1px 4px 0 rgba(0, 0, 0, 0.12);
  position: fixed;
  font-size: 30px;
  color: black;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: yellow;
`;

export const HeaderSticky = () => {
  return (<Component>
    This is sticky header
  </Component>)
}