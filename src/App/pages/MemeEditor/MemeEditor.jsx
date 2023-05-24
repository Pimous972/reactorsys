import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme';

import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';
import MemeViewer from '../MemeViewer/MemeViewer';

function MemeEditor(props) {
  return (
    <>
        {/* <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id===meme.imageId)} basePath='' /> */}
        <MemeViewer />
        <StoreMemeForm />
    </>
  )
}

MemeEditor.propTypes = {
    id: PropTypes.number
}

export default MemeEditor
