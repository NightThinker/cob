import { NavLink } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li >
    <NavLink
      className='flex m-0 px-30 rounded-sm '
      exact
      to={to}
    // activeClassName='opacity-50'
    >
      <span className='text-white font-medium text-base'>{name}</span>
    </NavLink>
  </li>)
}

export default NavBarItem