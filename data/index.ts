import aspirador_lava_seca from "./blogs/aspirador_lava_seca"




const blogs = [
    aspirador_lava_seca
]
export function getBlog(blog: string) {
    return blogs.find(b => b.blog === blog) 
}
export default blogs