import React from 'react';

import {PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE} from '../../config/constrants';


const Slider = (props)  => {
  return (
    <>
  <img src={PUBLIC_IMAGE_FOLDER + 'banners/dns-server.png'} width="500px" height="400px" />
  </>
  )
}

Slider.propTypes = {
  
  //value: PropTypes.string.isRequired,
}

export default Slider;