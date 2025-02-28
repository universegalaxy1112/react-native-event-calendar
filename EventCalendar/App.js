import React from 'react';
import { Dimensions, View } from 'react-native';

import EventCalendar from './src/EventCalendar';

let { width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: '2017-09-06 22:30:00',
          end: '2017-09-06 23:30:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
          color: 'green',
        },
        {
          start: '2017-09-07 00:30:00',
          end: '2017-09-07 01:30:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-07 01:30:00',
          end: '2017-09-07 02:20:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-07 01:05:00',
          end: '2017-09-07 02:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-07 14:30:00',
          end: '2017-09-07 16:30:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-08 01:20:00',
          end: '2017-09-08 02:20:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-08 04:10:00',
          end: '2017-09-08 04:40:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-08 00:45:00',
          end: '2017-09-08 01:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-08 11:30:00',
          end: '2017-09-08 12:30:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-09 01:30:00',
          end: '2017-09-09 02:00:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-09 03:10:00',
          end: '2017-09-09 03:40:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-09 00:10:00',
          end: '2017-09-09 01:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2017-09-10 12:10:00',
          end: '2017-09-10 13:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
      ],
      breaks: [
        {
          start: '2017-09-07 03:00:00',
          end: '2017-09-07 04:00:00',
        },
        {
          start: '2017-09-07 04:00:00',
          end: '2017-09-07 04:35:00',
        },
        {
          start: '2017-09-07 03:30:00',
          end: '2017-09-07 04:30:00',
        },
        {
          start: '2017-09-07 04:40:00',
          end: '2017-09-07 05:30:00',
        },
        {
          start: '2017-09-08 03:00:00',
          end: '2017-09-08 04:00:00',
        },
        {
          start: '2017-09-08 04:00:00',
          end: '2017-09-08 04:35:00',
        },
        {
          start: '2017-09-08 03:30:00',
          end: '2017-09-08 04:30:00',
        },
        {
          start: '2017-09-08 04:30:00',
          end: '2017-09-08 05:30:00',
        },
      ],
    };
  }

  _eventTapped(event) {
    alert(JSON.stringify(event));
  }

  render() {
    const { events, breaks } = this.state;
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <EventCalendar
          eventTapped={this._eventTapped.bind(this)}
          events={events}
          breaks={breaks}
          width={width}
          initDate={'2017-09-07'}
          upperCaseHeader
          uppercase
          scrollToFirst={false}
        />
      </View>
    );
  }
}
