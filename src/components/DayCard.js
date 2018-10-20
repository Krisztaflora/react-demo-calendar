import React, { Component } from 'react'
import styles from './daycard.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showReminderModal } from '../actions'
import { getReminders } from '../reducers'

class DayCard extends Component {
    static propTypes = {
        date: PropTypes.shape({
            year: PropTypes.number,
            month: PropTypes.number,
            day: PropTypes.number,
        }).isRequired,
        showReminderModal: PropTypes.func.isRequired,
        reminders: PropTypes.array.isRequired,
    }

    render() {
        const { date, showReminderModal, reminders } = this.props
        const remindersOfDay = reminders.filter(reminder => reminder.year === date.year && reminder.month === date.month && reminder.day === date.day)

        return (
            <div className={styles.daycard} onClick={() => showReminderModal(date.year, date.month, date.day)}>
                <span className={ remindersOfDay.length > 0 ? styles.importantDay : styles.simpleDay }>{ date.day }</span>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    showReminderModal,
})

const mapStateToProps = (state) => ({
    reminders: getReminders(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(DayCard)
