export function getCategory(c: string) {
    return categories.find(ca => ca.name === c)
}
export const categories = [
    { name: "Eletrodomêsticos", image: "https://www.deco.proteste.pt/-/media/edideco/images/home/casa-energia/eletricidade%20e%20gas/news/2022/eletrodomesticos%20que%20gastam%20mais/eletrodomesticos.jpg?rev=5ba1eee7-71ba-4444-b070-77e19eda5b88&mw=660&hash=B1EF931513C48BE38AA7FD18A101CD45" }
]