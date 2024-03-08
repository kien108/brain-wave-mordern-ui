import { SECTION_IDS } from '@/constants/nav.constant'
import { Section } from '..'
import { Heading } from '@/components/common'

const Benefits = () => {
  return (
    <Section id={SECTION_IDS.FEATURES}>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Chat Smarter, Not Harder with Brainwave'
        />
      </div>
    </Section>
  )
}

export default Benefits
