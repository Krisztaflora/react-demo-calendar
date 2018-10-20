import React, { Component, Fragment } from 'react'
import styles from './remindermodal.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closeReminderModal, addReminder } from '../actions'

class ReminderModal extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        closeReminderModal: PropTypes.func.isRequired,
        addReminder: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            time: '00:00:00',
            text: '',
            color: '#000',
        }

        this.changeTime = this.changeTime.bind(this)
        this.changeText = this.changeText.bind(this)
        this.save = this.save.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    changeTime(e) {
        this.setState({
            time: e.target.value,
        })
    }

    changeText(e) {
        this.setState({
            text: e.target.value,
        })
    }

    changeColor(e) {
        this.setState({
            color: e.target.value,
        })
    }

    save() {
        const { data, closeReminderModal, addReminder } = this.props

        addReminder(data.year, data.month, data.day, this.state.time, this.state.text, this.state.color)

        closeReminderModal()
    }

    render() {
        const { data, closeReminderModal } = this.props

        return (
            <Fragment>
                <div className={ styles.overlay } onClick={ () => closeReminderModal() } />

                <div className={ styles.reminderModal }>
                    <h2>Add reminder</h2>
                    <div>Date: {data.year} {data.month + 1} {data.day}</div>

                    <div>
                        <label>
                            Time:
                            <input type="text" value={ this.state.time } onChange={ this.changeTime } />
                        </label>
                    </div>

                    <div>
                        <label>
                            Reminder text:
                            <textarea value={ this.state.text } onChange={ this.changeText } />
                        </label>
                    </div>

                    <div>
                        <label>
                            Color:
                            <select value={ this.state.color } onChange={ this.changeColor }>
                                <option value="#000">Black</option>
                                <option value="#666">Gray</option>
                                <option value="#F00">Red</option>
                                <option value="#0F0">Green</option>
                                <option value="#00F">Blue</option>
                            </select>
                        </label>
                    </div>

                    <div className={ styles.buttons }>
                        <span className={ styles.buttonCancel } onClick={() => closeReminderModal()}>Cancel</span>
                        <span className={ styles.buttonOk } onClick={() => this.save()}>Save</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = ({
    closeReminderModal,
    addReminder,
})

export default connect(null, mapDispatchToProps)(ReminderModal)
