import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


export const selectTopic = (state) => state.topics.topics

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {} 
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload
            state.topics[id] = ({
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            })
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
            console.log('kjører igjennom addQuizId')
        },
    }
})

export default topicsSlice.reducer
export const { addTopic, addQuizId }  = topicsSlice.actions
