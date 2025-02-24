import React from 'react'
import './Dashboard.css'
import { Cards } from '../../Components/Cards/Cards'
import AirportShuttleIcon from '../../assets/png/a.png';
import LocalShippingIcon from '../../assets/png/b.png';
import DoNotDisturbIcon from '../../assets/png/c.png';
import NotificationsActiveIcon from '../../assets/png/d.png';
import BookIcon from '../../assets/png/e.png';
import AutoStoriesIcon from '../../assets/png/f.png';
import Tota from '../../assets/png/g.png';
import Ntota from '../../assets/png/h.png';
import ndue from '../../assets/png/i.png';
import tdue from '../../assets/png/j.png';
import tdfue from '../../assets/png/k.png';
import tdfuel from '../../assets/png/l.png';
import em from '../../assets/png/m.png';
import ex from '../../assets/png/n.png';

export const Dashboard = () => {
  return (
    <div>
      <th className='hDash'>Main Dashboard</th>
      <table>
        <tbody>
          <tr>
            <td><Cards logo={AirportShuttleIcon} tex='Total Vehicle'/></td>
            <td><Cards logo={LocalShippingIcon} tex='Running Vechicles'/></td>
            <td><Cards logo={DoNotDisturbIcon} tex='Stopped Vehicle'/></td>
            <td><Cards logo={NotificationsActiveIcon} tex='Alert Notification'/></td>
          </tr>
          <tr>
          <td><Cards logo={BookIcon} tex='Total Booked Orders'/></td>
          <td><Cards logo={AutoStoriesIcon} tex='New Booking'/></td>
          <td><Cards logo={Tota} tex='Total Booked Amount'/></td>
          <td><Cards logo={Ntota} tex='New Booked Amount'/></td>
          </tr>
          <tr>
          <td><Cards logo={tdue} tex='Total Due Amount'/></td>
          <td><Cards logo={ndue} tex='New Due Amount'/></td>
          <td><Cards logo={tdfue} tex='Total Fuel Expense'/></td>
          <td><Cards logo={tdfuel} tex='Total Other Expense'/></td>
          </tr>
          <tr>
          <td><Cards logo={ex} tex='Today Total Expense'/></td>
          <td><Cards logo={em} tex='Today Salary Paid'/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
