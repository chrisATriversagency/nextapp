import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = (props) => (
    <article>
        <Link href={props.info.link}>
            <a>
                <div>
                    <div>
                        <img src={props.info.icon} />
                    </div>
                    <h2>{props.info.title}</h2>
                    <p>
                        {props.info.copy}
                    </p>
                </div>
                <div>
                    <button type="button" name="button">{props.info.buttonText}</button>
                </div>
            </a>
        </Link>
    </article>
);

Card.propTypes = {
    info: PropTypes.shape({
        link: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        copy: PropTypes.string,
        buttonText: PropTypes.string,
    })
}

export default Card;