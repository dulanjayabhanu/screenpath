import {Avatar, AvatarFallback, AvatarGroup, AvatarImage} from "@/components/ui/avatar.tsx";
import {useNavigate} from "react-router";

const SocialIconGroup = () => {

    const navigate = useNavigate()

    return (
        <AvatarGroup className="grayscale">
            <Avatar onClick={() => navigate("www.google.com")} className="cursor-pointer">
                <AvatarImage src="/github.svg" alt="GitHub" className="invert-0 dark:invert-100"/>
                <AvatarFallback>GH</AvatarFallback>
            </Avatar>
            <Avatar onClick={() => navigate("www.google.com")} className="cursor-pointer">
                <AvatarImage src="/twitterx.svg" alt="Twitter-X" className="invert-0 dark:invert-100"/>
                <AvatarFallback>X</AvatarFallback>
            </Avatar>
        </AvatarGroup>
    )
}

export default SocialIconGroup