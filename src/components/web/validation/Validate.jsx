import * as yup from 'yup'

export const registerSchema=yup.object({
    userName: yup.string().required('userName is required').min(3, 'less than 3 character').max(25,'more than 25 character'),
    password: yup.string().required('password is required').min(3, 'less than 3 character').max(25, 'more than 25 character'),
    email: yup.string().required('email is required').email()

})