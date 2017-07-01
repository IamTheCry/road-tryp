import React from 'react';
import { Table, Header, Rating, Image, Label } from 'semantic-ui-react';
import DashboardDriverRow from './DashboardDriverRow.jsx';

const DashboardTableBody = (props) => (
  <Table.Body>
    {
      props.trips.map( (trip, index) => {
        return <DashboardDriverRow key={index} trip={trip} driverDetails={props.driverDetails}/>
      })
    }
  </Table.Body>
)

export default DashboardTableBody;







