function Contato() {
    return(
        <div className="container border"
           style={{marginTop: "50px", width: '50%'}} >
            <h1 style={{marginTop: '25px', textAlign:"center"}}>Contate-Me</h1>
            <form className="row" style={{margin: "25px 80px 75px 100px"}}>
                <label>Nome</label>
                <input type="text" name="nome" required></input>
            
                <label>Email</label>
                <input type="email" name="user_email" className="form-control" required></input>
            
                <label>Mensagem</label>
                <textarea name='mensagem' rows='4' className="form-control" required></textarea>
                <hr></hr>
                <input type="submit" value="Enviar" className="form-control btn btn btn-warning" style={{marginTop: "10px"}}></input>
            </form>
        </div>
    )
}

export default Contato