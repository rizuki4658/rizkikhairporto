import { user } from '../../../state'

export const Skills = () => {
  const mySkills = user.resume?.skills ?? {
    frontend: [],
    toolsOthers: [],
    languages: []
  }
  return (
    <section className="px-8 mt-4">  
      <div className="flex items-center gap-6">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Skills
        </h1>
      </div>
      <p className="mt-4 mb-2 text-sm">
        My professional journey has strengthened my expertise and expanded the skills I already possessed.
      </p>

      <div
        className="text-base font-montserrat">
        <div className="w-full md:flex-1 space-y-2">
          <div className="flex gap-x-2 text-sm">
            <span>Frontend:</span>
            <ul className="flex flex-wrap gap-2">
              {
                mySkills.frontend.map((item, key) => (
                  <li key={key} className="italic border border-gray-400 px-2 py-0.5 rounded-full">#{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="flex gap-x-2 text-sm">
            <span>Tools & Others:</span>
            <ul className="flex flex-wrap gap-2">
              {
                mySkills.toolsOthers.map((item, key) => (
                  <li key={key} className="italic border border-gray-400 px-2 py-0.5 rounded-full">#{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}