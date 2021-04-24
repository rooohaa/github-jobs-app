import styled from 'styled-components'
import { Container } from '../../sc/Container'

export const DetailsWrapper = styled.section`
   padding: 20px 0 60px 0;

   ${Container} {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      @media screen and (max-width: 576px) {
         flex-direction: column;
         align-items: flex-start;
      }
   }

   div.sidebar {
      width: 260px;
      overflow: hidden;

      @media screen and (max-width: 576px) {
         width: 100%;
         margin-bottom: 20px;
      }

      a,
      i {
         color: #1e86ff;
      }

      a {
         display: flex;
         align-items: center;
      }

      i {
         font-size: 20px;
         margin-right: 10px;
      }
   }

   div.apply {
      h4,
      p {
         font-size: 14px;
         line-height: 21px;
      }

      h4 {
         margin-top: 33px;
         margin-bottom: 16px;
         text-transform: uppercase;
         color: #b9bdcf;
         font-weight: 700;
      }

      p {
         color: #334680;
         font-weight: 600;
      }
   }

   div.main-info {
      padding: 0 10px;
      margin-left: 70px;
      width: 800px;

      @media screen and (max-width: 576px) {
         width: 100%;
         margin-left: 0;
         padding: 0;
      }

      div.head {
         display: flex;
         align-items: center;
         margin-bottom: 10px;

         @media screen and (max-width: 576px) {
            flex-direction: column;
            align-items: flex-start;
         }

         h2 {
            font-size: 24px;
            line-height: 28px;
            color: #334680;
            margin-right: 18px;

            @media screen and (max-width: 576px) {
               margin-right: 0;
               margin-bottom: 10px;
            }
         }

         & > div {
            width: 63px;
            height: 26px;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #fff;
            border: 1px solid #334680;
            border-radius: 4px;
            color: #334680;

            font-size: 12px;
            line-height: 14px;
            font-weight: 700;
         }
      }

      span.created {
         font-size: 12px;
         line-height: 14px;
         color: #b7bcce;
      }

      div.logo {
         display: flex;
         align-items: center;
         margin-top: 32px;
         margin-bottom: 32px;

         img {
            width: 52px;
            height: 52px;
            object-fit: cover;
            margin-right: 12px;
         }

         div.location {
            & > h4 {
               font-size: 18px;
               line-height: 21px;
               color: #334680;
               margin-bottom: 6px;
            }

            & > span {
               font-size: 12px;
               line-height: 14px;
               color: #b9bdcf;
            }
         }
      }
   }

   div.text {
      p,
      strong,
      li {
         color: #334680;
         font-size: 16px;
         line-height: 24px;
      }
   }
`
