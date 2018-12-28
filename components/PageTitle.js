import PropTypes from 'prop-types';

const PageTitle = props => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.copy}</p>
    </div>
);

PageTitle.propTypes =  {
    title: PropTypes.string,
    copy: PropTypes.string
}

export default PageTitle;
