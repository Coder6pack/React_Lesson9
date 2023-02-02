import styled, { css } from "styled-components";
export const CommonButton = styled.button`
  ${(props) =>
    props.primary
      ? css`
          background-color: yellow;
          font-size: 30px;
          color: green;
        `
      : css`
          background-color: pink;
          font-size: 15px;
          color: blue;
        `}
`;

export const CommonInput = styled.input`
  background-color: gray;
  color: yellow;
  border: pink;
`;
