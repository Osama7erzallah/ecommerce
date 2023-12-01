import React from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { registerSchema }from '../validation/Validate.jsx'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './Register.css';
import logo1 from './../img/logo1.png';
import logo2 from './../img/logo2.png';

export default function Register() {

    const initialValues= {

        userName: "",
            password: "",
                email: "",
image:'',
        }
    const onSubmit = async users => {
    const formData =new FormData();
        formData.append('userName',users.userName)
        formData.append('email', users.email)
        formData.append('password', users.password)
        formData.append('image', users.image)
        const { data } = await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);
if(data.message=='success'){
    formik.resetForm();
        toast.success(`Account successfully created`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
        toast.info(`Confirm Your Email Please`, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }}

    const handleFeiled=(event)=>{
formik.setFieldValue('image',event.target.files[0])
    }
   
    const formik = useFormik({
        initialValues,
        onSubmit: onSubmit,
        validationSchema: registerSchema,
});

    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',
            title: 'User Name',
            value:formik.values.username,
        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'User Email',
            value: formik.values.email,

        }, {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'User Password',
            value: formik.values.password,

        },
        {
            id: 'image',
            type: 'file',
            name: 'image',
            title: 'user image',
            onChange:handleFeiled ,

        }
        

    ];

    const renderInputs = inputs.map((input, i) =>

    <Input id={input.id} 
    key={i}
    type={input.type} 
    title={input.title}
    name={input.name} 
    value={input.value}
    onChange={input.onChange||formik.handleChange}
    onBlur={formik.handleBlur}
            touched={formik.touched}
    errors={formik.errors}
    
        />

    )


    return (
        <div className='register row'>
<div className="register1 col-sm-6">
<img src={logo1}  alt="logo" className='logo1' />
        <div className='register_container'>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit} encType="multipart/>form-data">
            {renderInputs}
                        <input type="submit" disabled={!formik.isValid} className="btn r_btn" />
                    


            </form>
</div>

        </div>
            <div className="register2 col-sm-6 ">
                <img src={logo2} alt="logo" className='logo2' />

            </div>
        </div>


    )
}
