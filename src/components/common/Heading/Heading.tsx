import { HTMLAttributes } from 'react'
import { TagLine } from '..'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  text?: string
  tag?: string
}

const Heading = ({ className, title, text, tag, children, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center ${className || ''}`}
    >
      {tag && <TagLine className='mb-4 md:justify-center'>{tag}</TagLine>}
      {title && <h2 className='h2'>{title}</h2>}
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
      {children}
    </div>
  )
}

export default Heading
