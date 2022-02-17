import world from '../../img/world.png'
import viajando from '../../img/viajando.png'
import './Home.modules.css'
function Home() {
    return(
      <section className="home_container">
          <h1>Bem-vindo(a)</h1>
        <p>Somos uma agência de viagens com foco na praticidade e no custo-beneficio!</p>
        
        <img src={world}></img>
        
      
      <br></br>
      <br></br>
      
      <div>
          <img style={{marginRight: "1000px"}} src={viajando}></img>
          <h2>Agende Sua viajem de maneira fácil e rápido, somente passando seu contato</h2>

      </div>
        
      <br></br>
      <br></br>
      <br></br>
      

      <button className='btn btn-outline-primary'><a href='./Destinos'>Conheça novos Destinos</a></button> 
      </section>
    
    
    
    
    )
}

export default Home