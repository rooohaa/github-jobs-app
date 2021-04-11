import styled from 'styled-components';

export const CardWrapper = styled.div`
   width: 100%;
   background-color: #fff;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
   border-radius: 4px;

   padding: 14px;
   margin-bottom: 32px;

   display: flex;
   justify-content: space-between;
   align-items: flex-end;

   div.wrap {
      display: flex;
      align-items: center;
      padding: 4px;
      max-width: 490px;

      img {
         width: 90px;
         height: 90px;
         border-radius: 4px;
         object-fit: cover;

         user-select: none;
         pointer-events: none;
      }

      div.info {
         margin-left: 18px;
         h5 {
            font-size: 12px;
            line-height: 14px;
            font-weight: 700;
            color: #334680;
            margin-bottom: 8px;
         }

         span {
            font-size: 16px;
            line-height: 21px;
            color: #334680;

            display: block;
            margin-bottom: 12px;
         }

         div.type {
            width: 63px;
            height: 26px;

            border: 1px solid #334680;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 11px;
            line-height: 14px;
            font-weight: 700;

            color: #334680;
            background-color: #fff;
            border-radius: 4px;
         }
      }
   }

   div.meta {
      display: flex;
      align-items: center;

      & > div {
         margin-right: 25px;

         display: flex;
         align-items: flex-start;

         &:last-child {
            margin-right: 0;
         }

         i {
            margin-right: 8px;
            color: #b9bdcf;
         }

         span {
            font-size: 12px;
            line-height: 14px;
            font-weight: 500;
            color: #b9bdcf;
         }
      }
   }
`;
