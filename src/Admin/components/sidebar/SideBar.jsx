import { useContext } from 'react'
import "./SideBar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AndroidIcon from '@mui/icons-material/Android';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';

const SideBar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/admin" style={{textDecoration:"none"}}>
          <span className="logo">ZoFeed Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">Menu</p>
          <li>
            <DashboardIcon  className='icons'/>
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <Link to="/admin/user" style={{textDecoration:"none"}}>
            <li>
              <AccountCircleIcon className='icons' />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/admin/delivery" style={{textDecoration:"none"}}>
            <li>
              <DeliveryDiningIcon className='icons' />
              <span>delivery partners</span>
            </li>
          </Link>
          <Link to="/admin/hotel" style={{textDecoration:"none"}}>
            <li>
              <RestaurantIcon className='icons' />
              <span>Restuarent Partners</span>
            </li>
          </Link>
          <Link to="/admin/orders" style={{textDecoration:"none"}}>
          <li>
            <AddBusinessIcon className='icons' />
            <span>Orders</span>
          </li>
          </Link>
          {/* <li>
            <LocalOfferIcon className='icons' />
            <span>Offers</span>
          </li> */}
          <p className="title">Useful</p>
          
          <li>
            <TrendingUpIcon className='icons' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icons' />
            <span>Notifications</span>
          </li>

          <p className="title">Services</p>
          <li>
            <AndroidIcon className='icons'  />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyAltIcon  className='icons' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icons'  />
            <span>Settings</span>
          </li>
          
          <p className="title">User</p>
          <li>
            <PersonIcon className='icons'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icons'/>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type: "LIGHT" })} >

        </div>
        <div className="colorOption" onClick={()=>dispatch({type: "DARK"  })}  >
          
        </div>
      </div>

    </div>
  )
}

export default SideBar
