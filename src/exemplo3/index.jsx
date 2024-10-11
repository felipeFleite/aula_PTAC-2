import { useEffect, useState } from "react";

export default function App() {
  
  const [user,setUser] = useState([]);

  useEffect(() => { 

    const  procurarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUser(dados.results[0])
    }
    procurarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
         <li>
            {user?.name.first}
         </li>
         <li>
            {user?.name.last}
         </li> 
         <li>
            {user?.gender}
         </li> 
         <li>
            {user?.title}
         </li> 
      </ul>
    </>
  );
}
