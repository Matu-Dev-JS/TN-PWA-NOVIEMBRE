export const getAllUsersController = async (req, res) =>{
    try{

    }
    catch(error){
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}
export const deleteUserByEmailController = async (req, res) =>{
    try{
        const {email} = req.params
    }
    catch(error){
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}
export const updateUsernameByEmailController = async (req, res) =>{
    try{
        const {email} = req.params
    }
    catch(error){
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}