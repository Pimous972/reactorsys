import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';
import Form from "react-bootstrap/Form";

const initialState = {};
/**
 * memeForm component
 * @param {any} props 
 * @returns React.Component MemeForm render
 */
const MemeForm = (props) => {
  


  useEffect(() => {
    console.log('MemeForm mounted');
  }, [])
   

  
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <Form>
        <Form.Label htmlFor="titre"><h1>Titre</h1></Form.Label>
        <br />
        <Form.Control name="titre" id="titre" value={props.meme.titre} onChange={evt=>{
          props.onMemeChange({...props.meme,titre:evt.target.value})
        }} />
        <hr />
        <label htmlFor="image"><h2>Image</h2></label>
        <br />
        <Form.Select name="image" id="image" value={props.meme.imageId} onChange={evt=>{
          props.onMemeChange({...props.meme, imageId:Number(evt.target.value)})
        }}>
          <option value="-1">No image</option>
          {
            props.images.map((img,i)=> <option key={`select-img-${i}`} value={img.id}>{img.titre}</option>)
          }
        </Form.Select>
        <hr />
        <label htmlFor="text"><h2>texte</h2></label>
        <br />
        <Form.Control name="text" id="text" type="text"  value={props.meme.text} onChange={evt=>{
          props.onMemeChange({...props.meme,text:evt.target.value
          })
        }}
        />
        <br />
        <label htmlFor="x"><h2 style={{display:'inline'}}>x :</h2>
        </label>
        <Form.Control className={styles.smallNumber} name="x" id="x" type="number"  value={props.meme.x} onChange={evt=>{
          props.onMemeChange({...props.meme,x:Number(evt.target.value)
          })
        }}/>
        <label htmlFor="y"><h2 style={{display:'inline'}}>y :</h2></label>
        <Form.Control className={styles.smallNumber} name="y" id="y" type="number" value={props.meme.y}  onChange={evt=>{
          props.onMemeChange({...props.meme,y:Number(evt.target.value)
          })
        }}/>
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color"><h2 style={{display:'inline'}}>color :</h2></label>
        <Form.Control name="color" id="color" type="color" value={props.meme.color}  onChange={evt=>{
          props.onMemeChange({...props.meme,color:evt.target.value
          })
        }}/>
        <br />
        <label htmlFor="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
        <Form.Control className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0"  value={props.meme.fontSize} 
        onChange={evt=>{
          props.onMemeChange({...props.meme,fontSize:Number(evt.target.value)
          })
        }}
        />px
        <br />
        <label htmlFor="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
        <Form.Control className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value={props.meme.fontWeight} onChange={evt=>{
          props.onMemeChange({...props.meme,fontWeight:evt.target.value
          })
        }}/>
        <br />
        <input name="underline" id="underline" type="checkbox" checked={props.meme.underline} 
         onChange={evt=>{
          props.onMemeChange({...props.meme,underline:(evt.target.checked)
          })
        }}
        
        />&nbsp;
        <label htmlFor="underline"><h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;
        
        <label htmlFor="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;
        <input name="italic" id="italic" type="checkbox" checked={props.meme.italic} onChange={evt=>{
          props.onMemeChange({...props.meme,underline:(evt.target.checked)
          })
        }}/>
        <hr />
        <br />
        <Button bgColor="gray" type='reset' title="Annuler" >Annuler</Button>
        <Button bgColor="red"   type='submit' title="Valider">Valider</Button>
      </Form>
    </div>
  )
};

MemeForm.propTypes = {
  meme:PropTypes.shape({
    id: PropTypes.number,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    underline: PropTypes.bool.isRequired,
    italic: PropTypes.bool.isRequired,
    imageId: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    frameSizeX: PropTypes.number.isRequired,
    frameSizeY: PropTypes.number.isRequired,
  }).isRequired,
  onMemeChange: PropTypes.func.isRequired,
  images:PropTypes.array.isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;