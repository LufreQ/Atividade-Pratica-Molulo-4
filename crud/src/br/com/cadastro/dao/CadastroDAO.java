package br.com.cadastro.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.PreparedStatement;

import br.com.cadastro.factory.ConnectionFactory;
import br.com.cadastro.model.Cadastro;

public class CadastroDAO {

	public void save(Cadastro cadastro) {
		
		String sql = "INSERT INTO dados(nome,idade,destino,email,dataCadastro) VALUES(?, ?, ?, ?, ?)";
	
		Connection conn = null;
		
		PreparedStatement pstm = null;
		
		try {
			
			conn = ConnectionFactory.createConnectionToMysql();
		
			pstm = (PreparedStatement) conn.prepareCall(sql);
		
			pstm.setString(1, cadastro.getNome());
			pstm.setInt(2, cadastro.getIdade());
			pstm.setString(3, cadastro.getDestino());
			pstm.setString(4, cadastro.getEmail());
			pstm.setDate(5, new Date(cadastro.getDataCadastro().getTime()));
			
			
			pstm.execute();
		
			System.out.println("Cadastro Salvo com sucesso!");
		}catch (Exception e) {
			e.printStackTrace();
		
		}finally {
			try {
				if (pstm!=null) {
					pstm.close();
				}
				
				if (conn!=null) {
					conn.close();
				}
				
				
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}

	public List<Cadastro> getCadastros() {
		
		String sql = "SELECT * FROM dados";
		
		List<Cadastro> cadastros = new ArrayList<Cadastro>();
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		ResultSet rset = null;
		
		try {
			
			conn = ConnectionFactory.createConnectionToMysql();
			
			pstm = (PreparedStatement) conn.prepareStatement(sql);
			
			rset = pstm.executeQuery();
			
			
			while (rset.next()) {
				Cadastro cadastro = new Cadastro();
				
				
				cadastro.setId(rset.getInt("id"));
				cadastro.setNome(rset.getString("nome"));
				cadastro.setIdade(rset.getInt("idade"));
				cadastro.setDestino(rset.getString("destino"));
				cadastro.setEmail(rset.getString("email"));
				cadastro.setDataCadastro(rset.getDate("datacadastro"));
				
				
				cadastros.add(cadastro);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			
			try {
				
				if(rset!=null) {
					rset.close();
				}
				
				if (pstm!=null) {
					pstm.close();
				}
				
				if (conn!=null) {
					conn.close();
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		return cadastros;
	}
}
