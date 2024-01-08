import { Router, Response } from "express";
import { createLabel, cosultLabel, updateLabel} from "../controllers/Labels";
const router = Router();

router.get('/consultLabel/:id', cosultLabel);
router.post('/createLabel', createLabel);
router.put('/updateLabel', updateLabel);

router.get('*', ( res: Response ) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
