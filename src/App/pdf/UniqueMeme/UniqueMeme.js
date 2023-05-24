import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { Document, Page, View, Text } from "@react-pdf/renderer";

const styleSheet = StyleSheet.create({
    titre:{
        textAlign : 'center',
        fontSize : '20pt'
    }
})

export default function UniqueMeme(props) {

    const meme =  useSelector(storeState => storeState.current);
    const img = useSelector(storeState => storeState.liste.images.find(i => i.id === meme.imageId))
    return (
        <Document 
            title={'meme'}
            author='pimous'
            creator='pimous'
            language='FR-fr'
            pdfVersion='1.7'
        >
            <Page orientation='landscape' size={'A4'}>
                <View debug:true >
                    <Text color='tomato' style={styleSheet.titre}>{meme.titre}</Text>
                </View>
            </Page>
        </Document>
    )
}

UniqueMeme.propTypes = {
    id : PropTypes.number.isRequired
}
