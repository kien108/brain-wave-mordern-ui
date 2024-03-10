import { Section } from '..'
import { SECTION_IDS } from '@/constants/nav.constant'
import { smallSphere, stars } from '@/assets'
import { Heading } from '@/components/common'
import PricingList from './PricingList'
import { LeftLine, RightLine } from '@/components/design/Pricing'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils'

const Pricing = () => {
  return (
    <Section
      id={SECTION_IDS.PRICING}
      className='overflow-hidden'
    >
      <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
          <motion.img
            src={smallSphere}
            alt='sphere'
            className='relative z-1'
            width={255}
            height={255}
            variants={fadeIn('up', 'tween', 0, 0.5)}
          />

          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none'
            variants={fadeIn('', 'tween', 1, 0.5, '-50%', '-50%')}
          >
            <img
              src={stars}
              alt='stars'
              className='w-full '
              width={950}
              height={400}
            />
          </motion.div>
        </div>

        <Heading
          tag='Get started with Brainwave'
          title='Pay once, use forever'
        />

        <div className='relative '>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <motion.div
          className='flex justify-center mt-10'
          variants={fadeIn('up', 'tween', 1.5, 0.5)}
        >
          <a
            href={`/#${SECTION_IDS.PRICING}`}
            className='text-xs font-code font-bold tracking-wider uppercase border-b'
          >
            See the full detail
          </a>
        </motion.div>
      </div>
    </Section>
  )
}

export default Pricing
