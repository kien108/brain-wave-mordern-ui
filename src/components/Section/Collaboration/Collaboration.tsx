import { collabApps, collabContent, collabText } from '@/constants/mock-data.constant'
import { Section } from '..'
import { brainwaveSymbol, check } from '@/assets'
import { Button } from '@/components'
import { LeftCurve, RightCurve } from '@/components/design/Collaboration'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils'

const Collaboration = () => {
  return (
    <Section crosses>
      <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
          <motion.h2
            className='h2 mb-4 md:mb-8'
            variants={fadeIn('up', 'tween', 0, 0.5)}
          >
            AI Chat App for seamless collaboration
          </motion.h2>
          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item, index) => (
              <motion.li
                key={index}
                className='mb-3 py-3'
                variants={fadeIn('up', 'tween', 0.5 * index + 0.5, 0.5)}
              >
                <div className='flex items-center'>
                  <img
                    src={check}
                    alt='check'
                    width={24}
                    height={24}
                  />
                  <h6 className='body-2 ml-5'>{item.title}</h6>
                </div>
                {item.text && <p className='body-2 mt-3 text-n-4'>{item.text}</p>}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeIn('up', 'tween', 2, 0.5)}>
            <Button>Try it now</Button>
          </motion.div>
        </div>

        <div className='lg:ml-auto xl:w-[38rem] mt-4'>
          <motion.p
            className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-34 lg:w-[22rem] lg:mx-auto'
            variants={fadeIn('up', 'tween', 2.25, 0.5)}
          >
            {collabText}
          </motion.p>

          <motion.div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100'>
            <div className='flex w-60 aspect-square mt-auto border border-n-6 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                <motion.div
                  className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'
                  variants={fadeIn('', 'tween', 1, 0.5)}
                >
                  <img
                    src={brainwaveSymbol}
                    alt='brainwave'
                    width={48}
                    height={48}
                  />
                </motion.div>
              </div>
            </div>

            <ul>
              {collabApps.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                >
                  <motion.div variants={fadeIn('', 'tween', 0.4 * index + 1, 0.5)}>
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className='m-auto'
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
