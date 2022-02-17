package br.com.cadastro.aplicado;

import java.util.Date;

import br.com.cadastro.dao.CadastroDAO;
import br.com.cadastro.model.Cadastro;

public class Main {

	public static void main(String[] args) {
		
		// Aqui Você pode adicionar novos cadastros:
		
		CadastroDAO cadastroDao = new CadastroDAO();
		
		Cadastro cadastro = new Cadastro();
		cadastro.setNome("Luiz Freitas");
		cadastro.setIdade(18);
		cadastro.setDestino("São Paulo");
		cadastro.setEmail("Luiz.Freitas@recode.org.br");
		cadastro.setDataCadastro(new Date());
		
		cadastroDao.save(cadastro);
		
		// IMPORTANTE:
		
		//basta possuir uma tabela de banco de dados com o nome: cadastro
		// e uma tabela também chamada dados
	
	for(Cadastro c : cadastroDao.getCadastros()) {
		
		System.out.println("Cadastro: "+ c.getNome());
		
	}
	
	}

}
