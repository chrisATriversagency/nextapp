import styled from '@emotion/styled';

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 265px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "sidebar header"
        "sidebar content"
        "sidebar footer"
    ;
    height: 100%;
`;

export default PageWrapper;
