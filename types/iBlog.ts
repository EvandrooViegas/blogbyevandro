export type iBlog = {
    title: string,
    blog: string,
    date: string
    banner: string 
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