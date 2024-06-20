

const Heading = ({ className, title }) => {
  return (
    <div>
      {title && <h2 className={` text-2xl text-center font-bold mx-auto max-w-[50rem] mb-12 lg:mb-20 ${className}`}>{title}</h2>}
    </div>
  )
}

export default Heading