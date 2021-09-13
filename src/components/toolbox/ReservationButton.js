import React from 'react';
import Button from '@material-ui/core/Button';

const ReservationButton = ({onClick, name, color}) => {
    return (
        <Button variant="contained" color={color} onClick={onClick}>
            {name}
        </Button>
    )
}

export default ReservationButton;