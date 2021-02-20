import styled from "styled-components";

export const Container = styled.div`
  z-index: 99999999;
  width: 300px;
  height: 310px;
  position: fixed;
  right: 5px;
  top: 33%;
  box-sizing: border-box;

  .toggleButton {
    z-index: 99999991;
    position: absolute;
    top: 50px;
    left: -45px;
    outline: none;
    width: 45px;
    height: 45px;
    padding-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b9b3c4;
    border-top-left-radius: 12%;
    border-bottom-left-radius: 12%;
    cursor: pointer;
    outline: none;
    border: none;
    transform: scale(1);

    :hover {
      background-color: #c2bccf;
      box-shadow: 0px 1px 14px 0 rgba(0, 0, 0, 0.15);
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      transform: scale(1.05);
    }
    :active {
      background-color: #aba7b5;
    }
  }

  .modal {
    position: relative;
    z-index: 99999992;
    background-color: #b9b3c4;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: #232754;

    h1 {
      font-weight: normal;
      font-size: 27px;
      margin: 30px 0 0 0;
      width: 100%;
      text-align: center;
      user-select: none;
    }

    .inputWrapper {
      width: 100%;
      margin: 35px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        height: 50px;
        width: 65px;
        margin: 0;
        background-color: #f5f5f5;
        font-size: 35px;
        color: #968fa1;
        display: flex;
        justify-content: center;
        align-items: center;

        :focus,
        :active {
          outline: none;
          color: black;
        }
      }

      label {
        margin: 10px 0 0 0;
        user-select: none;
      }
    }

    .buttonsWrapper {
      margin: 85px 0 0 0;
      width: 100%;
      display: flex;
      justify-content: space-between;

      button {
        display: inline-block;
        background-image: linear-gradient(15deg, #232754, #434a99);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        color: #fff;
        padding: 10px 0;
        border-radius: 10px;
        flex-grow: 1;
        text-align: center;
        cursor: pointer;
        user-select: none;
        outline: none;
        border: none;

        :hover:not(:disabled) {
          background-image: linear-gradient(15deg, #012180, #203b7d);
          box-shadow: 1px 5px 14px 0 rgba(0, 0, 0, 0.4);
          transition: box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        :active:not(:disabled) {
          background-image: none;
          background-color: #1f234d;
        }
        :disabled {
          opacity: 0.5;
        }
      }

      button:last-child {
        margin-left: 15px;
      }
    }
  }
`;

export const imgStyles = {
  height: "30px",
  width: "30px",
};

export const containerOpen = {
  transform: "translateX(0)",
  transition: "1s transform",
};

export const containerClose = {
  transform: "translateX(300px)",
  transition: "1s transform",
};

export const modalOpen = {
  opacity: "1",
  transition: "opacity 0.1s ease-in",
};

export const modalClose = {
  opacity: "0",
  transition: "opacity 0.7s ease-in 0.7s",
};

export const buttonRadius = {
  borderRadius: "12%",
  transition: "border-radius 0.1s ease-in 0.7s",
};
