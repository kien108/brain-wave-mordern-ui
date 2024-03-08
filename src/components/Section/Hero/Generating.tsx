import { loading } from '@/assets'
import { fadeIn } from '@/utils'
import { HTMLMotionProps, motion } from 'framer-motion'

interface IProps extends HTMLMotionProps<'div'> {}
const Generating = ({ className, ...props }: IProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.5, 0.5)}
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ''} text-base`}
      {...props}
    >
      <img
        src={loading}
        alt='loading'
        className='w-5 h-5 mr-4 animate-spin'
      />
      AI is generating
    </motion.div>
  )
}

export default Generating
