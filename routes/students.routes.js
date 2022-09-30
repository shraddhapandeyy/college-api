import express from 'express';
import { addStudent, deleteStudent, getStudent, getStudents, updateStudent } from '../controllers/Students.js';

const router = express.Router();

// Do crud operations here
let Students = []

router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/', addStudent)
router.delete('/:id', deleteStudent)
router.patch('/:id', updateStudent)


export default router;
