create table Users
(
    id          INTEGER
        primary key autoincrement,
    name        VARCHAR(255),
    login       VARCHAR(255),
    password    VARCHAR(255),
    description TEXT,
    image       VARCHAR(300)
);

create table Matches
(
    matcher INTEGER
        references Users,
    matched INTEGER
        references Users,
    date    TIMESTAMP default CURRENT_TIMESTAMP,
    liked   bool,
    primary key (matcher, matched)
);


INSERT INTO Users (id, name, description, image) VALUES
	('1', 'Crystal, Crawford', 'Bonjour de Australia !', 'https://randomuser.me/api/portraits/women/13.jpg'),
	('2', 'Luzia, Marie', 'Bonjour de Switzerland !', 'https://randomuser.me/api/portraits/women/0.jpg'),
	('3', 'Hedda, Holst', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/64.jpg'),
	('4', 'Isabella, Patel', 'Bonjour de New Zealand !', 'https://randomuser.me/api/portraits/women/30.jpg'),
	('5', 'پارمیس, نكو نظر', 'Bonjour de Iran !', 'https://randomuser.me/api/portraits/women/59.jpg'),
	('6', 'Bianka, Wichmann', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/14.jpg'),
	('7', 'Thea, Wilson', 'Bonjour de New Zealand !', 'https://randomuser.me/api/portraits/women/14.jpg'),
	('8', 'Klara, Gross', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/30.jpg'),
	('9', 'Hanaé, Adam', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/52.jpg'),
	('10', 'Doris, Mckinney', 'Bonjour de Australia !', 'https://randomuser.me/api/portraits/women/29.jpg'),
	('11', 'Taciana, Jesus', 'Bonjour de Brazil !', 'https://randomuser.me/api/portraits/women/9.jpg'),
	('12', 'Elli, Sakala', 'Bonjour de Finland !', 'https://randomuser.me/api/portraits/women/62.jpg'),
	('13', 'Barb, Sims', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/85.jpg'),
	('14', 'Astrid, Halden', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/8.jpg'),
	('15', 'Alolika, Thampy', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/34.jpg'),
	('16', 'Melike, Karadaş', 'Bonjour de Turkey !', 'https://randomuser.me/api/portraits/women/71.jpg'),
	('17', 'Mayte, Téllez', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/64.jpg'),
	('18', 'Georgina, Carvajal', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/64.jpg'),
	('19', 'Louisa, Rousseau', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/40.jpg'),
	('20', 'Rose, Abraham', 'Bonjour de Canada !', 'https://randomuser.me/api/portraits/women/60.jpg'),
	('21', 'Lison, Gonzalez', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/8.jpg'),
	('22', 'آیناز, رضاییان', 'Bonjour de Iran !', 'https://randomuser.me/api/portraits/women/64.jpg'),
	('23', 'Alice, Chow', 'Bonjour de Canada !', 'https://randomuser.me/api/portraits/women/95.jpg'),
	('24', 'Judith, Wichmann', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/10.jpg'),
	('25', 'Gerlind, Rolf', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/10.jpg'),
	('26', 'Laila, Roch', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/82.jpg'),
	('27', 'Beth, Bradley', 'Bonjour de United States !', 'https://randomuser.me/api/portraits/women/79.jpg'),
	('28', 'Ülkü, Adan', 'Bonjour de Turkey !', 'https://randomuser.me/api/portraits/women/9.jpg'),
	('29', 'Caitlin, Lord', 'Bonjour de Ireland !', 'https://randomuser.me/api/portraits/women/2.jpg'),
	('30', 'Erin, Garza', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/81.jpg'),
	('31', 'Melinda, Lidal', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/43.jpg'),
	('32', 'Naja, Christensen', 'Bonjour de Denmark !', 'https://randomuser.me/api/portraits/women/70.jpg'),
	('33', 'Elisa, Calderón', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/21.jpg'),
	('34', 'Margarita, Mesa', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/94.jpg'),
	('35', 'Éveline, Leclerc', 'Bonjour de Switzerland !', 'https://randomuser.me/api/portraits/women/23.jpg'),
	('36', 'Damaris, Egner', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/15.jpg'),
	('37', 'Claire, Nichols', 'Bonjour de Ireland !', 'https://randomuser.me/api/portraits/women/94.jpg'),
	('38', 'سارینا, گلشن', 'Bonjour de Iran !', 'https://randomuser.me/api/portraits/women/10.jpg'),
	('39', 'Leanne, Johnson', 'Bonjour de Canada !', 'https://randomuser.me/api/portraits/women/48.jpg'),
	('40', 'Sanni, Jokela', 'Bonjour de Finland !', 'https://randomuser.me/api/portraits/women/38.jpg'),
	('41', 'Ida, Christensen', 'Bonjour de Denmark !', 'https://randomuser.me/api/portraits/women/77.jpg'),
	('42', 'Carla, León', 'Bonjour de Spain !', 'https://randomuser.me/api/portraits/women/36.jpg'),
	('43', 'Lubna, Van Rutten', 'Bonjour de Netherlands !', 'https://randomuser.me/api/portraits/women/43.jpg'),
	('44', 'Edna, Turner', 'Bonjour de United States !', 'https://randomuser.me/api/portraits/women/32.jpg'),
	('45', 'Kristina, Nordang', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/34.jpg'),
	('46', 'Kimber, Wezeman', 'Bonjour de Netherlands !', 'https://randomuser.me/api/portraits/women/50.jpg'),
	('47', 'Alizee, Barbier', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/16.jpg'),
	('48', 'Asmee, Mardhekar', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/31.jpg'),
	('49', 'Neea, Maijala', 'Bonjour de Finland !', 'https://randomuser.me/api/portraits/women/96.jpg'),
	('50', 'Leonique, Kindt', 'Bonjour de Netherlands !', 'https://randomuser.me/api/portraits/women/67.jpg'),
	('51', 'Astri, Ims', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/12.jpg'),
	('52', 'Tracy, Jackson', 'Bonjour de United States !', 'https://randomuser.me/api/portraits/women/64.jpg'),
	('53', 'Indira, Samaniego', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/61.jpg'),
	('54', 'Megan, Ma', 'Bonjour de Canada !', 'https://randomuser.me/api/portraits/women/71.jpg'),
	('55', 'Zoe, Duncan', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/1.jpg'),
	('56', 'Emma, Lewis', 'Bonjour de New Zealand !', 'https://randomuser.me/api/portraits/women/62.jpg'),
	('57', 'Kelly, Brunet', 'Bonjour de Switzerland !', 'https://randomuser.me/api/portraits/women/23.jpg'),
	('58', 'Aaradhya, Jain', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/17.jpg'),
	('59', 'María Eugenia, Vázquez', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/41.jpg'),
	('60', 'Christin, Koch', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/21.jpg'),
	('61', 'Viënna, Moorman', 'Bonjour de Netherlands !', 'https://randomuser.me/api/portraits/women/20.jpg'),
	('62', 'Tejaswi, Prajapati', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/54.jpg'),
	('63', 'Kimaya, Vernekar', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/37.jpg'),
	('64', 'Mélody, Gonzalez', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/44.jpg'),
	('65', 'Oya, Tunçeri', 'Bonjour de Turkey !', 'https://randomuser.me/api/portraits/women/78.jpg'),
	('66', 'Sita, Kini', 'Bonjour de India !', 'https://randomuser.me/api/portraits/women/36.jpg'),
	('67', 'Biljana, Milutinović', 'Bonjour de Serbia !', 'https://randomuser.me/api/portraits/women/75.jpg'),
	('68', 'Suzy, Mendoza', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/19.jpg'),
	('69', 'Emma, Takala', 'Bonjour de Finland !', 'https://randomuser.me/api/portraits/women/82.jpg'),
	('70', 'Lucy, Salomonsen', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/66.jpg'),
	('71', 'Clara, Guillaume', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/1.jpg'),
	('72', 'Felicia, White', 'Bonjour de United States !', 'https://randomuser.me/api/portraits/women/12.jpg'),
	('73', 'Amber, Lewis', 'Bonjour de New Zealand !', 'https://randomuser.me/api/portraits/women/15.jpg'),
	('74', 'Afşar, Özberk', 'Bonjour de Turkey !', 'https://randomuser.me/api/portraits/women/47.jpg'),
	('75', 'Marina, Orlić', 'Bonjour de Serbia !', 'https://randomuser.me/api/portraits/women/11.jpg'),
	('76', 'Kolodara, Chalenko', 'Bonjour de Ukraine !', 'https://randomuser.me/api/portraits/women/27.jpg'),
	('77', 'Emmanuelle, Pullens', 'Bonjour de Netherlands !', 'https://randomuser.me/api/portraits/women/9.jpg'),
	('78', 'Vega, Horne', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/29.jpg'),
	('79', 'Lucy, Johnston', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/76.jpg'),
	('80', 'Betina, Lysgård', 'Bonjour de Norway !', 'https://randomuser.me/api/portraits/women/62.jpg'),
	('81', 'Gisele, Santos', 'Bonjour de Brazil !', 'https://randomuser.me/api/portraits/women/69.jpg'),
	('82', 'Nuray, Mucha', 'Bonjour de Germany !', 'https://randomuser.me/api/portraits/women/90.jpg'),
	('83', 'Juana, Lorenzo', 'Bonjour de Spain !', 'https://randomuser.me/api/portraits/women/32.jpg'),
	('84', 'Eliza, Chapman', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/49.jpg'),
	('85', 'Marcela, Cuellar', 'Bonjour de Mexico !', 'https://randomuser.me/api/portraits/women/54.jpg'),
	('86', 'Dantela, Gomes', 'Bonjour de Brazil !', 'https://randomuser.me/api/portraits/women/87.jpg'),
	('87', 'Holly, Carroll', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/48.jpg'),
	('88', 'Ella, Larsen', 'Bonjour de Denmark !', 'https://randomuser.me/api/portraits/women/6.jpg'),
	('89', 'Nina, Hubert', 'Bonjour de France !', 'https://randomuser.me/api/portraits/women/42.jpg'),
	('90', 'Alisa, Justi', 'Bonjour de Finland !', 'https://randomuser.me/api/portraits/women/19.jpg'),
	('91', 'Zeferina, Gomes', 'Bonjour de Brazil !', 'https://randomuser.me/api/portraits/women/77.jpg'),
	('92', 'Josefina, Fabre', 'Bonjour de Switzerland !', 'https://randomuser.me/api/portraits/women/12.jpg'),
	('93', 'Dragana, Paunović', 'Bonjour de Serbia !', 'https://randomuser.me/api/portraits/women/67.jpg'),
	('94', 'Zoe, Fowler', 'Bonjour de Ireland !', 'https://randomuser.me/api/portraits/women/33.jpg'),
	('95', 'بهاره, پارسا', 'Bonjour de Iran !', 'https://randomuser.me/api/portraits/women/44.jpg'),
	('96', 'Astrid, Poulsen', 'Bonjour de Denmark !', 'https://randomuser.me/api/portraits/women/91.jpg'),
	('97', 'Alice, Little', 'Bonjour de Australia !', 'https://randomuser.me/api/portraits/women/34.jpg'),
	('98', 'Jade, Ross', 'Bonjour de Canada !', 'https://randomuser.me/api/portraits/women/95.jpg'),
	('99', 'Kely, Almeida', 'Bonjour de Brazil !', 'https://randomuser.me/api/portraits/women/48.jpg'),
	('100', 'Lauren, Fox', 'Bonjour de United Kingdom !', 'https://randomuser.me/api/portraits/women/2.jpg');
