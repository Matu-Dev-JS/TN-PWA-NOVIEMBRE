import filesystem from 'fs'

export const getAndIncrementCounter = async (database_name) =>{
    const contadores = JSON.parse(await filesystem.promises.readFile('./database/id_counters.json'))
    const contador_actual = contadores[database_name]
    contadores[database_name]++
    await filesystem.promises.writeFile('./database/id_counters.json', JSON.stringify(contadores))
    return contador_actual
}

