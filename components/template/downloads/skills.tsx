import { user } from '../../../state'

export const Skills = () => {
  const mySkills = user.skills
  return (
    <section className="px-8 mt-4">  
      <div className="flex items-center gap-6">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Skills
        </h1>
      </div>
      <p className="mt-4 mb-2 text-xs">
        My experience gives me new skills and takes the skills I already have to the next level.
      </p>

      <div
        className="text-base text-gray-300 font-montserrat">
        <div className="w-full md:flex-1">
          <div className="grid grid-cols-3">
            {
              mySkills.map((item: any, key: number) => (
                <div className="px-2">
                  <div className="font-montserrat my-1.5 flex items-start gap-x-4">
                    <div className="flex-1">
                      <span className="text-xs text-gray-600">{ item.name }</span>
                      <div className="bg-gray-800 bg-opacity-10 h-1 rounded">
                        <div
                          style={{
                            width: `${item.value}%`
                          }}
                          className="bg-primary-gradient h-full rounded"
                        />
                      </div>
                    </div>
                    <div className="text-sm icon">
                      <div 
                        style={{
                          WebkitMaskImage: `url('/icons/${item.icon}.svg')`
                        }}
                        className="mask-icon w-5 h-5 bg-gray-500"
                        />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}