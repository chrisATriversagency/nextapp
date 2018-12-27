import Link from 'next/link'

const StepLink = (props) => (
    <li>
        <article className="step step--">
            <Link href={`/step?title=${props.step.title}`}>
                <a className="step__link reset-link">
                    <div className="step__content">
                        <div className="step__icon-wrapper">
                            <img className="step__icon" src={props.step.icon} alt="" />
                        </div>
                        <h2 className="step__title h4">{props.step.title}</h2>
                        <p className="step__copy">
                            {props.step.copy}
                        </p>
                    </div>
                    <div className="step__number">
                        {props.step.number}
                    </div>
                </a>
            </Link>
        </article>
    </li>
    )

    export default StepLink
