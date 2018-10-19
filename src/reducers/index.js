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

        case actionTypes.ADD_REMINDER:
            return {
                ...state,
                reminders: state.reminders.concat({
                    datetime: new Date(action.payload.year.toString() + '.' + (action.payload.month + 1).toString() + '.' + action.payload.day.toString() + ' ' + action.payload.time).getTime(),
                    text: action.payload.text,
                })
            }

        default:
            return state
    }
}

export const isOpenedReminderModal = (state) => state.openedReminderModal
export const getReminderDate = (state) => state.reminderDate
