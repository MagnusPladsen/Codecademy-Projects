import { createSlice } from "@reduxjs/toolkit";

export const selectCards = state => state.cards.cards

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        card: {}
    },
    addCard: (state, action) => {
        const { id, front, back } = action.payload
        state.cards[id] = {
            id: id,
            front: front,
            back: back,
        }
    }
})

export default cardsSlice.reducer
export const { addCard } = cardsSlice.actions