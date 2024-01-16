import { Router, Response } from "express";
import { userById, createUser, updateUser, updatePassword } from "../controllers/User";
import validateJWT from "../helpers/validate-jwt";
const router = Router();

router.get('/userById/:id', userById);
// router.get('/userById/:id', validateJWT, userById);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);
router.put('/updatePassword', updatePassword);

router.get('*', ( res: Response) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
