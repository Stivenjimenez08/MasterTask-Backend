import { Router, Response } from "express";
import { createNote, cosultNotes, updateNote} from "../controllers/notes";
const router = Router();

router.get('/consultNote/:id', cosultNotes);
router.post('/createNote', createNote);
router.put('/updateNote', updateNote);

router.get('*', ( res: Response ) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
