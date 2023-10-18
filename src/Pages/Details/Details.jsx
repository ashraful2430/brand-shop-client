
import PropTypes from 'prop-types';

const Details = ({ data }) => {
    console.log(data);
    const { id, name, category, image } = data;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

Details.propTypes = {
    data: PropTypes.object
};

export default Details;