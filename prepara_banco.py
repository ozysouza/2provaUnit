import MySQLdb
print('Conectando...')
conn = MySQLdb.connect(user='root', passwd='admin', host='localhost', port=3306)

# Descomente se quiser desfazer o banco...
#conn.cursor().execute("DROP DATABASE `jogoteca`;")
#conn.commit()

criar_tabelas = '''SET NAMES utf8;
    CREATE DATABASE `primeiroJogo` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
    USE `primeiroJogo`;
    CREATE TABLE `jogo` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `nome` varchar(50) COLLATE utf8_bin NOT NULL,
      `categoria` varchar(40) COLLATE utf8_bin NOT NULL,
      `console` varchar(20) NOT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
    CREATE TABLE `usuario` (
      `id` varchar(8) COLLATE utf8_bin NOT NULL,
      `nome` varchar(20) COLLATE utf8_bin NOT NULL,
      `senha` varchar(8) COLLATE utf8_bin NOT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;'''

conn.cursor().execute(criar_tabelas)

# inserindo usuarios
cursor = conn.cursor()
cursor.executemany(
      'INSERT INTO jogoteca.usuario (id, nome, senha) VALUES (%s, %s, %s)',
      [
            ('oziel', 'Riako', '123456'),
            ('davidson', 'Galeroso', '654321'),
            ('leandro', 'Fotografo', '456789')
      ])

cursor.execute('select * from primeiroJogo.usuario')
print(' -------------  Usuários:  -------------')
for user in cursor.fetchall():
    print(user[1])

# inserindo jogos
cursor.executemany(
      'INSERT INTO primeiroJogo.jogo (nome, categoria, console) VALUES (%s, %s, %s)',
      [
            ('League of Legends', 'Ação', 'PC'),
            ('Fifa 2021', 'Esporte', 'PS5'),
            ('Gof of War', 'Guerra', 'PS4'),
      ])

cursor.execute('select * from jogoteca.jogo')
print(' -------------  Jogos:  -------------')
for jogo in cursor.fetchall():
    print(jogo[1])

# commitando senão nada tem efeito
conn.commit()
cursor.close()