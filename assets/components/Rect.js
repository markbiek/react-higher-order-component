import React from 'react';

import withHover from './withHover';

const Rect = ({stroke, strokeWidth, fill, hovering, enter, leave}) => {
    const width = 300;
    const height = 300;
    const x = 100;
    const y = 500;

    return (
        <rect x={x} y={y} width={width} height={height} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onMouseEnter={enter} onMouseLeave={leave} />
    );
}

export default withHover(Rect);
