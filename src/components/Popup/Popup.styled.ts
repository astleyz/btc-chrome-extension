import styled from "styled-components";

export const PopupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 0 0;
  margin: 0;
  width: 200px;
  height: 100px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(56, 56, 56, 0.2);
  position: relative;
  transition: all 900ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

  h1 {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0 !important;
    text-transform: capitalize;
    font-weight: 200 !important;
    transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition-delay: 900ms;
  }

  .close {
    position: absolute;
    font-size: 22px;
    top: 5px;
    right: 15px;
    font-weight: lighter;
    cursor: pointer;
    transition: 0.5s;
    user-select: none;
  }
`;
