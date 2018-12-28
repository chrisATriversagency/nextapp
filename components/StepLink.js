import PropTypes from 'prop-type';
import Link from 'next/link'

const StepLink = props => (
    <li>
        <article>
            <Link href={`/step?title=${props.step.title}`}>
                <a>
                    <div>
                        <div>
                            <img src={props.step.icon} alt="" />
                        </div>
                        <h2>{props.step.title}</h2>
                        <p>
                            {props.step.copy}
                        </p>
                    </div>
                    <div>
                        {props.step.number}
                    </div>
                </a>
            </Link>
        </article>
    </li>
)

StepLink.propTypes = {
    step: PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        copy: PropTypes.string,
        number: PropTypes.string,
    })
}

export default StepLink
