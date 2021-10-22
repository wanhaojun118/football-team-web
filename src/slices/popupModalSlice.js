import { createSlice } from "@reduxjs/toolkit";

const popupModalSlice = createSlice({
    name: "popupModal",
    initialState: {
        show: false,
        title: undefined,
        message: undefined
    },
    reducers: {
        showPopupModal: (state) => {
            state.show = true;
        },
        hidePopupModal: (state) => {
            state.show = false;
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    }
});

export const { showPopupModal, hidePopupModal, setTitle, 
    setMessage } = popupModalSlice.actions;

export default popupModalSlice.reducer;