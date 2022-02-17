import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap"

function Conf() {
    return(
        <div className="container border"
           style={{marginTop: "50px", width: '50%'}} >
            <h1 style={{marginTop: '25px', textAlign:"center"}}>Cadastre-Se</h1>
            <p style={{marginTop: '25px', textAlign:"center"}}>Quando houver passagens para você lhe enviaremos um email!</p>
            <form className="row" style={{margin: "25px 80px 75px 100px"}}>
                <label>Nome</label>
                <input type="text" name="nome" required></input>
            
                <label>Email</label>
                <input type="email" name="user_email" className="form-control" required></input>
            


                <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Confirme Sua Senha</Form.Label>
            <Form.Control type="password" placeholder="Confirmar Senha" required/>
            </Form.Group>


                <hr></hr>
                <Button variant="dark"><a href='done'>Enviar</a></Button>
                


            </form>
        </div>
    )
}

export default Conf