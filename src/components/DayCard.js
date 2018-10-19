import React, { Component } from 'react'
import styles from './daycard.css'
import PropTypes from 'prop-types'

export default class DayCard extends Component {
    static propTypes = {
        date: PropTypes.shape({
            year: PropTypes.number,
            month: PropTypes.number,
            day: PropTypes.number,
        }).isRequired
    }

    dayName(dayNum) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        return dayNames[dayNum]
    }

    render() {
        const { date } = this.props

        return (
            <div className={styles.daycard}>
                { date.day }
            </div>
        )
    }
}
