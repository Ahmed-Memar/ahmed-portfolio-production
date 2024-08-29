import { experiencesData } from "@/lib/resumeData";
import Image from "next/image";
function  Experience() {
  return (
    <div className="my-5">
      <h2 className="shadow-md shadow-gray-600/90 mb-10 title-green text-2xl text-center font-black p-4 rounded-md sm:text-3xl">Experiences</h2>

      <div className="grid gap-5 grid-cols-2">
        {
        experiencesData.map((item,id) => {
          return (
          <div key={id} className="shadow-md shadow-gray-600/90 py-10 px-3 flex items-center justify-center flex-col gap-2 rounded-2xl hover:scale-100 hover:shadow-sky-800 hover: md:scale-95 transition-transform duration-1000 ">
            
            <h3 className="shadow-md shadow-inherit rounded-md mb-5 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
            <p className="text-pink-600 uppercase tracking-widest text-xs sm:text-sm text-center">{item.date}</p>
            <p className="text-sky-600 uppercase tracking-widest text-semibold text-xs sm:text-sm text-center">{item.company}</p>
            {item.image && <Image src={item.image.url} alt={item.image.title} width={400} height={300} className="mx-auto rounded-xl shadow-md shadow-slate-600 items-center"  /> }

            <div className="text-sm sm:text-base text-center">{item.desciption.map((ligne, index) => <p key={index}> {ligne} </p>)}</div>
            <p className="text-indigo-400 mt-4 text-sm sm:text-sm text-center">{id === 0 ? "Skills acquired: " : "Skills acquired: "}{item.technologies}</p>
          </div>
          )
        })
        }
      </div>
      
    </div>
  )
}

export default  Experience;