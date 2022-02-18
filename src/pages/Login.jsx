import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

export default function Login() {
    
    const {user,setUser} = useContext(userContext);

    const singIn = (event) => {
        event.preventDefault();
        const {email, password} = event.target;
        console.log(email.value,password.value)

        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login", {
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value     //petición
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true,name:user.data.firstName})
        }).catch(error=>setUser({logged:false})) 
    }
    
    return <div className='page'>
            <div className='page--div__contenedor'>
                <p className='page--bienvenida'>{user.logged?"Bienvenido "+user.name:"Aún no has iniciado sesión"}</p>

                <form className='page--form' onSubmit={singIn}>
                    <input className='page--form__fields' type="email" name="email" />
                    <input className='page--form__fields' type="password" name="password" />
                    <button className='page--form__button'>Enviar</button>
                </form>
            </div>

        </div>
     
}
