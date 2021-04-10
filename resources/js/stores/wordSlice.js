import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetch = createAsyncThunk(
    'word/fetch',
    async (args, thunkAPI) => {
        const response = await window.axios.post('/api/word/list', thunkAPI.getState().word)
            .then(function (response) {
                return response
            });

        try {
            thunkAPI.dispatch(setWordList(response.data))
        } catch (error) {
            console.log(error);
        }
    },
);

export const search = createAsyncThunk(
    'word/search',
    async (args, thunkAPI) => {
        const response = await window.axios.post('/api/word/same', thunkAPI.getState().word)
            .then(function (response) {
                return response
            });

        try {
            thunkAPI.dispatch(setData(response.data))
        } catch (error) {
            console.log(error);
        }
    },
);

export const wordSlice = createSlice({
    name: 'word',
    initialState: {
        data: null,
        language: 'english',
        wordList: [],
        word: ''
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
            state.word = '';
        },
        setWordList: (state, action) => {
            state.wordList = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setWord: (state, action) => {
            state.word = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { getWords, setLanguage, setWordList, setData, setWord } = wordSlice.actions
export const selectLanguage = state => state.word.language;
export const selectWordlist = state => state.word.wordList;
export const selectData = state => state.word.data;
export const selectWord = state => state.word.word;

export default wordSlice.reducer
