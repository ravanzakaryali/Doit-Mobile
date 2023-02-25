import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserListType } from './../../utilities/types';

export interface InitialStateMemeberType {
    data: UserListType[],
}



const initialState: InitialStateMemeberType = {
    data: [
        
    ]
}


const memberSlice = createSlice({
    initialState: initialState,
    name: 'memberSlice',
    reducers: {
        remove: (state, action: PayloadAction<UserListType>) => {
            state.data = state.data .filter(m => m.id !== action.payload.id);
        },
        add: (state, action: PayloadAction<UserListType>) => {
            state.data .push(action.payload);
        },
    }
});

export default memberSlice.reducer;


export const { add, remove } = memberSlice.actions;

