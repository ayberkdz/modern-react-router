import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
  return (
   <div>
      <aside>
         <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/admin">Admin</Link>
         </nav>
      </aside>
      <main>
         <Outlet />
      </main>
   </div>
  )
}

export default MainLayout