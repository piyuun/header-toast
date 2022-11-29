import styled from 'styled-components';

export const Component = styled.header < {top?: number} >`
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 1px 1px 4px 0 rgba(0, 0, 0, 0.12);
  top: 0
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: salmon;
  overscroll-behavior-y: contain;
`;

interface HeaderType {
  top?: number;
}
export const HeaderNonFix = ({top} :HeaderType) => {
  return (
  <Component top={top}>
    This is nonfixed header
  </Component>)
}