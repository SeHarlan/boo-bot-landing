import Image from "next/image"
import EntranceWrapper from "../EntranceWrapper"
import ThemedSwiper from "../Swiper"

const tests = [
  {
    project: "Project Name",
    text: "“HOLY WOW THIS IS CRAZY“",
    name: "Tony",
    title: "CEO, Underdog",
    pfp: "/tony.jpeg"
  },
  {
    project: "Project Name 2",
    text: "“The BOOs have experimented and found a way to gamify engagement.“",
    name: "Ravi",
    title: "Solana Legend",
    pfp: "/ravi.jpeg"
  },
  {
    project: "Project Name 3",
    text: "“Something every successful NFT community needs 🔥“",
    name: "Ronin",
    title: "The Shogun",
    pfp: "/ronin.jpeg"
  },
  {
    project: "Project Name 2",
    text: "“The BOOs have experimented and found a way to gamify engagement.“",
    name: "Ravi",
    title: "Solana Legend",
    pfp: "/ravi.jpeg"
  },
];

const Testimonials = () => { 

  const slides = tests.map(t => {
    return (
      <div className="h-full text-center flex flex-col justify-center items-center gap-6">
        {/* <h4 className="text-2xl font-bold text-themeSkyBlue">{t.project}</h4> */}
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
    <div id="testimonials" className="mb-20">
      {/* <EntranceWrapper> */}
        <ThemedSwiper slideContent={slides}/>
      {/* </EntranceWrapper> */}
    </div>
  )
}

export default Testimonials