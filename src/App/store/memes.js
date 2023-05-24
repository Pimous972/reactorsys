import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { saveCurrent } from './current';

const initialState = {
    images:[],
    memes:[],
}

const memes = createSlice({
  name: 'listes',
  initialState,
  reducers: {
    addImage:(state,action)=>{
        state.images.push(action.payload);
    },
    addImages:(state,action)=>{
        state.images.push(...action.payload);
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(
        saveCurrent.fulfilled,(state,action)=>{
            const pos = state.memes.findIndex(meme=>meme.id === action.payload.id)
            if (pos >=0){
                //existant dans la liste
                state.memes[pos] = action.payload;
            }
            else
            {
                //absent de la liste
                state.memes.push(action.payload);
            }
        }
    )
    
    builder.addCase(
        fetchAllListesValues.fulfilled,
        (state,action)=>{
            state.images.push(...action.payload.images);
            state.memes.push(...action.payload.memes);
        }
    );

    builder.addDefaultCase((state,action)=>{console.log(state,action)});

  }

});

export const fetchAllListesValues = createAsyncThunk(
    'listes/fetchAll',
    async()=>{
        const promiseImg = await fetch(`http://localhost:5689/images`);             
        const promiseMeme = await fetch(`http://localhost:5689/memes`);     
        const promiseALL = await Promise.all([promiseImg,promiseMeme]);
        const imgs = await promiseALL[0].json();
        const memes = await promiseALL[1].json();        

        return {images:imgs,memes:memes};    
    }
);

export const {addImage,addImages} = memes.actions

export default memes.reducer