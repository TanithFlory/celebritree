import styled from "styled-components";

const AccountSettingsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 8rem 3rem;
  gap: 1.5rem;
  & > div:first-child {
    height: 795px;
  }
  & > div:not(:first-child) {
    background-color: var(--white-color);
    border-radius: 6px;
    padding: 3rem;
    overflow-y: scroll;
    max-height: 698px;
  }
  @media screen and (max-width: 912px) {
    grid-template-columns:1fr;
    margin: 3rem 1rem;
    & > div:first-child {
      display:none;
    }
    &>div:nth-child(2){
      align-items:center;
      padding: 30px 5px;
      form{
        justify-content:center;
        flex-wrap:wrap;
        input{
          width:auto;
        }
      }
    }
  }
`;

export default AccountSettingsWrapper;
