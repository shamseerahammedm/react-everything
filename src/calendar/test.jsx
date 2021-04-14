import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal,Button } from 'react-bootstrap';






export default class Schedule extends Component {
	// declare any necessary functions such as handleDateClick, etc.



	state = {
		isModalShown: false

	}

	formatEvents() {
		return [{ title: 'test', end: new Date(), start: new Date() }].map(appointment => {
			const { title, end, start } = appointment

			let startTime = new Date(start)
			let endTime = new Date(end)

			return {
				title,
				start: startTime,
				end: endTime,
				extendedProps: { ...appointment }
			}
		})
	}


	handleEventClick = ({ event }) => {
		// openAppointment is a function I wrote to open a form to edit that appointment
		// this.props.openAppointment(event.extendedProps)

		console.log(event.extendedProps);
		this.setState((prevState)=>({
			isModalShown: true
		}))
	}

	handleEventDrop = (info) => {


		console.log(info);

		if (window.confirm("Are you sure you want to change the event date?"))
		{
			console.log('change confirmed')

			// updateAppointment is another custom method
			this.props.updateAppointment({ ...info.event.extendedProps, start: info.event.start, end: info.event.end })

		} else
		{
			console.log('change aborted')
		}
	}

	closeHandler = () => {
		this.setState({
			isModalShown : false
		})
	}





	render() {

		const { isModalShown } = this.state;

		return (
			<>
				<div className="container">
					<FullCalendar
						defaultView="dayGridMonth"
						plugins={[dayGridPlugin, interactionPlugin]}
						editable={true}
						eventDrop={this.handleEventDrop}
						eventClick={this.handleEventClick}
						events={this.formatEvents()}
						eventMouseEnter={() => {
							console.log("Mouse entered");
						}}
						
					/>
				</div>


				<Modal show={isModalShown} onHide={this.closeHandler}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.closeHandler}>
							Close
          				</Button>
						<Button variant="primary" onClick={()=>{
							alert("saving")
						}}>
							Save Changes
          				</Button>
					</Modal.Footer>
				</Modal>
			</>

		)
	}
}