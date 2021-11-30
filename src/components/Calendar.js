import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayjs from 'dayjs'
import AddTraining from './AddTraining';


export default function Calendar(props) {
    
    const events = props.trainings.map((training) => ({
        id: training.id,
        title: training.activity + " / " 
        + training.customer.firstname + " " + training.customer.lastname,
        start: training.date,
        end: dayjs(training.date).add(training.duration, 'minutes').$d
        }));
        
       // console.log(props.trainings);
       // console.log(dayjs(props.trainings[0].date).add(props.trainings[0].duration, 'minutes'));

    return (
        <div className="App">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              center: 'dayGridMonth,timeGridWeek,timeGridDay new',
            }}
            customButtons={{
              new: {
                text: 'new',
                click: () => console.log('new event'),
              },
              needitw: {
                text: 'edit',
                click: () => console.log('edit event'),
              },
            }}
            events={events}
            nowIndicator
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
          />
        </div>
      );
    }
    