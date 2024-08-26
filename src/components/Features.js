
import { featuresData } from "@/lib/featuresData";
import FeaturesCard from "./ui/FeaturesCard";

function Features() {
    return (
        <section id="features" className="flex flex-col scroll-mt-24 p-4 mt-20" >
            <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">What Can I Do ?</h2>
            <div className="grid gap-8 py-4 sm:max-w-xl md:max-w-full md:gap-x-6 md:grid-cols-2">
                {
                    featuresData.map((item,id) =>(
                        <FeaturesCard key={id} title={item.title} body={item.body}/>
                    ))
                }
            </div>
        </section>
     );
}

export default Features;