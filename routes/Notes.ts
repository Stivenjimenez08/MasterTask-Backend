import { Router, Response } from "express";
import { createNote, cosultNotesById, cosultNotes, updateNote, deleteNote} from "../controllers/notes";
const router = Router();

router.get('/consultNoteById/:id', cosultNotesById);
router.get('/consultNoteByUser', cosultNotes);
router.post('/createNote', createNote);
router.put('/updateNote', updateNote);
router.delete('/deleteNote', deleteNote);

router.get('*', ( res: Response ) => {
    
    res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
