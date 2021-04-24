import styled from 'styled-components'

export const FilterWrapper = styled.section`
   margin-right: 45px;
   padding: 5px;

   @media screen and (max-width: 576px) {
      margin-bottom: 20px;
      width: 100%;
   }

   div.form-control {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      &.mb-15 {
         margin-bottom: 15px;
      }

      input[type='checkbox'],
      input[type='radio'] {
         margin-right: 12px;
         width: 18px;
         height: 18px;
      }

      label {
         font-size: 14px;
         line-height: 21px;
         color: #334680;
         font-weight: 600;
      }
   }

   div.input-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;
      margin-bottom: 25px;

      i {
         color: #b9bdcf;
         position: absolute;
         bottom: 16px;
         left: 15px;
      }

      label {
         font-size: 14px;
         line-height: 21px;
         text-transform: uppercase;
         color: #b9bdcf;
         font-weight: 600;
         margin-bottom: 15px;
      }

      input[type='text'] {
         border: none;
         outline: none;
         background-color: #fff;
         padding: 17px 15px 17px 40px;
         box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
         border-radius: 4px;
         width: 379px;

         font-family: 'Poppins', sans-serif;
         font-size: 12px;
         line-height: 14px;

         @media screen and (max-width: 576px) {
            width: 100%;
         }

         &::placeholder {
            color: #b9bdcf;
         }
      }
   }

   button.reset-btn {
      padding: 5px 10px;
      color: #fff;
      background-color: #1e86ff;
      border: none;
      border-radius: 4px;
      font-family: 'Poppins', sans-serif;
      margin-top: 10px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
         border: 1px solid #1e86ff;
         background-color: #fff;
         color: #1e86ff;
      }
   }
`
