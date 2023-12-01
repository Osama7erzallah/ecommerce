import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { loginSchema } from '../validation/Validate.jsx'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './../register/Register.css';
import logo1 from './../img/logo1.png';
import logo2 from './../img/logo2.png';
import { useNavigate } from 'react-router-dom';

export default function Login({ saveUser}) {
const navigat = useNavigate();
    const initialValues = {
        password: "",
        email: "",
    }

    const onSubmit = async users => {

        const { data } = await axios.post('https://ecommerce-node4.vercel.app/auth/signin', users);

        if (data.message == 'success') {

            localStorage.setItem('token', data.token);
            saveUser();
            toast.success(`Welcome`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigat('/home');


        }

    }


    const formik = useFormik({
        initialValues,
        onSubmit: onSubmit,
        validationSchema: loginSchema,
    });

    const inputs = [
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'User Email',
            value: formik.values.email,

        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'User Password',
            value: formik.values.password,

        },


    ];

    const renderInputs = inputs.map((input, i) =>

        <Input id={input.id}
            key={i}
            type={input.type}
            title={input.title}
            name={input.name}
            value={input.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}

        />

    )

    return (
        
        <div className='register row'>
            <div className="register1 col-sm-6">
                <img src={logo1} alt="logo" className='logo1' />
                <div className='register_container'>
                    <h2>login</h2>
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
