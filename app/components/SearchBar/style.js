import styled from 'styled-components'

export const SearchSection = styled.div`
   width: 100%;
   padding: 42px 0;

   border-radius: 10px;

   background-image: url('/images/bg.jpg');
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   align-items: center;
   justify-content: center;

   form {
      width: 790px;

      @media screen and (max-width: 576px) {
         width: 90%;
      }

      div.form-control {
         width: 100%;
         position: relative;

         input {
            width: 100%;
            background: #ffffff;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            padding: 15px 40px;

            font-size: 13px;
            font-family: 'Poppins', sans-serif;
            line-height: 17px;

            border: none;
            outline: none;

            @media screen and (max-width: 576px) {
               font-size: 11px;
            }

            &::placeholder {
               color: #b9bdcf;
            }
         }

         button {
            border: none;
            outline: none;
            font-size: 'Poppins', sans-serif;

            padding: 12px 40px;
            background-color: #1e86ff;
            border-radius: 4px;
            color: #fff;

            font-size: 14px;
            line-height: 18px;
            cursor: pointer;

            transition: all 0.3s ease;

            position: absolute;
            right: 2.7px;
            top: 2.7px;

            @media screen and (max-width: 576px) {
               padding: 9px 20px;
               top: 50%;
               right: 5px;
               transform: translateY(-50%);
            }

            &:hover {
               background-color: #4798f5;
            }
         }

         i {
            position: absolute;
            left: 15px;
            top: 17.5px;

            color: #b9bdcf;
            font-size: 12px;
         }
      }
   }
`
