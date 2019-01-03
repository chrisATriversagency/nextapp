/** @jsx jsx */
import { jsx, css } from '@emotion/core';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({
            show: true
        })
    }

    hideModal() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.showModal}>
                    {this.props.trigger}
                </div>
                <div
                    css={css`
                        display: ${this.state.show ? 'block' : 'none'};
                    `}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;
