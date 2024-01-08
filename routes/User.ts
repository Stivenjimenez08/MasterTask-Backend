import { Router, Response } from "express";
import { userById, createUser, updateUser} from "../controllers/User";
const router = Router();

router.get('/userById/:id', userById);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);

router.get('*', ( res: Response) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
