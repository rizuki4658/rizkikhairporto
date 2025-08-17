import { user } from '../../../state'
import { myDates } from '../../../utils'

export const Experiences = () => {
  const myExperiences = user.resume.experiences

  return (
    <section className="px-8 mt-4">  
      <div className="flex items-center gap-6">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Experiences & Projects
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
                      {item.role}
                    </p>
                    <p className="font-montserrat my-1 text-xs font-bold">
                      {item.body}
                    </p>
                  </div>
                  <div className="font-poppins mt-2 text-xs">
                    <ul className="list-outside list-disc ml-4">
                      {
                        item.desc.map((itemDesc: string, key: number) => (
                          <li key={key}>{itemDesc}</li>
                        ))
                      }
                    </ul>
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