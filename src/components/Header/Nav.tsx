import { navigation } from '@/constants/mock-data.constant'
import { SECTION_IDS } from '@/constants/nav.constant'
import { useLocation } from 'react-router-dom'
import { Button } from '..'
import { HamburgerMenu } from '../design/Header'
import { MenuSvg } from '@/assets/svg'

interface Props {
  openNavigation: boolean
  handleToggleNavigation: () => void
}
const Nav = ({ openNavigation, handleToggleNavigation }: Props) => {
  const pathname = useLocation()

  return (
    <>
      <nav
        className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <ul className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                onClick={handleToggleNavigation}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${pathname.hash === item.url ? 'z-2 text-color-1 lg:text-n-1' : 'text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <HamburgerMenu />
      </nav>

      <a
        href={`#${SECTION_IDS.SIGNUP}`}
        className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
      >
        New account
      </a>
      <Button
        href={`#${SECTION_IDS.LOGIN}`}
        className='hidden lg:flex'
      >
        Sign in
      </Button>

      <Button
        className='ml-auto lg:hidden'
        px='px-3'
        onClick={handleToggleNavigation}
      >
        <MenuSvg openNavigation={openNavigation} />
      </Button>
    </>
  )
}

export default Nav