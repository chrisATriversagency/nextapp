/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { breakpoints, colors } from '../../utils/ThemeUtils';

const TwoChoicesDivider = (props) => (
    <div
        css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 0;

            &::before {
                content: '';
                display: block;
                position: absolute;
                border-top: 1px solid ${colors.borderGrey};
                width: 100%;
                left: 0;

                @media (min-width: ${breakpoints.md}) {
                    width: auto;
                    border-top: 0;
                    border-right: 1px solid ${colors.borderGrey};
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                }
            }

            @media (min-width: ${breakpoints.md}) {
                padding: 0 20px;
            }

            @media (min-width: ${breakpoints.lg}) {
                padding: 0 30px;
            }
        `}
    >
        <span
            css={css`
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 700;
                background-color: ${colors.white};
                position: relative;
                padding: 0 10px;

                @media (min-width: ${breakpoints.md}) {
                    padding: 10px 0;
                }
            `}
        >Or</span>
    </div>

)

export default TwoChoicesDivider;
