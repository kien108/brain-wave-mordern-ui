import { SectionSvg } from '@/assets/svg'
import { staggerContainer } from '@/utils'
import { HTMLMotionProps, motion } from 'framer-motion'

interface IProps extends HTMLMotionProps<'section'> {
  crosses?: boolean
  crossesOffset?: string
  customPaddings?: string
  children: React.ReactNode
}

const Section = ({
  crosses,
  crossesOffset,
  customPaddings,
  className,
  children,
  ...props
}: IProps) => {
  return (
    <motion.section
      variants={staggerContainer(5, 0)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.25 }}
      {...props}
      className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''}`}`}
    >
      {children}

      <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
      <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}
          ></div>
          <SectionSvg crossesOffset={crossesOffset} />s
        </>
      )}
    </motion.section>
  )
}

export default Section
