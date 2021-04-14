import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from './event-utils'
import moment from 'moment';
import listWeek from '@fullcalendar/list';



// import momentTimezonePlugin from '@fullcalendar/moment-timezone';

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


const INITIAL_EVENTS = [
	{
		id: createEventId(),
		title: 'All-day event',
		start: todayStr
	},
	{
		id: createEventId(),
		title: 'Timed event',
		start: todayStr + 'T12:00:00'
	},
	{
		id: createEventId(),
		title: 'Testing DB Event',
		start: "2020-08-31T18:30:00Z",
		end: "2020-09-05T17:30:00Z",
		allDay: true
	},
	{
		id: 123456,
		title: 'Test event 1',
		start: todayStr + 'T12:00:00',
		end: todayStr + 'T12:00:00',
	},
	{
		id: 1234,
		title: 'Test event 2',
		start: '2020-10-31T13:16:00Z',
		end: '2020-10-31T13:17:00Z',
	},
	{
		id: 123,
		title: 'Test',
		start: '2020-10-22T13:16:00Z',
		end: '2020-10-24T13:17:00Z',
	}

]


export default class DemoApp extends React.Component {

	state = {
		weekendsVisible: true,
		currentEvents: []
	}

	render() {
		return (
			<div className='demo-app'>
				{this.renderSidebar()}
				<div className='demo-app-main container'>
					<FullCalendar
						// timeZone="local"
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listWeek]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
						}}
						initialView='dayGridMonth'
						editable={true}
						// selectable={true}
						// selectMirror={true}
						// dayMaxEvents={true}
						// weekends={this.state.weekendsVisible}
						// initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
						// select={this.handleDateSelect}
						// // eventContent={renderEventContent} // custom render function
						// eventClick={this.handleEventClick}
						// eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
						/* you can update a remote database when these fire:
						eventAdd={function(){}}
						eventChange={function(){}}
						eventRemove={function(){}}
						*/
						customButtons={{
							ForwardButton: {
								icon: "right-single-arrow",
								click: function() {}
							},
							BackwardButton: {
								icon: "left-single-arrow",
								click: function() {}
							}
						}
					}
					/>
					
				</div>
			</div>
		)
	}

	renderSidebar() {
		return (
			<div className='demo-app-sidebar'>
				<div className='demo-app-sidebar-section'>
					<h2>Instructions</h2>
					<ul>
						<li>Select dates and you will be prompted to create a new event</li>
						<li>Drag, drop, and resize events</li>
						<li>Click an event to delete it</li>
					</ul>
				</div>
				<div className='demo-app-sidebar-section'>
					<label>
						<input
							type='checkbox'
							checked={this.state.weekendsVisible}
							onChange={this.handleWeekendsToggle}
						></input>
            toggle weekends
          </label>
				</div>
				<div className='demo-app-sidebar-section'>
					<h2>All Events ({this.state.currentEvents.length})</h2>
					<ul>
						{this.state.currentEvents.map(renderSidebarEvent)}
					</ul>
				</div>
			</div>
		)
	}

	handleWeekendsToggle = () => {
		this.setState({
			weekendsVisible: !this.state.weekendsVisible
		})
	}

	handleDateSelect = (selectInfo) => {
		let title = prompt('Please enter a new title for your event')
		let calendarApi = selectInfo.view.calendar

		calendarApi.unselect() // clear date selection

		if (title)
		{
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay
			})
		}
	}

	handleEventClick = (clickInfo) => {
		console.log('calendar parsed start -->', clickInfo);
		console.log('calendar parsed end -->', clickInfo);

		console.log("DB value checker start ::", moment("2020-08-31T18:30:00Z").format('ddd MM/D/YYYY h:mm a'));
		console.log("DB value checker end ::", moment("2020-09-02T17:30:00Z").format('ddd MM/D/YYYY h:mm a'));
	}

	handleEvents = (events) => {
		this.setState({
			currentEvents: events
		})
	}

}

// function renderEventContent(eventInfo) {
// 	console.log(eventInfo.event.start);
// 	return (
// 		<>
// 			<b> Time : {eventInfo.timeText}</b>
// 			<p> start : {moment(eventInfo.event.start).format('ddd MM/D/YYYY h:mm a')}</p>
// 			<p> end : {moment(eventInfo.event.end).format('ddd MM/D/YYYY h:mm a')}</p>
// 		</>
// 	)
// }

function renderSidebarEvent(event) {
	return (
		<li key={event.id}>
			<b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
			<i>{event.title}</i>
		</li>
	)
}
