import styled from "styled-components";

export const Wrapper = styled.div`
   height: 100%;
   padding: 0;
   max-width: 444px;
   min-height: 100vh;
   border-left: 1px solid #f1f1f1;
   border-right: 1px solid #f1f1f1;
   padding-bottom: 56px;
   background-color: #FAFAFA;
   margin-left: auto;
   margin-right: auto;

   @media (max-width: 767px) {
      .card-floating {
         width: 85.333333%;   
      }
   }

   @media (min-width: 768px) and (max-width: 991px) {
      .card-floating {
         width: 87.333333%;   
      }
   }

   @media (min-width: 1200px) {
      .card-floating {
         width: 87.333333%;   
      }
   }
   
`;
