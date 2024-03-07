import { heroIcons } from '@/constants/mock-data.constant'
import { fadeIn } from '@/utils'
import { HTMLMotionProps, motion } from 'framer-motion'

interface IProps extends HTMLMotionProps<'ul'> {}
const Features = ({ className, ...props }: IProps) => {
  return (
    <motion.ul
      variants={fadeIn('right', 'tween', 0.4, 0.5)}
      className={`p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ${className || ''}`}
      {...props}
    >
      {heroIcons.map((icon, index) => (
        <li
          key={index}
          className='p-5'
        >
          <img
            src={icon}
            alt='icon'
            width={24}
            height={25}
          />
        </li>
      ))}
    </motion.ul>
  )
}

export default Features
