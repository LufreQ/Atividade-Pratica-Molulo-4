create database cadastro;

create table dados (
    id int null auto_increment primary key,
    nome varchar(40),
    idade int,
    destino varchar(40),
    email varchar(40),
dataCadastro date)