// Core
import * as yup from 'yup';

export const validateRegister = yup.object().shape({
    name: yup.string()
        .required('Required field')
        .min(1, 'Name must be at less 1 characters')
        .max(15, 'Must be 15 characters or less')
        .typeError('Should be a string'),
    surname: yup.string()
        .required('Required field')
        .min(1, 'Surname must be at less 1 characters')
        .max(15, 'Must be 15 characters or less')
        .typeError('Should be a string'),
    desc: yup.string()
        .required('Required field')
        .min(1, 'Desc must be at less 1 characters')
        .max(15, 'Must be 15 characters or less')
})
