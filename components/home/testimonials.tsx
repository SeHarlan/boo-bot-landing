import Image from "next/image"
import EntranceWrapper from "../EntranceWrapper"
import ThemedSwiper from "../Swiper"

const tests = [
  {
    project: "Project Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Founder Name",
    title: "Founder Title",
    pfp: "/ZMB 0639.png"
  },
  {
    project: "Project Name 2",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Founder Name 2",
    title: "Founder Title 2",
    pfp: "/ZMB 0639.png"
  },
  {
    project: "Project Name 3",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Founder Name 2",
    title: "Founder Title 2",
    pfp: "/ZMB 0639.png"
  },
  {
    project: "Project Name 4",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Founder Name 2",
    title: "Founder Title 2",
    pfp: "/ZMB 0639.png"
  },
];

const Testimonials = () => { 

  const slides = tests.map(t => {
    return (
      <div className="h-full text-center flex flex-col justify-center items-center gap-6">
        <h4 className="text-2xl font-bold text-themeSkyBlue">{t.project}</h4>
        <p className="text-2xl">
          {t.text}
        </p>
        <div className="flex gap-4 items-center">
          <Image src={t.pfp} alt={t.name} width={50} height={50} className="rounded-full border-2 border-themeSkyBlue" />
          <div>
            <p>{t.name}</p>
            <p className="text-sm text-themeWhite/50">{t.title}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="mb-20">
      <EntranceWrapper>
        <ThemedSwiper slideContent={slides}/>
      </EntranceWrapper>
    </div>
  )
}

export default Testimonials