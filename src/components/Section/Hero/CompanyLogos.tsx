import { companyLogos } from '@/constants/mock-data.constant'
import React from 'react'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}
const CompanyLogos = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={className}
    >
      <h5 className='tagline mb-6 text-center text-n-1/50'>Helping people create beautiful logo</h5>
      <ul className='flex items-center justify-between'>
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className='flex items-center justify-center h-[8.5rem]'
          >
            <img
              src={logo}
              alt='company logo'
              width={134}
              height={28}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
