import {Exam} from '../exam';
import {SECTORS} from './sectors';
export const EXAMS:Exam[]=[
    {
        description:'ExamA',
        sector:SECTORS[0],
        biologicMaterial:'material 1',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamB',
        sector:SECTORS[0],
        biologicMaterial:'material 2',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamC1',
        sector:SECTORS[1],
        biologicMaterial:'material 1',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamD1',
        sector:SECTORS[1],
        biologicMaterial:'material 2',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamA2',
        sector:SECTORS[2],
        biologicMaterial:'material 1',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamB2',
        sector:SECTORS[2],
        biologicMaterial:'material 2',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamC3',
        sector:SECTORS[3],
        biologicMaterial:'material 1',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamC3',
        sector:SECTORS[3],
        biologicMaterial:'material 2',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamD4',
        sector:SECTORS[0],
        biologicMaterial:'material 1',
        timeLimit: Math.floor(Math.random()*8),
    },
    {
        description:'ExamA4',
        sector:SECTORS[1],
        biologicMaterial:'material 2',
        timeLimit: Math.floor(Math.random()*8),
    },
]