import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState = emptyMeme

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeMeme : (state,action)=>{
        Object.assign(state, action.payload);
    },
    clearMeme:(state,action)=>{
        Object.assign(state,emptyMeme);
    }
    
  }
});

export const saveCurrent = createAsyncThunk(
  'current/save',
  async(meme) => {
    const promise = await fetch(
      `http://localhost:5689/meme${undefined !== meme.id ? '/' + meme.id : ''}` ,
      {
        method : undefined !== meme.id ? 'PUT': 'POST',
        headers: {
          "Content-Type" : "Application/Json"
        },
        body : JSON.stringify(meme)
      }
    )
    return await promise.json();
  }
);

export const {changeMeme, clearMeme} = current.actions

export default current.reducer