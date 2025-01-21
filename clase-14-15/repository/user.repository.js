import filesystem from 'fs'

export const createUser = async ({username, email, password}) =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
    users.push({username, password, email})
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})
    return users
}

const deleteUserByEmail = async (email) => {
    const users = JSON.parse(await fs.promises.readFile('./database/users.json', { encoding: 'utf-8' }))
    const filteredUsers = users.filter((user) => user.email !== email)
    await fs.promises.writeFile('./database/users.json', JSON.stringify(filteredUsers), { encoding: 'utf-8' })
}