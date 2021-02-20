import styled from "styled-components";

export const FormBox = styled.div`
  margin: 25px 0 0 0;
  width: 100%;
  height: 100%;
  color: #232754;
  position: relative;

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .header {
      text-transform: uppercase;
      font-size: 23px;
      display: block;
      text-align: center;
      margin-bottom: 35px;
    }

    .input-container {
      position: relative;
      margin: 0 0 25px;
      width: 95%;

      > label {
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 16px;
        pointer-event: none;
        transition: all 0.2s ease-in-out;
        color: gray;
      }

      > input {
        border: 0;
        border-bottom: 1px solid #555;
        background: transparent;
        width: 100%;
        padding: 8px 0 5px 0;
        font-size: 16px;
        color: #0e828c;

        :focus {
          border: none;
          outline: none;
          border-bottom: 1px solid #25818f;
        }

        :focus ~ label {
          color: #25818f;
          top: -12px;
          font-size: 12px;
        }

        :not(:placeholder-shown) ~ label {
          top: -12px;
          font-size: 12px;
        }
      }
    }

    @keyframes sk-scaleout {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    .submit {
      position: relative;
      color: #fff;
      background-color: #191c3d;
      outline: none;
      border: 0;
      padding: 10px 20px;
      text-transform: uppercase;
      border-radius: 2px;
      cursor: pointer;
      margin: 20px 5px 0;
      width: 50%;
      border-radius: 10px;

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

        ::after {
          content: "";
          position: absolute;
          top: 20%;
          left: 75%;
          width: 20px;
          height: 20px;
          background-color: #fff;
          border-radius: 100%;
          animation: sk-scaleout 1s infinite ease-in-out;
        }
      }
    }
  }

  .popupZone {
    transform: translateY(-220px) translateX(32px);
  }
`;
