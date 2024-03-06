import { useCallback } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { useToggle } from '@/hooks'

const Header = () => {
  const [openNavigation, toggleOpenNavigation] = useToggle(false)

  const handleToggleNavigation = useCallback(() => toggleOpenNavigation(), [openNavigation])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
    ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}
    
    `}
    >
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 py-4 lg:py-0'>
        <Logo />
        <Nav
          openNavigation={openNavigation}
          handleToggleNavigation={handleToggleNavigation}
        />
      </div>
    </header>
  )
}

export default Header
