import { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Heading = ({ className, title, children, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={`max-w-[50rem] mx-auto mb-12 lg:mb-20  ${className || ''}`}
    >
      {title && <h2 className='h2'>{title}</h2>}
      {children}
    </div>
  )
}

export default Heading
