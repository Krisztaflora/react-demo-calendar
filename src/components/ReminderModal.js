import React, { Component, Fragment } from 'react'
import styles from './remindermodal.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closeReminderModal } from '../actions'

class ReminderModal extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        closeReminderModal: PropTypes.func.isRequired,
    }

    render() {
        const { data, closeReminderModal } = this.props

        return (
            <Fragment>
                <div className={ styles.overlay } onClick={ () => closeReminderModal() } />

                <div className={ styles.reminderModal }>
                    <h2>Add reminder</h2>
                    <div>Date: {data.year} {data.month + 1} {data.day}</div>

                    <div className={ styles.buttons }>
                        <span className={ styles.buttonCancel } onClick={() => closeReminderModal()}>Cancel</span>
                        <span className={ styles.buttonOk }>Save</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = ({
    closeReminderModal,
})

export default connect(null, mapDispatchToProps)(ReminderModal)
