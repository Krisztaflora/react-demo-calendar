import { actionTypes } from '../actions'

const initialState = {
    reminders: [],
    openedReminderModal: false,
    reminderDate: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.SHOW_REMINDER_MODAL:
            return {
                ...state,
                openedReminderModal: true,
                reminderDate: {
                    year: action.payload.year,
                    month: action.payload.month,
                    day: action.payload.day,
                }
            }

        case actionTypes.HIDE_REMINDER_MODAL:
            return {
                ...state,
                openedReminderModal: false,
                reminderDate: {},
            }

        default:
            return state
    }
}

export const isOpenedReminderModal = (state) => state.openedReminderModal
export const getReminderDate = (state) => state.reminderDate
