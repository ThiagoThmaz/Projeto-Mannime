Create database Mannime;
Use Mannime;

Create table cadastro(
idCadastro int primary key,
nome varchar(45),
senha varchar(45),
email varchar(45),
cpf char(11));

Create table manga(
idManga int primary key,
titulo varchar(45),
genero varchar(45),
sinopse varchar(145),
dtLancamento date);

Create table usuario(
idUsuario int primary key auto_increment,
nomeFantasia varchar(45),
fkCadastro int,
constraint fkCadast foreign key
(fkCadastro) references cadastro(idCadastro),
fkManga int,
constraint fkMang foreign key
(fkManga) references manga(idManga));

create table anime(
idAnime int primary key auto_increment,
nome varchar(45),
MangaAdp int,
constraint fkManga foreign key
(MangaAdp) references Manga(idManga));









