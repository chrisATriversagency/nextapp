/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import UserContext from '../context/UserContext';

const Div = styled.div`
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

class PageWrapper extends React.Component {
    state = {
        userName: 'Thomas Johnson',
        clinicIds: [4, 5],
        activeClinic: 4,
        path: 'improvement'
    };

    handleActiveClinic = (id) => this.setState(() => ({
        activeClinic: id
    }));

    render() {
        const {children} = this.props;

        return (
            <UserContext.Provider value={this.state}>
                <Div>{children}</Div>
            </UserContext.Provider>
        );
    }
}

export default PageWrapper;
