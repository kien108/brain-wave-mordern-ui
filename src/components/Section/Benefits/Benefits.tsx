import { SECTION_IDS } from '@/constants/nav.constant'
import { Section } from '..'
import { Heading } from '@/components/common'
import { benefits } from '@/constants/mock-data.constant'
import { Arrow, ClipPath } from '@/assets/svg'
import { GradientLight } from '@/components/design/Benefits'
import { fadeIn } from '@/utils'
import { motion } from 'framer-motion'

const Benefits = () => {
  return (
    <Section id={SECTION_IDS.FEATURES}>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Chat Smarter, Not Harder with Brainwave'
        />

        <div className='flex flex-wrap gap-10 mb-10'>
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className='relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              variants={fadeIn('up', 'tween', 0.5 * index, 0.5)}
            >
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                <h5 className='h5 mb-5'>{item.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{item.text}</p>
                <div className='flex items-center mt-auto'>
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className='absolute inset-0.5 bg-n-8'
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt='image'
                      width={380}
                      height={362}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
