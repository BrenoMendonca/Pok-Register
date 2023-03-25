import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () =>{

    const times = [
        'Diamond/Pearl/Platinum',
        'Heart Gold/Soul Silver',
        'Black/White',
        'Black 2/White 2'

    ]
    
    const aoSalvar = (evento) =>{
      evento.preventDefeault()
      console.log("Form foi submetido")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Pokemon Capturado </h2>
                <ListaSuspensa obrigatorio = {true}label="Jogos"itens = {times}/>
                <CampoTexto obrigatorio = {true}label="Nome" placeholder="Digite o nome do Pokémon"/>
                <CampoTexto obrigatorio = {true}label="Nature" placeholder="Digite a Nature do Pokémon"/>   
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Botao>Criar Card</Botao> 
            </form>
        </section>
    )
}

export default Formulario