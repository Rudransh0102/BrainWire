import { companyLogos } from '../constants'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
      <h5 className="text-center text-n-1/50 mb-6 tagline">Helping people create beautiful content at</h5>
      <ul className="flex items-center justify-center gap-8">
        {companyLogos.map((logo, index) => (
          <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
            <img src={logo} alt="company" width={100} height={100} />
          </li>
        ))}
        
      </ul>
    </div>
  )
}

export default CompanyLogos