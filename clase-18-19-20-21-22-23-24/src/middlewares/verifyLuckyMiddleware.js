export const verifyLuckyMiddleware = (req, res, next) =>{
    
    const random_number = Math.random()
    if(random_number > 0.5){
        req.tiene_suerte = true
        
        //Tiene suerte
        next()
    }
    else{
        //No tiene suerte
        res.json(
            {
                message: 'Hoy no vayas a la quinela'
            }
        )
    }
}