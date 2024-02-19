import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import Table from "../../components/table/Tables"
import "./Single.scss"

const Single = ({ user }) => {
  const UserDetails = {
    name: "Midhun Santhosh",
    phone: "8590089407",
    img: "https://media.istockphoto.com/id/1163192129/photo/laughing-out-loud-joyful-young-man-in-casual-t-shirt-smiles-broadly-laughing-showing-perfect.jpg?s=612x612&w=0&k=20&c=53bTRrn34MTWbf1AfpDn57RGwgjc_3rq4Os2i6ZRuM0=",
    Address: "Varakil(house),Moolamattom(po),Idukki",
    place: "Moolamattom",
    state: 'kerala'
  }
  const DBDetails = {
    name: "Midhun Santhosh",
    phone: "8590089407",
    img: "https://media.istockphoto.com/id/1163192129/photo/laughing-out-loud-joyful-young-man-in-casual-t-shirt-smiles-broadly-laughing-showing-perfect.jpg?s=612x612&w=0&k=20&c=53bTRrn34MTWbf1AfpDn57RGwgjc_3rq4Os2i6ZRuM0=",
    Address: "Varakil(house),Moolamattom(po),Idukki",
    place: "Moolamattom",
    state: 'kerala'
  }
  const HotelDetails = {
    Name: "Hotel nandanam",
    email: "nandanam@gmail.com",
    phone: "8590089407",
    img: "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
    , Address: "Near Ksrtc bus Stand ",
    place: "Muvattupuzha",
    state: 'kerala'
  }
  var Details = []
  var title = ''
  if (user === 'customer') {
    Details = UserDetails;
    title = 'UserOrders'
  } else if (user === 'Delivery') {
    Details = DBDetails;
    title = 'DBOrders'
  } else if (user === 'hotel') {
    console.log(user);
    Details = HotelDetails;
    title = 'HotelDetailsOrders'
  }
  return (
    <div className='single'>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="single-inside">
          <div className="top">
            <div className="left">
              <div className="Button">
                {
                  user === 'customer' ? (
                    <Link to="/admin/user/edit/:userId" style={{ textDecoration: "none" }}>
                      <div className="editButton">Edit</div>
                    </Link>
                  ) : null
                }
                {
                  user === 'Delivery' ? (
                    <Link to="/admin/delivery/edit/:dbId" style={{ textDecoration: "none" }}>
                      <div className="editButton">Edit</div>
                    </Link>
                  ) : null
                }
                {
                  user === 'hotel' ? (
                    <Link to="/admin/hotel/edit/:hotelId" style={{ textDecoration: "none" }}>
                      <div className="editButton">Edit</div>
                    </Link>
                  ) : null
                }
              </div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src={Details.img}
                  alt="avater"
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{Details.name}</h1>

                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{Details.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{Details.Address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">plcae:</span>
                    <span className="itemValue">{Details.place}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">State:</span>
                    <span className="itemValue">{Details.state}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="User transactions (last 6 months)" />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Recent Orders</h1>
            <Table title={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single
