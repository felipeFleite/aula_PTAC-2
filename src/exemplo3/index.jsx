import { useEffect, useState } from "react";

export default function App() {
  
  const [user,setUser] = useState([]);

  useEffect(() => { 

    const  procurarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUser(dados)
    }
    procurarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
          
        }
      </ul>
    </>
  );
}
