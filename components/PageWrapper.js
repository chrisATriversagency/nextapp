import styled from '@emotion/styled';

const PageWrapper = styled.div({
    display: 'Grid',
    gridTemplateColumns: '265px 1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `"sidebar header"
                        "sidebar content"
                        "sidebar footer"`,
    height: '100%',
});

export default PageWrapper;
