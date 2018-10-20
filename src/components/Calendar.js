import React, { Component, Fragment } from 'react'
import PropTyes from 'prop-types'
import styles from './calendar.css'
import { connect } from 'react-redux'
import DayCard from './DayCard'
import { isOpenedReminderModal, getReminderDate } from '../reducers'
import ReminderModal from '../components/ReminderModal'

class Calendar extends Component {
    static propTypes = {
        year: PropTyes.number.isRequired,
        month: PropTyes.number.isRequired,
        openedReminderModal: PropTyes.bool.isRequired,
        reminderDate: PropTyes.object.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            year: null,
            month: null,
        }

        this.changeYear = this.changeYear.bind(this)
        this.changeMonth = this.changeMonth.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.year) {
            const {year, month} = props

            return {year, month}
        } else {
            return null
        }
    }

    changeYear(num) {
        this.setState({
            year: this.state.year + num,
        })
    }

    changeMonth(num) {
        let year = this.state.year
        let month = this.state.month + num

        if (month === -1) {
            month = 11
            year = year - 1
        } else if (month === 12) {
            month = 0
            year = year + 1
        }

        this.setState({
            year: year,
            month: month,
        })
    }

    render() {
        const { openedReminderModal, reminderDate } = this.props
        const { year, month } = this.state

        const firstDay = new Date(year, month, 1)
        const firstDayNum = firstDay.getDay()
        const daysOfMonth = new Date(year, month, 0).getDate()
        let calElements = []

        for (var emptyNum = 0; emptyNum < firstDayNum; emptyNum++) {
            calElements.push(<div className={ styles.empty } key={"empty-" + emptyNum} />)
        }

        let counter = 0
        for (var row = 0; row < 5; row++) {
            for (var col = 0; col < 7; col++) {
                calElements.push(<DayCard date={{
                    year: year,
                    month: month,
                    day: row * 7 + col + 1,
                }} key={ col + row * 7 }/>)
                counter++
                if (counter >= daysOfMonth ) {
                    break
                }
            }
        }
        return (
            <Fragment>
                <div className={ styles.dateselector }>
                    <h2>
                        <button onClick={() => this.changeYear(-1)}> {'<'} </button> { year } <button onClick={() => this.changeYear(1)}>{'>'}</button>
                        {' '}<button onClick={() => this.changeMonth(-1)}> {'<'} </button>{ month + 1 }<button onClick={() => this.changeMonth(1)}> {'>'} </button>
                    </h2>
                </div>
                <div className={ styles.calendar }>
                    <div className={ styles.calendarHeader }>
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>

                    </div>
                    <div className={ styles.calendarBody}>{ calElements }</div>
                </div>

                {openedReminderModal && <ReminderModal data={ reminderDate } />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    openedReminderModal: isOpenedReminderModal(state),
    reminderDate: getReminderDate(state),
})

export default connect(mapStateToProps)(Calendar)
