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
    
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Pokemon Capturado </h2>
                <ListaSuspensa label="Jogos"itens = {times}/>
                <CampoTexto label="Nome" placeholder="Digite o nome do Pokémon"/>
                <CampoTexto label="Nature" placeholder="Digite a Nature do Pokémon"/>   
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Botao>Criar Card</Botao> 
            </form>
        </section>
    )
}

export default Formulario