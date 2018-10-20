import { actionTypes } from '../actions'

const initialState = {
    reminders: [],
    reminderCounter: 0,
    openedReminderModal: false,
    reminderDate: {},
    changedReminders: 0,
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
                    id: state.reminderCounter,
                    datetime: new Date(action.payload.year.toString() + '.' + (action.payload.month + 1).toString() + '.' + action.payload.day.toString() + ' ' + action.payload.time).getTime(),
                    year: action.payload.year,
                    month: action.payload.month,
                    day: action.payload.day,
                    text: action.payload.text,
                    color: action.payload.color,
                }),
                reminderCounter: ++state.reminderCounter,
                changedReminders: ++state.changedReminders,
            }

        case actionTypes.DELETE_REMINDER:
            const reminderIndex = state.reminders.findIndex((element) => element.id === action.payload.id)
            state.reminders.splice(reminderIndex, 1)
            return {
                ...state,
                reminders: state.reminders,
                changedReminders: ++state.changedReminders,
            }

        default:
            return state
    }
}

export const isOpenedReminderModal = (state) => state.openedReminderModal
export const getReminderDate = (state) => state.reminderDate
export const getReminders = (state) => state.reminders
export const getChangedReminders = (state) => state.changedReminders
