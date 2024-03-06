import { ButtonGradient, ButtonSvg } from '@/assets/svg'
import { ButtonHTMLAttributes } from 'react'

type BorderVariants = 'normal' | 'gradient'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  px?: string
  white?: boolean
  border?: BorderVariants
}
const Button = ({ className, href, px, white, children, border = 'gradient', ...props }: Props) => {
  const buttonClasses = `${className || ''} button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}`

  const spanClasses = 'relative z-10'

  const renderLink = () => (
    <a
      href={href}
      className={buttonClasses}
    >
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  )

  const renderButton = () => (
    <button
      {...props}
      className={buttonClasses}
    >
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  )

  return (
    <>
      {border === 'gradient' && <ButtonGradient />}
      {href ? renderLink() : renderButton()}
    </>
  )
}

export default Button
