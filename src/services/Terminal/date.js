import React from 'react';
import moment from 'moment';
import timezone from 'moment-timezone';

class date extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'date';
        this.aliases = [];
    }

    handle(args, app) {
        const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
        
        return {
            output: moment().tz(timeZoneString).format('ddd MMM D HH:mm:ss zz YYYY')
        }
    }
}

export default new date()