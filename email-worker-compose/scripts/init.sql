create database email_sender;

#Conexao com o banco
\c email_sender

#Cricao da tabela
create table emails (
    id serial not null,
    data timestamp not null default current_timestamp,
    assunto varchar (100) not null,
    mensagem varchar (250) not null

);
