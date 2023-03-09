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
    background-color: #f1f3f6;
    border-radius: 6px;
    padding: 3rem;
    overflow-y: scroll;
    max-height: 698px;
  }
`;

export default AccountSettingsWrapper;
