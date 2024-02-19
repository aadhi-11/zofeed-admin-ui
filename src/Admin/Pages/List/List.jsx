import './List.scss'
import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import DataTable from '../../components/datatable/DataTable'

const List = ({user}) => {
  var title=''
  console.log(user);
  if(user==='customer'){
    title='customer'
  }
  else if(user ==='Delivery'){
    title='Delivery'
  }else if(user ==='hotel'){
    title='hotel'
  }else if(user=='order'){
    title='order'
  }
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <div className="datatable">
          <DataTable title={title} />
        </div>
      </div>
    </div>
  )
}

export default List
