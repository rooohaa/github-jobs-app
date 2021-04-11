import styled from 'styled-components';

export const Nav = styled.nav`
   ul {
      display: flex;
      align-items: center;

      li {
         margin-right: 12px;

         &:last-child {
            margin-right: 0;
         }
      }
   }

   button.page-btn {
      width: 36px;
      height: 36px;
      outline: none;

      background-color: inherit;
      border-radius: 4px;
      border: 1px solid #b7bcce;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: all 0.3s ease;

      font-size: 12px;
      font-family: 'Poppins', sans-serif;
      line-height: 14px;
      color: #b9bdcf;

      &.active {
         background-color: #1e86ff;
         border: none;
         color: #fff;

         &:hover {
            border: unset;
            color: #fff;
         }
      }

      &:hover {
         border: 1px solid #1e86ff;
         color: #1e86ff;
      }
   }
`;
