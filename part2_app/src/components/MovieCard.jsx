import React from "react";
import PropTypes from "prop-types";

export default function MovieCard(props) {
    return(
        <div className="MovieCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

MovieCard.defaultProps = {
    title: 'Default title',
    description: 'Default description'
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
