import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () =>{
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Pokemon Capturado </h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do Pokémon"/>
                <CampoTexto label="Nature" placeholder="Digite a Nature do Pokémon"/>   
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario