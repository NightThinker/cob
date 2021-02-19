import { NavLink } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li >
    <NavLink
      className='flex m-0 px-30 rounded-sm'
      exact
      to={to}
    // activeClassName='border-b-4 border-blue-500 font-medium text-blue-500'
    >
      <span className='text-white font-medium'>{name}</span>
    </NavLink>
  </li>)
}

export default NavBarItem