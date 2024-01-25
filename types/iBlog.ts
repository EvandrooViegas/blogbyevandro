export type iBlog = {
    title: string,
    blog: string,
    date: string
    banner: string,
    video?: string,

    links: [
        {  name: string, link: string, image: string}
    ]
    category: {
        name: string
        image: string
    } | undefined
    body: {
        title: string ,
        text: string ,
        image?: string, 
    }[]
}