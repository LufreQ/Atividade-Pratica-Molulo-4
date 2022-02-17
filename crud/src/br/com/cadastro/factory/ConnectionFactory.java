package br.com.cadastro.factory;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {

	private static final String USERNAME = "root";
	
	private static final String PASSWORD = "";
	
	private static final String DATABASE_URL= "jdbc:mysql://localhost:3306/cadastro";


	public static Connection createConnectionToMysql() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
	
	Connection connection = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
	
	return connection;
	
	}

 public static void main(String[] args) throws Exception {
	Connection con = createConnectionToMysql();

 if (con!=null) {
	 System.out.println("Conexão Criada Com sucesso!");
	 con.close();
 }
 
 }


}
