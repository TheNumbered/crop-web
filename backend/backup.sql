-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: crop-web.mysql.database.azure.com    Database: crop_web_db
-- ------------------------------------------------------
-- Server version	8.0.37-azure

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
-- Table structure for table `course_topics`
--

DROP TABLE IF EXISTS `course_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `my_resources` json NOT NULL,
  `topic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `course_topics_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `farming_courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_topics`
--

LOCK TABLES `course_topics` WRITE;
/*!40000 ALTER TABLE `course_topics` DISABLE KEYS */;
INSERT INTO `course_topics` VALUES (1,1,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Chapter 1: Foundations'),(2,1,'{\"videos\": [\"https://www.youtube.com/embed/example3\", \"https://www.youtube.com/embed/example4\"]}','Chapter 2: Motion in One Dimension'),(3,2,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Advanced Crop Management'),(4,3,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Chapter 1: Foundations'),(5,3,'{\"videos\": [\"https://www.youtube.com/embed/example3\", \"https://www.youtube.com/embed/example4\"]}','Chapter 2: Motion in One Dimension'),(6,2,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Chapter 1: Foundations'),(7,2,'{\"videos\": [\"https://www.youtube.com/embed/example3\", \"https://www.youtube.com/embed/example4\"]}','Chapter 2: Motion in One Dimension'),(8,4,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Chapter 1: Foundations'),(9,4,'{\"videos\": [\"https://www.youtube.com/embed/example3\", \"https://www.youtube.com/embed/example4\"]}','Chapter 2: Motion in One Dimension'),(10,5,'{\"videos\": [\"https://www.youtube-nocookie.com/embed/DKhdnjt8bNs?si=1n3CqHIA435usqNy&start=1\", \"https://www.youtube.com/embed/example2\"]}','Chapter 1: Foundations'),(11,5,'{\"videos\": [\"https://www.youtube.com/embed/example3\", \"https://www.youtube.com/embed/example4\"]}','Chapter 2: Motion in One Dimension');
/*!40000 ALTER TABLE `course_topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

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
  `currentBid` decimal(10,2) NOT NULL,
  `auctionEnd` datetime NOT NULL,
  `sellerName` varchar(255) NOT NULL,
  `contactInfo` varchar(50) NOT NULL,
  `location` varchar(255) NOT NULL,
  `shippingOptions` json NOT NULL,
  `pickupOptions` json NOT NULL,
  `description` text NOT NULL,
  `primaryImage` varchar(255) DEFAULT NULL,
  `pictures` json DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_listings`
--

LOCK TABLES `crop_listings` WRITE;
/*!40000 ALTER TABLE `crop_listings` DISABLE KEYS */;
INSERT INTO `crop_listings` VALUES (1,'Tomatoes','Roma','A','1000 kg',300.00,'2024-07-29 17:00:00','John Doe','0736462828','Nairobi, Kenya','[\"Courier\", \"Pickup\"]','[\"Farm\", \"Market\"]','Fresh Roma tomatoes from my farm. They are ripe and ready for sale.','https://placehold.co/600x400?text=Tomatoes+Image','[\"https://placehold.co/100x100?text=Thumbnail1\", \"https://placehold.co/100x100?text=Thumbnail2\", \"https://placehold.co/100x100?text=Thumbnail3\", \"https://placehold.co/100x100?text=Thumbnail4\", \"https://placehold.co/100x100?text=Thumbnail5\", \"https://placehold.co/100x100?text=Thumbnail6\", \"https://placehold.co/100x100?text=Thumbnail7\", \"https://placehold.co/100x100?text=Thumbnail8\", \"https://placehold.co/100x100?text=Thumbnail9\", \"https://placehold.co/100x100?text=Thumbnail10\"]',0),(2,'Potatoes','Irish','B','500 kg',80.00,'2024-08-05 17:00:00','Alice Smith','0712345678','Nairobi, Kenya','[\"Courier\", \"Pickup\"]','[\"Farm\", \"Market\"]','High-quality Irish potatoes available for sale. Freshly harvested and well-packaged.','https://placehold.co/600x400?text=Potatoes+Image','[\"https://placehold.co/100x100?text=PotatoThumbnail1\", \"https://placehold.co/100x100?text=PotatoThumbnail2\", \"https://placehold.co/100x100?text=PotatoThumbnail3\"]',1),(3,'Strawberries','Albion','A','200 kg',120.00,'2024-08-10 17:00:00','Bob Johnson','0723456789','Nairobi, Kenya','[\"Courier\", \"Pickup\"]','[\"Farm\", \"Market\"]','Sweet and juicy strawberries, perfect for fresh eating or making jams. Farm-fresh and high quality.','https://placehold.co/600x400?text=Strawberries+Image','[\"https://placehold.co/100x100?text=StrawberryThumbnail1\", \"https://placehold.co/100x100?text=StrawberryThumbnail2\", \"https://placehold.co/100x100?text=StrawberryThumbnail3\"]',2);
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
  `courseName` varchar(255) DEFAULT NULL,
  `description` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
-- Table structure for table `forum_comments`
--

DROP TABLE IF EXISTS `forum_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic_id` int NOT NULL,
  `message` text NOT NULL,
  `repliedBy` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `replyImageURL` varchar(1000) DEFAULT NULL,
  `replierId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_id` (`topic_id`),
  CONSTRAINT `forum_comments_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `forum_topics` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_comments`
--

LOCK TABLES `forum_comments` WRITE;
/*!40000 ALTER TABLE `forum_comments` DISABLE KEYS */;
INSERT INTO `forum_comments` VALUES (1,1,'Thank you! Looking forward to the discussions here.','User1','2024-07-01 11:00:00',NULL,NULL),(2,1,'Great to be here!','User2','2024-07-01 12:00:00',NULL,NULL),(3,2,'The FAQ was very helpful, thanks!','User3','2024-07-02 10:30:00',NULL,NULL),(4,3,'Can\'t wait to see the new features!','User4','2024-07-03 09:00:00',NULL,NULL),(5,3,'Looking forward to it!','User5','2024-07-03 10:00:00',NULL,NULL),(48,3,'aswq','Sisekelo Ngcobo','Tue, Jul 23, 2024, 10:31:13 PM','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ',NULL),(49,3,'asdddfffffffff','Sisekelo Ngcobo','Tue, Jul 23, 2024, 10:34:14 PM','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yamVDUHZRZ1ZIREk5NTNUZnlRNXNRTUp5eEsifQ',NULL),(76,38,'Hello','Daniel Ngobe','2024-07-31 09:38:47','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yanRENlFqT0Rza1lNSlgzZEFCMHhwdFo3eFEifQ','user_2jtD6QEMHbSDkVf56Pa1SyAZc8U');
/*!40000 ALTER TABLE `forum_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum_topics`
--

DROP TABLE IF EXISTS `forum_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forum_topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `startedBy` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `imageURL` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum_topics`
--

LOCK TABLES `forum_topics` WRITE;
/*!40000 ALTER TABLE `forum_topics` DISABLE KEYS */;
INSERT INTO `forum_topics` VALUES (1,'Welcome to the Forum','Feel free to ask questions, share your experiences, and connect with others.','Admin','2024-07-01 10:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(2,'How to use the site','Check out our FAQ section to learn more about how to navigate and use the site.','Admin','2024-07-02 09:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(3,'New features coming soon','We\'re excited to announce some new features that will be rolled out in the next few weeks. Stay tuned!','Admin','2024-07-03 08:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(38,'Inertia','Inertia is such a fascinating concept. It essentially describes the tendency of an object to resist changes to its state of motion.\nNewton\'s First Law of Motion encapsulates this idea:\nan object at rest will stay at rest, and an object in motion will stay in motion unless acted upon by an external force.','Lucy Tlake','2024-07-24 09:44:30','user_2jggZfWuDj4KvRw8A2Q1BdzoQLe','https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yamVDNGJMV2RDZnZzQmx3NWV1UFljZnlpRUYiLCJyaWQiOiJ1c2VyXzJqZ2daZld1RGo0S3ZSdzhBMlExQmR6b1FMZSIsImluaXRpYWxzIjoiTFQifQ'),(40,'kkksla','kasj','ksms',NULL,'some','pepw');
/*!40000 ALTER TABLE `forum_topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resources` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic_id` int NOT NULL,
  `resources_by_public` varchar(255) DEFAULT NULL,
  `ranking` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_id` (`topic_id`),
  CONSTRAINT `resources_ibfk_1` FOREIGN KEY (`topic_id`) REFERENCES `course_topics` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (1,1,'Resource 1 by Public',5),(2,1,'Resource 2 by Public',4),(3,2,'Resource 3 by Public',3),(4,2,'Resource 4 by Public',2);
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-31 15:14:42
