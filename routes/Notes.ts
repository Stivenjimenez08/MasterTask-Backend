import { Router, Response } from "express";
import { createNote, cosultNotesById, cosultNotesByPriority, cosultNotesByState, cosultNotes, updateNote, deleteNote} from "../controllers/notes";
const router = Router();

router.get('/consultNoteByUser/:id', cosultNotes);
router.get('/consultNoteById/:id', cosultNotesById);
router.get('/consultNoteByState/:id', cosultNotesByState);
router.get('/consultNoteByPriority/:id', cosultNotesByPriority);


router.post('/createNote', createNote);
router.put('/updateNote', updateNote);
router.delete('/deleteNote', deleteNote);

router.get('*', ( res: Response ) => {
     res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
