import Link from "next/link";
import { media } from "@/lib/utils";
import { IconContext } from "react-icons";
import Icon from "./Icon";

const SocialMediaLinks = ({size}) => {
    return (
        <div className="flex flex-wrap max-[310px]:flex-wrap gap-3 sm:gap-5 mb-2">
            <IconContext.Provider value={{size: size}}>
            {media.map((item) => (
                item.show && (
                    <Icon key={item.name} >
                        <Link href={item.url} target="_blank">{item?.icon}</Link>
                    </Icon>
                )
            ))}
            </IconContext.Provider>
        </div>
    );
};

export default SocialMediaLinks;