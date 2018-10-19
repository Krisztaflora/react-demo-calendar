export const actionTypes = {
    SHOW_REMINDER_MODAL: 'SHOW_REMINDER_MODAL',
    HIDE_REMINDER_MODAL: 'HIDE_REMINDER_MODAL',
    ADD_REMINDER: 'ADD_REMINDER',
}

export const showReminderModal = (year, month, day) => {
    return {
        type: actionTypes.SHOW_REMINDER_MODAL,
        payload: {
            year: year,
            month: month,
            day: day,
        }
    }
}

export const closeReminderModal = () => {
   return {
       type: actionTypes.HIDE_REMINDER_MODAL,
   }
}

export const addReminder = (year, month, day, time, text) => {
    return {
        type: actionTypes.ADD_REMINDER,
        payload: {
            year: year,
            month: month,
            day: day,
            time: time,
            text: text,
        }
    }
}
