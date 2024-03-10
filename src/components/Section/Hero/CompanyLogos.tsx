import { companyLogos } from '@/constants/mock-data.constant'
import { HTMLMotionProps, motion } from 'framer-motion'
import { fadeIn } from '@/utils'

interface IProps extends HTMLMotionProps<'div'> {}
const CompanyLogos = ({ className, ...props }: IProps) => {
  return (
    <motion.div
      {...props}
      className={className}
    >
      <motion.h5
        className='tagline mb-6 text-center text-n-1/50'
        variants={fadeIn('up', 'tween', 0, 0.5)}
      >
        Helping people create beautiful logo
      </motion.h5>
      <ul className='flex items-center justify-between'>
        {companyLogos.map((logo, index) => (
          <motion.li
            key={index}
            className='flex items-center justify-center h-[8.5rem]'
            variants={fadeIn('up', 'tween', 0.5 * index, 0.5)}
          >
            <img
              src={logo}
              alt='company logo'
              width={134}
              height={28}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default CompanyLogos
