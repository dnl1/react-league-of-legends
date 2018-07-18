import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notification extends Component {
    constructor() {
        super();
        this.closeTime = 3000;
    }

    static info(message, title = 'Information') {
        NotificationManager.info(message, title, this.closeTime)
    }

    static success(message, title = 'Success') {
        NotificationManager.success(message, title, this.closeTime);
    }

    static warning(message, title = 'Warning') {
        NotificationManager.warning(message, title, this.closeTime);
    }

    static error(message, title = 'Error') {
        NotificationManager.error(message, title, this.closeTime);
    }

    render() {
        return (
            <NotificationContainer />
        );
    }
}

export default Notification;