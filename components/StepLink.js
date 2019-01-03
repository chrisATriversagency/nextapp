import PropTypes from 'prop-types';
import Link from 'next/link'

const StepLink = props => (
    <li>
        <article>
            <Link href={`/step?title=${props.title}`}>
                <a>
                    <div>
                        <div>
                            <img src={props.icon} alt="" />
                        </div>
                        <h2>{props.title}</h2>
                        <p>
                            {props.copy}
                        </p>
                    </div>
                    <div>
                        {props.number}
                    </div>
                </a>
            </Link>
        </article>
    </li>
)

StepLink.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    copy: PropTypes.string,
    number: PropTypes.string
}

export default StepLink
