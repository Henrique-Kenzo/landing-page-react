import { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [tel, setTel] = useState('')

  const handleSubscribe = async(e: React.FormEvent) => {
    e.preventDefault()

    try {
    const resposta = await fetch('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: nome, tel: tel, email: email, cargo: cargo })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert("Deu bom!" + dados.message);
      setEmail('');
      setNome('');
      setCargo('');
      setTel('');
    }else {
      alert("Ops!" +dados.error);
    }
  } catch (error) {
    console.log("Erro na requisição:", error);
    alert("Erro ao conectar com o servidor. O backend está rodando?");
  }

  }

  return (
    <div className="relative bg-[#00D492] rounded-xl shadow-md p-6 w-[1000px] flex flex-col md:flex-row gap-12 items-center justify-center max-w-[1000px] mx-auto">
      
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 whitespace-nowrap">💻 Página em construção</h2>
        <p className="text-zinc-100 text-lg sm:text-xl leading-relaxed">Essa landing faz parte de um projeto em desenvolvimento.<br />
Estamos testando layout, integração e fluxo de cadastro.<br />
Se quiser acompanhar a evolução ou apoiar o projeto, deixe seu contato.</p>
      </div>

      <div className="flex-1">
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <input 
              type="text" 
              required
              placeholder="Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              className="w-full px-4 py-3 rounded-lg bg-white text-zinc-700 outline-none focus:ring-2 focus:ring-emerald-500 transition" 
            />

            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-zinc-700 outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            <input
              type="tel"
              required
              placeholder="Seu telefone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-zinc-700 outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

          <select 
            required
            value={cargo} 
            onChange={(e) => setCargo(e.target.value)} 
            className="flex-1 w-full px-4 py-3 rounded-lg bg-white text-zinc-700 outline-none focus:ring-2 focus:ring-emerald-500 transition"
          >
            <option value="">Selecione seu cargo</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Designer">Designer</option>
            <option value="Gerente">Gerente</option>
            <option value="Outro">Outro</option> 
          </select>
        
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold"
          >
            Quero saber mais!
          </button>
        </form>
    </div>
    </div>
  )
}


export default App