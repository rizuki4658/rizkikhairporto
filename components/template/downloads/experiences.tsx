import { user } from '../../../state'
import { myDates } from '../../../utils'

export const Experiences = () => {
  const myExperiences = user.experiences

  return (
    <section className="px-8 mt-4">  
      <div className="flex items-center gap-6">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Experience
        </h1>
      </div>

      <div className="mt-4">
        <div className="max-w-5xl space-y-4">
          {
            myExperiences.map((item: any, key: number) => {
              return (
                <div key={key} className="w-full">
                  <div className="mt-0">
                    <h3 className="text-sm font-montserrat font-semibold">
                      {item.name}
                    </h3>
                    <p className="font-montserrat my-1 text-xs font-bold">
                      { item.date.start ? `${myDates(item.date.start).month.long} ${myDates(item.date.start).year.long} ` : 'Present'}
                      -
                      { item.date.end ? ` ${myDates(item.date.end).month.long} ${myDates(item.date.end).year.long}` : 'Present' }
                    </p>
                  </div>
                  <div className="font-poppins mt-2 text-xs">
                    {item.description}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}