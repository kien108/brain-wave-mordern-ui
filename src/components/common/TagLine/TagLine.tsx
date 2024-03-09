import { Brackets } from '@/assets/svg'
import { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {}
const TagLine = ({ className, children, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={`tagline flex items-center ${className || ''}`}
    >
      <Brackets position='left' />
      <div className='mx-3 text-n-3'>{children}</div>
      <Brackets position='right' />
    </div>
  )
}

export default TagLine
