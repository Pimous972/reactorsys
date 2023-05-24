import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGThumbnail } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'

function MemeThumbnail(props) {

  const memes = useSelector(store => store.listes.memes);
  const imgs = useSelector(store => store.listes.images);

  return (
    <MemeSVGThumbnail memes={memes} images={imgs} basePath=''/> 
  )
}

MemeThumbnail.propTypes = {

}

export default MemeThumbnail