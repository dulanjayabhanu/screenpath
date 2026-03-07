import type {Video} from "@/types/Video.ts";

const watchVideoDefaultValues = (): Video => {
    return {
        iso_639_1: "",
        iso_3166_1: "",
        name: "",
        key: "",
        published_at: "",
        site: "",
        size: 0,
        type: "",
        official: false,
        id: "",
    }
}

export default watchVideoDefaultValues