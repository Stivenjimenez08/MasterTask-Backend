import { Router, Response } from "express";
import { createNote, cosultNotesById, cosultNotesByFilter, cosultNotesByState, cosultNotes, updateNote, deleteNote} from "../controllers/notes";
const router = Router();

router.get('/consultNoteByUser/:id', cosultNotes);
router.get('/consultNoteById/:id', cosultNotesById);
router.get('/consultNoteByState/:idState/:idUser', cosultNotesByState);
router.get('/consultNoteByFilter/:idState/:idPriority/:idUser', cosultNotesByFilter);


router.delete('/deleteNote/:id', deleteNote);
router.post('/createNote', createNote);
router.put('/updateNote', updateNote);

router.get('*', ( res: Response ) => {
     res.status(404).json({
        msg: 'Error 404 | Page Not Found'
    })
})

export default router;
