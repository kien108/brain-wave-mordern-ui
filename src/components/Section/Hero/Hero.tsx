import { CompanyLogos, Features, Generating, Notification, Section } from '..'
import { SECTION_IDS } from '@/constants/nav.constant'
import { curve, heroBackground, robot } from '@/assets'
import { Button } from '../..'
import { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import { BackgroundCircles, BottomLine, Gradient } from '../../design/Hero'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils'

const Hero = () => {
  const parralaxRef = useRef<HTMLDivElement>(null)

  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=''
      id={SECTION_IDS.HERO}
    >
      <div
        className='container relative'
        ref={parralaxRef}
      >
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
          <h1 className='h1 mb-6'>
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with&nbsp;
            <span className='inline-block relative'>
              Brainwave
              <img
                src={curve}
                alt='curve'
                className='absolute left-0 w-full xl:-mt-2'
                width={624}
                height={28}
              />
            </span>
          </h1>

          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
            Unleash the power of AI within Brainwave. &nbsp; Upgrade your productivity with
            Brainwave, the open AI chat app.
          </p>
          <Button
            href={`#${SECTION_IDS.PRICING}`}
            white
          >
            Get started
          </Button>
        </div>

        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <motion.div
            className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
          >
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
              <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                <img
                  src={robot}
                  alt='robot'
                  width={1024}
                  height={490}
                  className='w-full scale-[1.7] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]'
                />
                <Generating className='absolute left-4 right-4 bottom-5 md:bottom-8 md:w-[31rem] md:left-1/2 md:-translate-x-1/2' />
                <ScrollParallax
                  isAbsolutelyPositioned
                  shouldPause
                >
                  <Features className='hidden absolute -left-[5.5rem] bottom-[7.5rem] ' />
                  <Notification
                    className='hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex'
                    title='Code Generation'
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </motion.div>

          <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            <img
              src={heroBackground}
              alt='hero background'
              width={1440}
              height={1800}
              className='w-full'
            />
          </div>

          <BackgroundCircles parallaxRef={parralaxRef} />
        </div>
        <CompanyLogos className='hidden relative z-10 mt-20 lg:block' />
      </div>

      <BottomLine />
    </Section>
  )
}

export default Hero
