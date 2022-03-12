import { user } from '../../../state'

export const About = () => {
  const __html: string = user.about.description ? user.about.description : ''

  return (
    <section
      className="px-8">
      <div className="flex items-center gap-6">
        <div className="bg-primary-gradient h-1 w-6 rounded-md" />
        <h1 className="text-xl font-poppins font-semibold">
          Hey, I&apos;m <span className="font-bold font-montserrat">Rizki</span>
        </h1>
      </div>
      <h2 className="text-xl font-montserrat my-2.5 font-semibold">
        {'Front-End Developer'}
      </h2>

      <div
        className="text-base font-montserrat flex items-center">
        <div className="w-2/3 space-y-4">
          <div
            className="text-xs"
            dangerouslySetInnerHTML={{ __html }} />
          <div className="text-xs font-poppins">
            <div className="flex items-center gap-x-4 font-poppins">
              Name:
              Rizki Khair
            </div>
            <div className="flex items-center gap-x-4 font-poppins">
              Birth date:
              13th January, 1995
            </div>
            <div className="flex items-center gap-x-4 font-poppins">
              Email:
              <b>rizkikhair4658@gmail.com</b>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <img
              src="/img/about.png"
              alt="about me"
              width="240"
              height="144" />
        </div>
      </div>
    </section>
  )
}