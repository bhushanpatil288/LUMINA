import {NavLink}  from 'react-router-dom'

const Header = () => {
  return (
    <div className='container mx-auto px-10 border'>
    <div className='flex justify-between'>
      <div>
        LOGO {/* to be added */}
      </div>
      <div className='flex'>
        <ul className='flex gap-3'>
          <li>
            <NavLink
              to='/'
              className={({isActive})=>`${isActive? 'text-blue-700' : 'text-gray-700'} font-bold`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({isActive})=>`${isActive? 'text-blue-700' : 'text-gray-700'} font-bold`}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default Header
