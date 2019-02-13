import React from 'react';

import withHover from './withHover';

const Circle = ({stroke, strokeWidth, fill, hovering, enter, leave}) => {
    const cx = 200;
    const cy = 250;
    const r = 200;

    return (
        <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onMouseEnter={enter} onMouseLeave={leave} />
    );
}

export default withHover(Circle);
