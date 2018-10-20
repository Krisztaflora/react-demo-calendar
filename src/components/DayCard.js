import React, { Component } from 'react'
import styles from './daycard.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showReminderModal } from '../actions'
import { getReminders } from '../reducers'
import Popover from 'react-popover'

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

    constructor(props) {
        super(props)

        this.state = {
            popoverIsOpen: false
        }

        this.showPopover = this.showPopover.bind(this)
        this.hidePopover = this.hidePopover.bind(this)
    }

    showPopover(hasReminders) {
        this.setState({
            popoverIsOpen: hasReminders,
        })
    }

    hidePopover() {
        this.setState({
            popoverIsOpen: false,
        })
    }

    render() {
        const { date, showReminderModal, reminders } = this.props
        const remindersOfDay = reminders.filter(reminder => reminder.year === date.year && reminder.month === date.month && reminder.day === date.day)

        const popoverBody = <div className={ styles.popover }>
            {remindersOfDay.map((reminder, index) =>
                <p key={index}>{ new Date(reminder.datetime).toLocaleString() + ': ' + reminder.text }</p>
            )}
        </div>

        return (
            <Popover
                body={ popoverBody }
                isOpen={this.state.popoverIsOpen}
            >
                <div className={styles.daycard} onClick={() => showReminderModal(date.year, date.month, date.day)} onMouseOver={() => this.showPopover(remindersOfDay.length > 0)} onMouseLeave={this.hidePopover}>
                    <span className={ remindersOfDay.length > 0 ? styles.importantDay : styles.simpleDay }>{ date.day }</span>
                </div>
            </Popover>
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
