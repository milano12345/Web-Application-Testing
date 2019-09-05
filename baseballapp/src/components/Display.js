import React from 'react';

const Display = (props) => {

    return (
        <div>
        <div>Strikes: {props.data.strikes}</div>
        <div>Balls: {props.data.balls}</div>
        <div>Fowls: {props.data.fowls}</div>
        <div>Hits: {props.data.hits}</div>
        </div>
    )

}

export default Display;