import { notification1 } from '@/assets'
import { notificationImages } from '@/constants/mock-data.constant'
import { HTMLMotionProps, motion } from 'framer-motion'
import { fadeIn } from '@/utils'

interface IProps extends HTMLMotionProps<'div'> {}
const Notification = ({ className, title, ...props }: IProps) => {
  return (
    <motion.div
      className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
      {...props}
      variants={fadeIn('left', 'tween', 0.5, 0.5)}
    >
      <img
        src={notification1}
        alt='image'
        width={62}
        height={62}
        className='rounded-2xl'
      />
      <div className='flex-1'>
        <h6 className='mb-1 font-semibold text-base'>{title}</h6>

        <div className='flex items-center justify-between'>
          <ul className='flex -m-0.5'>
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden'
              >
                <img
                  src={image}
                  alt='item'
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          <div className='body-2 text-n-13'>1m ago</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Notification
