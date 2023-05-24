import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from "react-redux";


function MemeViewer(props) {
    
    const meme = useSelector(storeState => storeState.current);
    const image = useSelector(storeState => storeState.listes.images.find((img)=>img.id===meme.imageId))

    return (
        <MemeSVGViewer meme={meme} image={image} basePath='' />    
    )
}

MemeViewer.propTypes = {}

export default MemeViewer