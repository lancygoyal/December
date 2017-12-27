import React from 'react';
import PropTypes from 'prop-types';
import ReactLoader from 'react-loaders';

const Loader = ({ loading }) => {
  return (
    <div>
      <div
        style={{
          display: 'block',
          fontSize: '0',
          position: 'fixed',
          zIndex: '9999',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {loading && <ReactLoader type="ball-clip-rotate-multiple" active />}
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool
};

Loader.defaultProps = {
  loading: true
};

export default Loader;

/*
.app_Overley {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.5);
    /*overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;*/
/*-webkit-filter: blur(1px);
    filter: blur(1px);
    -moz-filter: blur(1px);
    -o-filter: blur(1px);
    -ms-filter: blur(1px);*/
// }
