import React from 'react';
import createEdit from './edit';
import { Image } from '../components';
export default createEdit(function (v) { return React.createElement(Image, { value: v[0] || {
        url: 'https://lorempixel.com/1000/300/cats/',
        width: 1000,
        height: 300,
    } }); });
//# sourceMappingURL=image-edit.js.map