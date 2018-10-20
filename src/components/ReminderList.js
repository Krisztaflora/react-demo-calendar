import React, { Component } from 'react'
import styles from './reminderlist.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getReminders, getChangedReminders } from '../reducers'
import { deleteReminder } from '../actions'

class ReminderList extends Component {
    static propTypes = {
        reminders: PropTypes.array.isRequired,
    }

    render() {
        const { reminders, deleteReminder, changedReminders } = this.props
        let sortedReminders = reminders
        sortedReminders.sort((a, b) => a.datetime - b.datetime)

        return (
            <div className={styles.reminders}>
                <h2>Reminders</h2>
                <table key={changedReminders}>
                    <tbody>
                        {sortedReminders.map((reminder, index) =>
                            <tr key={index}>
                                <td className={ styles.reminderData } style={{color: reminder.color}}>{ new Date(reminder.datetime).toLocaleString() }</td>
                                <td className={ styles.reminderData } style={{color: reminder.color}}>{ reminder.text }</td>
                                <td><button onClick={() => deleteReminder(reminder.id)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reminders: getReminders(state),
    changedReminders: getChangedReminders(state),
})

const mapDispatchToProps = ({
    deleteReminder,
})

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList)
