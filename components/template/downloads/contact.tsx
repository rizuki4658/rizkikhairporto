import { user } from '../../../state'
import Button from '../../common/button'

export const Contact = () => {
  const socmed = user.socmed
  return (
    <section className="px-8 mt-4">  
      <div className="flex items-center gap-6 mb-2">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Contact
        </h1>
      </div>
      <div className="flex items-center space-x-6">
        {
          socmed.map((item, key) => (
            <div key={key} className="icon flex items-center space-x-2">
              <div 
                style={{
                  WebkitMaskImage: `url('/icons/${item.name}.svg')`
                }}
                className="mask-icon w-4 h-4 bg-gray-500"
              />
              <span className="text-gray-500">{item.text}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}
