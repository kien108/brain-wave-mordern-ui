import { SVGComponent } from '@/types'

type IProps = SVGComponent & {
  openNavigation: boolean
}
const MenuSvg = ({ openNavigation = true, ...props }: IProps) => {
  return (
    <svg
      className='overflow-visible'
      width='20'
      height='12'
      viewBox='0 0 20 12'
      {...props}
    >
      <rect
        className='transition-all origin-center'
        y={openNavigation ? '5' : '0'}
        width='20'
        height='2'
        rx='1'
        fill='white'
        transform={`rotate(${openNavigation ? '45' : '0'})`}
      />
      <rect
        className='transition-all origin-center'
        y={openNavigation ? '5' : '10'}
        width='20'
        height='2'
        rx='1'
        fill='white'
        transform={`rotate(${openNavigation ? '-45' : '0'})`}
      />
    </svg>
  )
}

export default MenuSvg
