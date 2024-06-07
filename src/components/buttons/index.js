import React from 'react';
import PropTypes from 'prop-types';

import { Container } from "./styles";

function Button({ children, style }) {
    return(
        <Container>
            <button style={style}>{children}</button>
        </Container>
    )
};


export default Button;

Button.propTypes = {
    children: PropTypes.string
};

Button.propTypes = {
    style: PropTypes.objectOf(PropTypes.string)
};