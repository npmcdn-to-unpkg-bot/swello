/*eslint-disable */
const React = require('react');
const IconBase = require('react-icon-base');

export default class PointedArrow extends React.Component {
    render() {
      return (
        <IconBase viewBox="0 0 100 100" {...this.props}>
            <path d="M35.9,82c0.3-0.3,0.4-0.7,0.4-1.1c0,0,0,0,0-0.1V66l51.4-51.4l2.6,2.6c0,0,0,0,0,0c0.6,0.6,1.5,0.6,2.1,0  c0.2-0.2,0.4-0.5,0.4-0.8l4.4-11.7c0.2-0.6,0.1-1.2-0.3-1.6s-1-0.6-1.6-0.3L83.5,7.3c-0.5,0.2-0.8,0.6-0.9,1.1c-0.1,0.5,0,1,0.4,1.4  l2.7,2.7L34.3,63.8l-14.9,0c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.2-0.5,0.3L3.4,79.1c-0.1,0.1-0.1,0.2-0.2,0.2  c-0.4,0.3-0.6,0.7-0.6,1.2c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.6,0.4,1.1,0.4l14.1,0v14c0,0.4,0.2,0.8,0.4,1.1s0.6,0.4,1.1,0.4  c0.4,0,0.7-0.2,1-0.4c0.1-0.1,0.3-0.2,0.4-0.3L35.9,82z M26.5,87.2V75.9l2-2v11.3L26.5,87.2z M24.4,73.7l-11.3,0l2-2l11.3,0  L24.4,73.7z M10.1,76.7l11.3,0L19,79.1l-11.3,0L10.1,76.7z M23.5,78.9v11.3l-2.3,2.3V81.2L23.5,78.9z M33.4,80.3l-2,2V70.9l2-2V80.3  z M29.3,68.7l-11.3,0l2-2l11.3,0L29.3,68.7z"/>
        </IconBase>
      );
    }
}
