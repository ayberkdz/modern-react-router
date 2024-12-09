import { Outlet, Link } from 'react-router-dom'

const AdminLayout = () => {
  return (
   <div>
      <aside>
         <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/admin">Dashboard Home</Link> |{" "}
            <Link to="/admin/setting">Settings</Link>
         </nav>
      </aside>
      <main>
         <Outlet />
      </main>
   </div>
  )
}

export default AdminLayout