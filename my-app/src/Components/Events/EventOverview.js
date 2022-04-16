import React, {useState, useEffect} from 'react';
import "./EventOverview.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Airtable from 'airtable';

function EventOverview() {
  // state variables
  const [general, setGeneral] = useState('')
  const [needed, setNeeded] = useState('')

  const api_key = process.env.REACT_APP_API_KEY

  const getRecord = () => {
    base('🚛 Supplier Pickup Events').find('recJgNdhgq8BlqcBj', function(err, record) {
        if (err) { console.error(err); return; }
        setGeneral(record.fields["Total Count of Drivers for Event"]);
        setNeeded(record.fields["Count of Driving Slots Available"]);
        console.log('Retrieved', record.id);
    });
  }

  const base = new Airtable({apiKey: api_key}).base('appCVXBrL5oceApI4');
  
  useEffect(() => {
    getRecord();
  }, [])

  return (
    <div className="event-container">
      <div className="event-title">
        <h1>Overview</h1>
      </div>
      <div className="overview">
        <div className="overview-info">
          <div className="info">
            Event Date<br/> 
            <b>Saturday, March 12th</b>
          </div>
          <div className="info">
            Group<br/> 
            <b>Hack4Impact</b>
          </div>
          <div className="info">
            Pickup Location<br/> 
            <b>Start Lighthouse</b>
          </div>
          <div className="info">
            Event Website Link<br/> 
            <b>www.motthavenfridge.com/event</b>
          </div>
        </div>
        <div className="graphic">
          <p>Current Drivers</p>
          <ProgressBar>
            <ProgressBar variant={"special"} label={0} now={0} key={1}/>
            <ProgressBar variant={"general"} label={general} now={(general / (general + needed)) * 100} key={2}/>
            <ProgressBar variant={"needed"} label={needed} now={(needed / (general + needed)) * 100} key={3}/>
          </ProgressBar>
          <div className="legend">
            <div className="label special"></div>
            <p>Special Group Drivers</p>
          </div>
          <div className="legend">
            <div className="label general"></div>
            <p>General Volunteer Drivers</p>
          </div>
          <div className="legend">
            <div className="label needed"></div>
            <p>Drivers Still Needed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventOverview;