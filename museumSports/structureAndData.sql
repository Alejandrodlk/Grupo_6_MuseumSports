CREATE DATABASE  IF NOT EXISTS `museumsport14` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `museumsport14`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: museumsport14
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `athletes`
--

DROP TABLE IF EXISTS `athletes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `athletes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `alias` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_athletes_categories_idx` (`categoryId`),
  CONSTRAINT `FK_athletes_categories` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `athletes`
--

LOCK TABLES `athletes` WRITE;
/*!40000 ALTER TABLE `athletes` DISABLE KEYS */;
INSERT INTO `athletes` VALUES (1,'Leonel','Messi','La pulga','k',1),(2,'Diego Armando','Maradona','Dios','k',1),(3,'Sergio','Aguero','El kun','k',1),(4,'Cristiano','Ronaldo','El bicho','k',1),(5,'Neymar','Neymar','Ney','k',1),(6,'Roman','Riquelme','Riquelme','k',2),(7,'Ariel','Ortega','El Burrito','k',2),(8,'Fernando','Cavenagui','Cavegol','k',2),(9,'Marcelo','Gallardo','El Muñeco','k',2),(10,'Juan Sebastian','Veron','La Brujita','k',2),(11,'Michael','Jordan','','k',3),(12,'Kobe','Bryant',NULL,'k',3),(13,'Manu','Ginobilli',NULL,'k',3),(14,'Luis','Scola',NULL,'k',3),(15,'Scottie','Pippen',NULL,'k',3),(16,'Roger','Federer',NULL,'k',4),(17,'David','Nalbandian',NULL,'k',4),(18,'Rafael','Nadal',NULL,'k',4),(19,'Novak','Djokovic',NULL,'k',4),(20,'Juan Martin','Del Potro','Delpo','k',4),(21,'Muhammad','Ali',NULL,'k',5),(22,'Floyd','Mayweather',NULL,'k',5),(23,'Carlos','Monzon','','K',5),(24,'Marcos','Maidana','El Chino','k',5),(25,'Conor','McGregor',NULL,'k',5);
/*!40000 ALTER TABLE `athletes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `banner` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Futbol Internacional',NULL),(2,'Futbol Nacional',NULL),(3,'Basquet',NULL),(4,'Tennis',NULL),(5,'Boxeo',NULL),(6,'Otros',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `primary` varchar(45) NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_images_products_idx` (`productId`),
  CONSTRAINT `FK_images_products` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'image-Product-1657551466994.jpg','1',1),(2,'image-Product-1657552486617.jpg','1',2),(3,'image-Product-1657552698584.jpg','1',3),(4,'image-Product-1657552970758.jpg','1',4),(5,'image-Product-1657553169794.webp','1',5),(6,'image-Product-1657553280367.jpg','1',6),(7,'image-Product-1657553389919.jpg','1',7),(8,'image-Product-1657553478612.jpg','1',8),(9,'image-Product-1657553609319.jpg','1',9),(10,'image-Product-1657553698098.jpg','1',10),(11,'image-Product-1657553807448.jpg','1',11),(12,'image-Product-1657553930075.jpg','1',12),(13,'image-Product-1657554024022.jpg','1',13),(14,'image-Product-1657554143169.jpg','1',14),(15,'image-Product-1657554213722.jpg','1',15),(16,'image-Product-1657554279585.jpg','1',16),(17,'image-Product-1657554356257.jpg','1',17),(18,'image-Product-1657554445947.jpg','1',18),(19,'image-Product-1657554514950.jpeg','1',19),(20,'image-Product-1657554606571.jpg','1',20),(21,'image-Product-1657554670422.jpg','1',21),(22,'image-Product-1657554733276.jpg','1',22),(23,'image-Product-1657554834812.jpg','1',23),(24,'image-Product-1657554910617.jpg','1',24),(25,'image-Product-1657554963423.jpg','1',25),(30,'images-Product-1657785298530.webp','1',36);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int unsigned NOT NULL,
  `discount` int unsigned DEFAULT NULL,
  `categoryId` int NOT NULL,
  `athleteId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_products_categories_idx` (`categoryId`),
  KEY `FK_products_athletes_idx` (`athleteId`),
  CONSTRAINT `FK_products_athletes` FOREIGN KEY (`athleteId`) REFERENCES `athletes` (`id`),
  CONSTRAINT `FK_products_categories` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Camiseta Barcelona Messi Final Champions','Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.',323000,25,1,1),(2,'Botines Maradona Final mundial 1986','Diego Armando Maradona1(Lanús Oeste, 30 de octubre de 1960-Dique Luján, 25 de noviembre de 2020)7​ fue un futbolista y entrenador argentino. Como jugador, se desempeñó como mediocampista ofensivo o delantero, y es reconocido por numerosos especialistas,8​9​ exfutbolistas y personalidades internacionales10​ como «uno de los mejores futbolistas en la historia Asimismo, ha sido catalogado por algunos medios como el «mejor jugador en la historia de la Copa Mundial», de la cual fue designado como el mejor jugador en su edición de 1986.',799000,0,1,2),(3,'Camiseta Aguero final Bundes Liga','Era un 13 de mayo de 2012, el United había ganado 1-0 al Sunderland y se ponía como virtual campeón de Inglaterra, pero no contaba con el partido épico del Kun en el Ethiad. El City perdía 1-2 al 90\' ante el Queens Park Rangers, pero al 90+1\' Edin Dzeko puso el empate y lo mejor estaba guardado para dos minutos después.',161000,20,1,3),(4,'Pelota gol de cabeza C7Ronaldo','Cristiano Ronaldo dos Santos Aveiro (pronunciación en portugués: /kɾiʃtiɐnu ʁuaɫdu/; Funchal, Madeira; 5 de febrero de 1985), más conocido como Cristiano Ronaldo, Cristiano o CR7, es un futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico.',31500,15,1,4),(5,'Botines Neymar','Neymar da Silva Santos Júnior (pronunciación en portugués: /nejmaʁ dɐ siwvɐ sɐ̃tusʒũɲoʁ/; Mogi das Cruzes, São Paulo; 5 de febrero de 1992), conocido como Neymar Júnior o simplemente Neymar, es un futbolista brasileño que juega como delantero en el Paris Saint-Germain F. C. de la Ligue 1 de Francia, y en la selección de fútbol de Brasil. Reconocido como un destacado goleador y playmaker, es ampliamente considerado uno de los mejores jugadores del mundo.Surgió de las categorías juveniles del Santos, donde hizo su debut profesional a los 17 años.Considerado uno de los juveniles más prometedores del mundo,7​ ganó tres Campeonatos Paulistas seguidos, una Copa de Brasil, y una Copa Libertadores, —donde fue máximo goleador y mejor jugador del certamen',38000,10,1,5),(6,'Gorro Riquelme final libertadores','Juan Román Riquelme (San Fernando, 24 de junio de 1978) es un exfutbolista argentino, y actual vicepresidente y director deportivo del Club Atlético Boca Juniors.2​ Como jugador, se desempeñaba en la posición de enganche, donde se destacó como uno de los mejores jugadores de su generación.3​4​5​6​ Además, Riquelme es ampliamente nombrado uno de los mejores jugadores de la historia de Boca Juniors,7​8​9​ debido a su desempeño por 13 temporadas (1996-2014), en las que consiguió ganar con el club tres Copas Libertadores de América y una Copa Intercontinental, entre otros títulos.',20000,20,2,6),(7,'Camiseta Ortega despedida','Arnaldo Ariel Ortega (Ledesma, Jujuy, Argentina, 4 de marzo de 1974), mejor conocido como El Burrito Ortega, es un exfutbolista argentino, que se desempeñaba como enganche. Actualmente es coordinador del selectivo infanto-juvenil del Club Atlético River Plate.1​ Jugador histórico de River Plate, es reconocido como uno de los mediocampistas más desequilibrantes de la historia del fútbol argentino. Se destacó por su gran calidad técnica y facilidad para la gambeta, con un estilo muy particular basado en repentinos enganches y cambios de ritmo a la hora de eludir, además de su facilidad para definir de vaselina',63000,0,2,7),(8,'Camiseta Cavenaghi 100 goles','Fernando Ezequiel Cavenaghi (Eduardo O\'Brien, Bragado, Buenos Aires, Argentina, 21 de septiembre de 1983) es un exfutbolista argentino que jugaba como delantero. Es el décimo máximo goleador en la historia de River Plate (112 goles), donde obtuvo cinco campeonatos locales y tres internacionales. Durante su experiencia en Europa, se destacó especialmente en el Girondins de Burdeos. Allí fue elegido Mejor Jugador Extranjero de la Ligue 1 en 2008.',15000,5,2,8),(9,'Saco y corbata Gallardo Superclasico','Marcelo Daniel Gallardo (Merlo, Buenos Aires; 18 de enero de 1976) es un exfutbolista y entrenador argentino. Dirige al Club Atlético River Plate desde 2014. En AS Mónaco fue elegido mejor jugador de la Liga Francesa en 2000. Con la selección argentina disputó 46 partidos, anotó 14 goles y fue convocado a los Mundiales de Francia 1998 y Corea del Sur/Japón 2002.Dirigió a Nacional de Uruguay, con el cuál conquistó el Campeonato de Primera División 2011-12, siendo este el primer título de su carrera como entrenador de fútbol.',98000,10,2,9),(10,'Camiseta Veron despedida estudiantes','Juan Sebastián Verón (La Plata, 9 de marzo de 1975) es un exfutbolista argentino y actual vicepresidente del club Estudiantes de La Plata de la Primera División de Argentina. Verón, tanto por su trayectoria durante 11 temporadas con el club, así como su destacado paso por Europa, es considerado una de las máximas leyendas de Estudiantes y del fútbol argentino, destacandóse también como uno de los mejores mediocampistas',43900,10,2,10),(11,'Iconicas zapatillas Jordan','Michael Jeffrey Jordan (Nueva York; 17 de febrero de 1963) es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.2​ Se retiró definitivamente en 2003 en los Washington Wizards, tras haberlo hecho en dos ocasiones anteriores, en 1993 y 1999, después de haber jugado 13 temporadas en los Chicago Bulls.',353000,5,3,11),(12,'Camiseta Lakers Bryant','Kobe Bean Bryant (Filadelfia, Pensilvania; 23 de agosto de 1978-Calabasas, California; 26 de enero de 2020)5​ fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la National Basketball Association (NBA), todas ellas en Los Angeles Lakers.Hijo del también exjugador de baloncesto Joe Bryant,6​ está considerado como uno de los mejores baloncestistas de todos los tiempos. Ganó cinco campeonatos de la NBA con los Lakers y dos medallas de oro olímpicas con la selección estadounidense, fue dieciocho veces All-Star ',280000,10,3,12),(13,'Medalla dorada Ginobili atenas 2004','Emanuel David Ginóbili (Bahía Blanca, 28 de julio de 1977), más conocido como Manu Ginóbili, es un exjugador de baloncesto argentino, considerado por muchos especialistas, deportistas y entrenadores de este deporte como el mejor jugador de la Argentina, uno de los cien mejores y más influyentes de la historia de la NBA2​3​4​5​ y uno de los mejores provenientes de la FIBA de todos los tiempos.6​7​ Jugaba en la posición de escolta y formó parte de los San Antonio Spurs de la NBA durante 16 temporadas, desde 2002 hasta 2018, hasta que el 27 de agosto de 2018 anunció su retirada del baloncesto profesional.',202000,5,3,13),(14,'Camiseta Scola seleccion','Luis Alberto Scola (Buenos Aires, 30 de abril de 1980) es un exjugador de baloncesto argentino, que disputó 25 temporadas como profesional, repartidas entre Argentina, Europa y la NBA. Con 2,06 metros de altura jugaba en la posición de ala-pívot.Sus inicios profesionales fueron en Club Ferro Carril Oeste, en la liga nacional de su país. También se destacó en la NBA, en la liga ACB (liga española de baloncesto).',93000,10,3,14),(15,'Camiseta Bulls Pippen','Scotty Maurice Pippen1(Hamburg, Arkansas, 25 de septiembre de 1965), comúnmente escrito como Scottie Pippen, es un exjugador de baloncesto estadounidense. Aunque su polivalencia le permitía ocupar distintas posiciones en el campo, jugaba preferentemente en la posición de alero.',153000,3,3,15),(16,'Raqueta Roger Federer','Roger Federer (Basilea, Suiza; 8 de agosto de 1981) es un tenista profesional suizo. Está considerado como el mejor tenista de toda la historia en pistas de hierba1 y uno de los mejores de todos los tiempos.15​Hasta la fecha, ha sido ganador de 20 torneos de Grand Slam, cifra que lo ubica en segundo lugar en el palmarés, empatado con el serbio Novak Djokovic y sólo superado por el español Rafael Nadal, con 22. Ha conseguido vencer el Abierto de Australia en seis ocasiones, el Torneo de Roland Garros en una ocasión, el Campeonato de Wimbledon en ocho ocasiones (siendo el tenista que más veces lo ha conseguido en toda la historia) y el Abierto de Estados Unidos en cinco ocasiones ',230000,15,4,16),(17,'Camiseta seleccion Nalbandian copa davis','David Nalbandian (Unquillo, 1 de enero de 1982) es un extenista profesional argentinoue actualmente se desempeña como piloto de rally.2Alcanzó el 3.º puesto del ranking ATP en marzo de 2006, luego de haber conquistado el Torneo de Maestros de 2005 ante Roger Federer, en noviembre de ese año. Llegó a las semifinales de todos los Grand Slam del circuito, además de ser el único finalista argentino en Wimbledon, en la edición de 2002, perdiendo el partido ante el australiano Lleyton Hewitt. Además ganó el Masters de París 2007 y el Masters de Madrid 2007',25000,5,4,17),(18,'Vincha Rafael Nadal US Open','Está considerado como el mejor tenista de toda la historia en pistas de tierra batida 8​9​10​ y uno de los mejores de todos los tiempos. Hasta la fecha, es el tenista masculino con mayor número de títulos de Grand Slam en individuales, con 22, por delante del suizo Roger Federer y del serbio Novak Djokovic, ambos con 20. Ha conseguido el Abierto de Australia en dos ocasiones, el Torneo de Roland Garros en catorce ediciones (siendo el tenista que más veces lo ha conseguido en toda la historia), el Campeonato de Wimbledon en dos ocasiones y el Abierto de Estados Unidos en cuatro ocasiones. Se encuentra en segunda posición, tras el serbio ',469000,5,4,18),(19,'Raqueta rota Djokovic','Es considerado como uno de los mejores tenistas de toda la historia en pista dura y uno de los mejores de todos los tiempos.8​9​10​11​ Hasta la fecha, ha sido ganador de 20 torneos de Grand Slam, cifra que lo ubica en segundo lugar en el palmarés, empatado con el suizo Roger Federer y sólo superado por el español Rafael Nadal, con 22. Ha conseguido vencer el Abierto de Australia en nueve ocasiones (siendo el tenista que más veces lo ha conseguido en toda la historia), dos veces el Torneo de Roland Garros, seis',73000,10,4,19),(20,'Camiseta Del Potro Final US Open 2009','Juan Martín Del Potro (Tandil, 23 de septiembre de 1988) es un extenista profesional argentino que comenzó a competir en 2005.Comenzó a practicar tenis a los siete años.3​ En agosto de 2008, se convirtió en el primer jugador en la historia de la ATP en ganar cuatro torneos consecutivos en condición de debutante. También, consiguió la segunda mejor racha de victorias en 2008 y la segunda mejor racha de triunfos entre los adolescentes en la Era Abierta, después de Rafael Nadal.',636000,10,4,20),(21,'Guantes Muhammad Ali','Muhammad Ali o Mohamed Alí1(nacido como Cassius Marcellus Clay, Jr.; Louisville, Kentucky, 17 de enero de 1942–Scottsdale, Arizona, 3 de junio de 2016)3​4​ fue un boxeador estadounidense, considerado uno de los mejores de todos los tiempos. Fue una figura social de enorme influencia en su generación, en la política y en las luchas sociales o humanitarias a favor de los afroamericanos y del islam. ',136000,0,5,21),(22,'Cinturon WBC MAYWEATHER','Floyd Joy Mayweather, Jr. apodado Money (Grand Rapids, Míchigan, 24 de febrero de 1977), nacido como Floyd Joy Sinclair,1​ es un exboxeador profesional estadounidense invicto. Es hijo del exboxeador Floyd Mayweather Sr. y sobrino de los también exboxeadores Jeff Mayweather y Roger Mayweather, siendo además pupilo de este último quien fuera en su momento campeón mundial. Fue campeón del mundo en cinco categorías distintas: superpluma, ligero, superligero, wélter y superwelter; considerado durante mucho tiempo el mejor boxeador libra por libra según la revista',200000,0,5,22),(23,'Guantes Monzon','Carlos Roque Monzón (San Javier, 7 de agosto de 1942-Los Cerrillos, 8 de enero de 1995) fue un boxeador argentino que también se desempeñó ocasionalmente como actor de cine, considerado por muchos especialistas como el máximo representante del boxeo argentino y uno de los mejores de la historia universal de esa práctica, además de uno de los mejores deportistas argentinos de toda la historia.1​2​3​4​ Alcanzó el título de campeón mundial de la categoría mediano a fines de 1970 y lo retuvo hasta su retiro, en 1977. En el ranking libra por libra de todos los tiempos del sitio web Boxrec fue ubicado en la posición 7.5​ La revista The Ring lo ubicó en el número 11 de la lista de los mejores boxeadores históricos libra por libra.6​ En 1990 fue incorporado al Salón Internacional de la Fama del Boxeo.',70000,5,5,23),(24,'Pantalon Maidana MSG','Marcos René Maidana «El Chino» (Margarita, Santa Fe, Argentina, 17 de julio de 1983) es un boxeador argentino. Ha sido campeón superligero y wélter de la AMB (Asociación Mundial de Boxeo).Comenzó a boxear a los 15 años en su pueblo natal, Margarita, en la provincia de Santa Fe, donde inmediatamente comenzó a demostrar su condición de noqueador. Luego de consagrarse como campeón argentino amateur fue convocado al seleccionado nacional, donde disputó el puesto con Lucas Matthysse, con quien se enfrentó en cuatro ocasiones, ganando',263000,5,5,24),(25,'Guantes McGregor','McGregor fue el primer luchador en la historia de la UFC en ostentar títulos en dos divisiones distintas al mismo tiempo. Uno de esos cinturones se lo arrebató a José Aldo en 13 segundos de acción, logrando de esta forma el KO más rápido en la historia de las peleas por un título de UFC. El segundo cinturón lo obtuvo derrotando por Nocaut técnico a Eddie Alvarez en UFC 205. También se convirtió en campeón de peso pluma y ligero de manera simultánea en la liga británica de MMA Cage Warriors.',100000,10,5,25),(36,'Servilleta Messi despedida Barcelona','Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.  Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,10​ es el único futbolista en la historia que ha ganado, entre otras distinciones, siete veces el Balón de Oro, seis premios de la FIFA al mejor jugador del mundo y seis Botas de Oro. En 2020, se',198000,10,1,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `activo` varchar(45) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `preference` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `direcction` varchar(45) DEFAULT NULL,
  `typeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_users_types_idx` (`typeId`),
  CONSTRAINT `FK_users_types` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alejandro','Iniguez','ale_165851@hotmail.com','$2a$10$97WhkQy0.q98f5YKIFj87OOT7lmBfYWiNje.qqK0bVZZRrjnknKDS','1','avatar-User-1658001533147.jpg','Futbol Internacional','Argentina','Buenos Aires','calle falsa 123',1),(2,'Emiliano','DosReis','emiliano@dosreis.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,1),(3,'Beimar','Delgado','beimar@delgado.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,1),(4,'Eric','Mena','eric@mena.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,1),(5,'Matias','Lopez','matias@lopez.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,1),(6,'Noelia','Acosta','noelia@acosta.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,2),(7,'Daniel','Britos','daniel@britos.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,2),(8,'Manuel','Rodriguez','manuel@rodriguez.com','$2a$10$ev6j.er.PIvCfX.Y25gVbOuSb56jVt1PfMkTEJ8.MbxShk4aLr28S','1','default.png',NULL,NULL,NULL,NULL,2),(10,'Esteffy','Beltran','esteffy@beltran.com','$2a$10$YSg8rBcU5vERB8c3fjAFwuymqyVzBaoK4VemGHLUqD9XUutWX8XDS','1','default.png','Tennis','Argentina','CABA','',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-16 18:11:45
