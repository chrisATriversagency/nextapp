/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

class Modal extends PureComponent {
    static propTypes = {
        trigger: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    state = {
        show: false
    };

    showModal = () => {
        this.setState({
            show: true
        });
    }

    hideModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        const { trigger, children } = this.props;
        const { show } = this.state;

        return (
            <div>
                <button type="button" onClick={this.showModal}>
                    {trigger}
                </button>
                <div
                    css={css`
                        display: ${show ? 'block' : 'none'};
                    `}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;
