import filesystem from 'fs'

export const createUser = async ({username, email, password}) =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
    users.push({username, password, email})
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})
    return users
}