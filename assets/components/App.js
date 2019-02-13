import React from 'react';
import { Provider } from 'react-redux';

import Circle from './Circle';
import Rect from './Rect';

export default class App extends React.Component {
    render() {
        const viewBox = '0 0 1394.54 1134.94';
        const stroke = '#000';
        const strokeWidth = 2;
        const fill = '#fff';

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} id="seating-chart" style={{width: '640px', height: '480px'}}>
                <Circle stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
                <Rect stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
            </svg>
        );
    }
}
