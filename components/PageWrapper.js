/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import UserContext from '../context/UserContext';


class PageWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.updateActiveClinic = (id) => {
            this.setState(prevState => ({
                activeClinic: id
            }));
        }

        this.state = {
            userName: 'Thomas Johnson',
            clinicIds: [4, 5],
            activeClinic: 4,
            path: 'improvement',
            updateActiveClinic: this.updateActiveClinic
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <div
                    css={css`
                        display: grid;
                        grid-template-columns: 265px 1fr;
                        grid-template-rows: auto 1fr auto;
                        grid-template-areas: "sidebar header"
                                             "sidebar content"
                                             "sidebar footer";
                        height: 100%;
                    `}
                >
                    {this.props.children}
                </div>
            </UserContext.Provider>
        );
    }
}

export default PageWrapper;
