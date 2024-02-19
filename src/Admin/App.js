import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import List from './Pages/List/List'
import New from './Pages/New/New'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import { UserInputs, DBInput,HotelInput } from './formSource'


const App = () => {
  return (
    <div className={"app"} >
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/user/*">
          <Route index element={<List user='customer'/>} />
          <Route path="edit/:userId" element={<New inputs={UserInputs} title="Edit User" />} />
          <Route path=":userId" element={<Single user='customer' />} />
          <Route path="New" element={<New inputs={UserInputs} title="Add New User" />} />
        </Route>
        <Route path="/delivery/*">
          <Route index element={<List user='Delivery'/>} />
          <Route path="edit/:userId" element={<New inputs={DBInput} title="Edit DB" />} />
          <Route path=":dbId" element={<Single user='Delivery'/>} />
          <Route path="New" element={<New inputs={DBInput} title="Add DB" />} />
        </Route>
        <Route path="/hotel/*">
          <Route index element={<List user='hotel'/>} />
          <Route path="edit/:hotelId" element={<New inputs={HotelInput} title="Edit Hotel" />} />
          <Route path=":Idhotel" element={<Single user='hotel'/>} />
          <Route path="New" element={<New inputs={HotelInput} title="Add Hotel" />} />
        </Route>
        <Route path="/orders/*">
          <Route index element={<List user='order'/>} />
          <Route path="edit/:hotelId" element={<New inputs={HotelInput} title="Edit Hotel" />} />
          <Route path=":Idhotel" element={<Single user='hotel'/>} />
          <Route path="New" element={<New inputs={HotelInput} title="Add Hotel" />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
