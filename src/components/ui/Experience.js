import { experiencesData } from "@/lib/resumeData";
function  Experience() {
  return (
    <div className="my-5">
      <h2 className="shadow-md shadow-gray-600/90 mb-10 title-green text-2xl text-center font-black p-4 rounded-md sm:text-3xl">Experiences</h2>

      <div className="grid gap-5 grid-cols-2">
        {
        experiencesData.map((item,id) => {
          return (
          <div key={id} className="shadow-md shadow-gray-600/90 py-10 px-3 flex flex-col gap-2 rounded-2xl hover:scale-100 hover:shadow-sky-800 hover: md:scale-95 transition-transform duration-1000 ">
            <p className="text-pink-600 uppercase tracking-widest text-xs sm:text-sm">{item.date}</p>
            <p className="text-sky-600 uppercase tracking-widest text-semibold text-xs sm:text-sm">{item.company}</p>
            <h3 className="shadow-md shadow-inherit rounded-md mb-10 title-green text-sm text-center font-black p-2 sm:text-xl">{item.title}</h3>
            {item.image && <img src={item.image} className="w-full h-auto rounded-md" />}
            <div className="text-sm sm:text-base">{item.desciption.map((ligne, index) => <p key={index}> {ligne} </p>)}</div>
            <p className="text-indigo-400 mt-4 text-sm sm:text-sm">{id === 0 ? "Technologies: " : "Subjects: "}{item.technologies}</p>
          </div>)
        })
        }
      </div>
      
    </div>
  )
}

export default  Experience;