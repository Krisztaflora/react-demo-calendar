import React, { Component } from 'react'
import styles from './daycard.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showReminderModal } from '../actions'

class DayCard extends Component {
    static propTypes = {
        date: PropTypes.shape({
            year: PropTypes.number,
            month: PropTypes.number,
            day: PropTypes.number,
        }).isRequired,
        showReminderModal: PropTypes.func.isRequired,
    }

    render() {
        const { date, showReminderModal } = this.props

        return (
            <div className={styles.daycard} onClick={() => showReminderModal(date.year, date.month, date.day)}>
                { date.day }
            </div>
        )
    }
}

const mapDispatchToProps = ({
    showReminderModal,
})

export default connect(null, mapDispatchToProps)(DayCard)
