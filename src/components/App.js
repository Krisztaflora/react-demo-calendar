import React, { Component } from 'react'
import styles from './app.css'
import Calendar from './Calendar'

export default class App extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <Calendar year={new Date().getFullYear()} month={new Date().getMonth()}/>
            </div>
        )
    }
}
