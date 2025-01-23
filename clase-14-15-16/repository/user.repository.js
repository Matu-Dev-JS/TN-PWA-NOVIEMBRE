import filesystem from 'fs'
import { ServerError } from '../utils/error.util.js'


export const getUsers = async () =>{
    return JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
}

export const saveUsers = async (users)=>{
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})
}
export const createUser = async ({username, email, password}) =>{
    const users = await getUsers()
    users.push({username, password, email})
    await saveUsers(users)
    return users
}

export const findUserByEmail = async (users, email) =>{
    const user_found = users.find((user) => user.email === email)
    return user_found || null
}
 
export const deleteUserByEmail = async (email) => {
    const users = await getUsers()
    const user_found = await findUserByEmail(users, email)
    if(!user_found){
        throw new ServerError('User not found', 404)
    }
    const filteredUsers = users.filter((user) => user.email !== email)
    await saveUsers(filteredUsers)
}


export const updateUserByEmail = async (email, newUsername) => {
    const users = await getUsers()
    const usersUpdated = users.map((user) => {
        if (user.email == email) {
            user.username = newUsername
        }
        return user
    })
    await saveUsers(usersUpdated)
}