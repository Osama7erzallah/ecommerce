import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import 'swiper/css';
const queryClient=new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <QueryClientProvider client={queryClient}>

    <ToastContainer/>
    <App />
    </QueryClientProvider>
    </>
)
