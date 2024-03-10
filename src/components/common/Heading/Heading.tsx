import { TagLine } from '..'
import { fadeIn } from '@/utils'
import { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

interface IProps extends HTMLMotionProps<'div'> {
  text?: string
  tag?: string
}

const Heading = ({ className, title, text, tag, children, ...props }: IProps) => {
  return (
    <motion.div
      {...props}
      className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center ${className || ''}`}
      variants={fadeIn('up', 'tween', 0, 0.5)}
    >
      {tag && <TagLine className='mb-4 md:justify-center'>{tag}</TagLine>}
      {title && <h2 className='h2'>{title}</h2>}
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </motion.div>
  )
}

export default Heading
