
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';     
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [mostrarsenha,setMostrarsenha] = useState(false);
    const {register,handleSubmit} = useForm();
    const {setLogado} = useContext(Context)
    const navigate = useNavigate();
    function logar(dados){
        if (dados.email == "pedroitalocampos@gmail.com" && dados.senha =="1234"){
             setLogado(true);
             navigate('/home');
        }
    }
    return ( 
        
        <>
           <div className='bg-primary-500 h-screen flex align-items-center justify-content-center mb-1 px-3 '>
                <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-0 p-3 border-round-md '>
                    <h3 className='text-center text-4x1'>Seja Bem-vido</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText 
                        id="email" 
                        type='email' 
                        placeholder="email@email.com" 
                        className='mb-3 w-full'
                        {...register('email',{required:true})}
                        />
                    
                    <label htmlFor="senha" className='block uppercase font-bold text-sm'>Senha</label>

                   <div className='mb-3'>
                        <IconField>
                                <InputIcon 
                                    className={`pi ${mostrarsenha?'pi-eye' : 'pi-eye-slash'}  cursor-pointer`}
                                    onClick={()=>setMostrarsenha(!mostrarsenha)}
                                />
                                <InputText 
                                    id='senha'
                                    type={mostrarsenha ?'text':'password'}
                                    placeholder='*******'
                                    className=' w-full'
                                    {...register('senha',{required:true})}

                                />
                            </IconField>
                   </div>
                    <Button label="Entrar" type='submit' className='w-full'/>

                </form>
           </div>
        </>
     );
}
 
export default Login;