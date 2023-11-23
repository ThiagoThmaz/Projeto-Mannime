Create database Mannime;
Use Mannime;

Create table usuario(
idCadastro int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
cpf char(11));

select * from usuario;

Create table quiz(
    idQuiz int primary key auto_increment,
    pontos char(10),
    acore varchar(50),
    fkCadastro int,
	constraint fkCadast foreign key
    (fkCadastro) references usuario(idCadastro));
    
    describe quiz;
    
    select * from quiz;