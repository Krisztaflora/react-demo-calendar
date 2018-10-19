export const actionTypes = {
    SHOW_REMINDER_MODAL: 'SHOW_REMINDER_MODAL',
    HIDE_REMINDER_MODAL: 'HIDE_REMINDER_MODAL',
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
