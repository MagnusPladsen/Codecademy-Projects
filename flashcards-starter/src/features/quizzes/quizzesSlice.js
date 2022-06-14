import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/topicsSlice"

export const selectQuiz = state => state.quizzes.quizzes

export const addQuizAddQuizId = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId( { quizId: quizId, topicId: topicId } ));
    }
};


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialstate: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardId} = action.payload
            state.quizzes[id] = ({
                id: id,
                name: name,
                topicId: topicId,
                cardId, cardId
            })
        },
    }
})

export default quizzesSlice.reducer
export const { addQuiz } = quizzesSlice.actions