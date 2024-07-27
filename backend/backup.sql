-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: crop_web
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crop_listings`
--

DROP TABLE IF EXISTS `crop_listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop_listings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cropName` varchar(255) NOT NULL,
  `variety` varchar(255) NOT NULL,
  `qualityGrade` char(1) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `startingBid` decimal(10,2) NOT NULL,
  `bidIncrement` decimal(10,2) NOT NULL,
  `currentBid` decimal(10,2) NOT NULL,
  `auctionStart` datetime NOT NULL,
  `auctionEnd` datetime NOT NULL,
  `sellerName` varchar(255) NOT NULL,
  `sellerRating` decimal(3,2) NOT NULL,
  `contactInfo` varchar(50) NOT NULL,
  `location` varchar(255) NOT NULL,
  `shippingOptions` json NOT NULL,
  `pickupOptions` json NOT NULL,
  `description` text NOT NULL,
  `certifications` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_listings`
--

LOCK TABLES `crop_listings` WRITE;
/*!40000 ALTER TABLE `crop_listings` DISABLE KEYS */;
INSERT INTO `crop_listings` VALUES (1,'Tomatoes','Roma','A','1000 kg',100.00,10.00,100.00,'2021-12-01 12:00:00','2021-12-07 12:00:00','John Doe',4.50,'0736462828','Nairobi, Kenya','[\"Courier\", \"Pickup\"]','[\"Farm\", \"Market\"]','Fresh Roma tomatoes from my farm. They are ripe and ready for sale.','[\"Organic\"]');
/*!40000 ALTER TABLE `crop_listings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farming_courses`
--

DROP TABLE IF EXISTS `farming_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farming_courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farming_courses`
--

LOCK TABLES `farming_courses` WRITE;
/*!40000 ALTER TABLE `farming_courses` DISABLE KEYS */;
INSERT INTO `farming_courses` VALUES (1,'Sustainable Farming','Learn the basics of sustainable farming practices.','https://via.placeholder.com/150'),(2,'Advanced Crop Management','Explore advanced techniques for crop management and soil health.','https://via.placeholder.com/150'),(3,'Organic Farming Techniques','Understand the principles and practices of organic farming.','https://via.placeholder.com/150'),(4,'Farm Machinery and Equipment','Get hands-on training with farm machinery and equipment.','https://via.placeholder.com/150'),(5,'Agricultural Economics','Study the economic aspects of agriculture and farm management.','https://via.placeholder.com/150');
/*!40000 ALTER TABLE `farming_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_items`
--

DROP TABLE IF EXISTS `market_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `highest_bid` int DEFAULT NULL,
  `description` text,
  `location` varchar(255) DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_items`
--

LOCK TABLES `market_items` WRITE;
/*!40000 ALTER TABLE `market_items` DISABLE KEYS */;
INSERT INTO `market_items` VALUES (1,'Corn','https://via.placeholder.com/150',150,'Fresh and organic corn directly from the farm.','Farmville, USA',NULL),(2,'Wheat','https://via.placeholder.com/150',200,'High-quality wheat perfect for baking and cooking.','Grainland, USA',NULL),(3,'Soybeans','https://via.placeholder.com/150',250,'Organic soybeans rich in protein and nutrients.','Soytown, USA',NULL);
/*!40000 ALTER TABLE `market_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic_id` int NOT NULL,
  `message` text NOT NULL,
  `repliedBy` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `replyImageURL` varchar(1000) DEFAULT NULL,
  `replierId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_id` (`topic_id`),
  CONSTRAINT `replies_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
INSERT INTO `replies` VALUES (1,1,'Thank you! Looking forward to the discussions here.','User1','2024-07-01 11:00:00',NULL,NULL),(2,1,'Great to be here!','User2','2024-07-01 12:00:00',NULL,NULL),(3,2,'The FAQ was very helpful, thanks!','User3','2024-07-02 10:30:00',NULL,NULL),(4,3,'Can\'t wait to see the new features!','User4','2024-07-03 09:00:00',NULL,NULL),(5,3,'Looking forward to it!','User5','2024-07-03 10:00:00',NULL,NULL),(48,3,'aswq','Sisekelo Ngcobo','Tue, Jul 23, 2024, 10:31:13 PM','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ',NULL),(49,3,'asdddfffffffff','Sisekelo Ngcobo','Tue, Jul 23, 2024, 10:34:14 PM','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ',NULL),(60,38,'Right,. It\'s interesting how inertia is directly related to mass. The more massive an object, the greater its inertia. This means it requires more force to change the motion of a more massive object. For example, it\'s much easier to push a small toy car than a real car because the real car has much more mass and, consequently, more inertia','Sisekelo Ngcobo','2024-07-24 09:47:46','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ','user_2jeCPwBFVlDiaGL3BcFNon7cMAX');
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `startedBy` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `imageURL` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (1,'Welcome to the Forum','Feel free to ask questions, share your experiences, and connect with others.','Admin','2024-07-01 10:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(2,'How to use the site','Check out our FAQ section to learn more about how to navigate and use the site.','Admin','2024-07-02 09:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(3,'New features coming soon','We\'re excited to announce some new features that will be rolled out in the next few weeks. Stay tuned!','Admin','2024-07-03 08:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(38,'Inertia','Inertia is such a fascinating concept. It essentially describes the tendency of an object to resist changes to its state of motion.\nNewton\'s First Law of Motion encapsulates this idea:\nan object at rest will stay at rest, and an object in motion will stay in motion unless acted upon by an external force.','Lucy Tlake','2024-07-24 09:44:30','user_2jggZfWuDj4KvRw8A2Q1BdzoQLe','https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yamVDNGJMV2RDZnZzQmx3NWV1UFljZnlpRUYiLCJyaWQiOiJ1c2VyXzJqZ2daZld1RGo0S3ZSdzhBMlExQmR6b1FMZSIsImluaXRpYWxzIjoiTFQifQ'),(39,'sooomething','as','Sisekelo Ngcobo','2024-07-25 19:04:52','user_2jeCPwBFVlDiaGL3BcFNon7cMAX','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-27 13:09:10
