import React from 'react';
import MdMyLocation from '../common/svg/my-location';

const GeoLocate = (props) =>
  <button
    onClick={() => props.onClick() }
    data-for="headerTip"
    data-tip="Geolocate Me"
    data-place="left"
    style={{
      zIndex: 999,
      display: 'block',
      bottom: props.bottom,
      right: props.right,
      position: 'absolute',
      width: 60,
      height: 40
    }}
    className={props.css}
  >
    <MdMyLocation width="20" height="20"/>
  </button>;

export default GeoLocate;
