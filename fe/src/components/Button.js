import styled from "styled-components";

// export default Button = ... breaks in parceljs
const Button = styled.button`
  display: block;
  border: none;
  border-radius: 3px;
  padding: 6px;
  background-color: #aaaaaa;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #dddddd;
  }
`;

export default Button;
