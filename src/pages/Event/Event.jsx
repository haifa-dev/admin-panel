import React from "react";
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

// import './main.scss' // webpack must be configured to do this

const Event = () => {
    return (
        <div style={{ padding: '40px' }}>
            <a className="nav-link" href="/Home" style={{ fontSize: '52px', textAlign: "center" }}>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <br></br>
                <span>Events</span></a>
        </div>
    );
};

export default Event;
