export const POST = async ( url, params) =>{
    const response = await fetch(url, {
        method: 'POST', 
        ...params
    })
    const data = await response.json()
    return data
}