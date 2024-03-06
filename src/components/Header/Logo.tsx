import { brainwave } from '@/assets'
import { SECTION_IDS } from '@/constants/nav.constant'

const Logo = () => {
  return (
    <a
      href={`#${SECTION_IDS.HERO}`}
      className='block w-[12rem] xl:mr-8'
    >
      <img
        src={brainwave}
        alt='brainwave'
        width={190}
        height={40}
      />
    </a>
  )
}

export default Logo
