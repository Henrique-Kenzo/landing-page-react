import { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  const handleSubscribe = async(e: React.FormEvent) => {
    e.preventDefault()

    try {
    const resposta = await fetch('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, nome: nome, cargo: cargo })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert("Deu bom!" + dados.message);
      setEmail('');
      setNome('');
      setCargo('');
    }else {
      alert("Ops!" +dados.error);
    }
  } catch (error) {
    console.log("Erro na requisição:", error);
    alert("Erro ao conectar com o servidor. O backend está rodando?");
  }

  }

  return (
    <div className="relative isolate bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8 min-h-screen overflow-hidden">
      
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Em breve algo novo</h2>
        <p className="mt-2 text-lg text-zinc-400">Entre para a nossa lista exclusiva e receba atualizações do projeto.</p>
      </div>

      <form onSubmit={handleSubscribe} className="mx-auto mt-16 max-w-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-4"> 
          <div className="flex-1">
            <input 
              type="text" 
              required
              placeholder="Nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              className="block w-full rounded-md bg-white/5 px-4 py-2.5 text-base text-white outline-1 outline-white/10 focus:outline-2 focus:outline-emerald-500 transition-all placeholder:text-zinc-500" 
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md bg-white/5 px-4 py-2.5 text-base text-white outline-1 outline-white/10 focus:outline-2 focus:outline-emerald-500 transition-all placeholder:text-zinc-500"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4"> 
          <select 
            required
            value={cargo} 
            onChange={(e) => setCargo(e.target.value)} 
            className="flex-1 block w-full rounded-md bg-white/5 px-4 py-2.5 text-base text-white outline-1 outline-white/10 focus:outline-2 focus:outline-emerald-500 transition-all placeholder:text-zinc-500 [&>option]:bg-zinc-800"
          >
            <option value="">Selecione seu cargo</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Designer">Designer</option>
            <option value="Gerente">Gerente</option>
            <option value="Outro">Outro</option> 
          </select>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button
            type="submit"
            className="block w-full sm:w-auto rounded-md bg-emerald-500 px-8 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-emerald-500 transition-colors cursor-pointer"
          >
            Quero saber mais!
          </button>
        </div>
      </form>
    </div>
  )
}


export default App