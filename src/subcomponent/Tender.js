import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom'
const Tender = () => {
  return (
    <div>
        
        <Table responsive="sm"  style={{marginTop:'150px'}}>
        <thead>
          <tr>
         
            <th>Tender ID</th>
            <th>Tender Name</th>
            <th>Location</th>
            <th>Publish Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jacob</td>
            <td>Thorntonl</td>
            <td>1/09</td>
            <td>  <Link to='tenderinfo'>
            <Button variant="success">View</Button></Link></td>
           
          </tr>
          <tr>
          <td>2</td>
            <td>Jacob</td>
            <td>Thorntonl</td>
            <td>3/09</td>
            <td>  <Link to='tenderinfo'>
            <Button variant="success">View</Button></Link></td>
          </tr>
          <tr>
          <td>3</td>
            <td>Jacob</td>
            <td>Thorntonl</td>
            <td>3/09</td>
            <td>  <Link to='tenderinfo'>
            <Button variant="success">View</Button></Link></td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}

export default Tender