import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
    flag: boolean,
    company : string,
    address : string,
    name: string,
    email: string,
    link: string,
    size: string
}

const initialState: InitialStateType = {
    flag: false,
    company : "",
    address : "",
    name: "",
    email: "",
    link: "",
    size: ""    
}

const singleSlice = createSlice({
    name: 'single',
    initialState,
    reducers: {
        setSingle: (state, action) => {
            state.flag = action.payload.flag;
            state.company = action.payload.company;
            state.address = action.payload.address;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.link = action.payload.link;
            state.size = action.payload.size;
        }

    }
});

export const singleReducer = singleSlice.reducer;
export const singleActions = singleSlice.actions;