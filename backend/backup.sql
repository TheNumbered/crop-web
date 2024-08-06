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
-- Table structure for table `course_community_urls`
--

DROP TABLE IF EXISTS `course_community_urls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_community_urls` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topicId` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `rank` int DEFAULT '0',
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topicId` (`topicId`),
  CONSTRAINT `course_community_urls_ibfk_1` FOREIGN KEY (`topicId`) REFERENCES `course_topics` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_community_urls`
--

LOCK TABLES `course_community_urls` WRITE;
/*!40000 ALTER TABLE `course_community_urls` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_community_urls` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `forum_comments` VALUES (1,1,'Thank you! Looking forward to discussing farming techniques and best practices.','User1','2024-07-01 11:00:00',NULL,NULL),(2,1,'Great to be here! Excited to learn from everyone.','User2','2024-07-01 12:00:00',NULL,NULL),(3,2,'Great overview! For those dealing with plant issues, always remember to check environmental factors and act quickly to prevent spreading. Using diagnostic tools and seeking local advice can make a big difference. Thanks for the helpful tips! ?','Theophilus Kgopa','2024-07-02 10:30:00',NULL,NULL),(4,3,'Can\'t wait to see the new agriculture courses!','User4','2024-07-03 09:00:00',NULL,NULL),(5,3,'Looking forward to learning more about sustainable farming.','User5','2024-07-03 10:00:00',NULL,NULL),(48,3,'I am really interested in the upcoming courses on soil health.','Sisekelo Ngcobo','2024-07-23 22:31:13','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yajFrZUwxTzBLRFZnaE5mSFc4VFc1MFpvd2sifQ',NULL),(49,3,'The new features sound amazing! Can\'t wait to try them out.','Sisekelo Ngcobo','2024-07-23 22:34:14','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yajFrZUwxTzBLRFZnaE5mSFc4VFc1MFpvd2sifQ',NULL),(76,38,'Hello, this topic on inertia is very insightful. Thank you!','Daniel Ngobe','2024-07-31 09:38:47','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yanRENlFqT0Rza1lNSlgzZEFCMHhwdFo3eFEifQ','user_2jtD6QEMHbSDkVf56Pa1SyAZc8U');
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
INSERT INTO `forum_topics` VALUES (1,'Welcome to the Agriculture Forum','Feel free to ask questions about farming, share your experiences, and connect with others in the agriculture community.','Admin','2024-07-01 10:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(2,'How to Identify Common Plant Diseases','Identifying common plant diseases begins with carefully examining symptoms observed on the plant. Look for signs such as discoloration, including yellowing or browning of leaves, and unusual spots. Wilting or drooping of leaves and stems may indicate a problem, as well as growth abnormalities like stunted growth or deformed leaves. Additionally, check for molds and mildews, which can appear as white, gray, or fuzzy growths on various plant parts. Sunken lesions or soft, mushy areas on stems or roots could signify cankers or rot.\n\nNext, pay attention to the patterns in symptom distribution. Note whether the symptoms are appearing on older or younger leaves and if they are spreading in a particular pattern. Consider recent environmental factors such as weather conditions, watering practices, and overall plant care. Identifying these patterns helps in narrowing down potential causes. It\'s also crucial to consider the plant species, as some diseases are specific to certain types of plants or plant families.\n\nTo pinpoint the issue, compare the symptoms with those of common plant diseases. Fungal diseases like powdery mildew and downy mildew present distinct appearances, with powdery mildew showing white, powdery substances and downy mildew causing yellow patches with fuzzy growths on the undersides of leaves. Bacterial diseases such as bacterial blight and bacterial wilt often manifest as water-soaked spots or wilting and browning of leaves. ','Admin','2024-07-02 09:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(3,'New Agriculture Courses Coming Soon','We\'re excited to announce some new agriculture courses that will be rolled out in the next few weeks. Stay tuned!','Admin','2024-07-03 08:00:00',NULL,'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yamVDZWg5U3JlZ01KbGNMWDhwU3dFWDd3ekQifQ'),(38,'Inertia in Agricultural Machinery','Inertia is an important concept in the operation of agricultural machinery. Understanding it can help improve efficiency and safety.','Lucy Tlake','2024-07-24 09:44:30','user_2jggZfWuDj4KvRw8A2Q1BdzoQLe','https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yamVDNGJMV2RDZnZzQmx3NWV1UFljZnlpRUYiLCJyaWQiOiJ1c2VyXzJqZ2daZld1RGo0S3ZSdzhBMlExQmR6b1FMZSIsImluaXRpYWxzIjoiTFQifQ'),(40,'Soil Health and Fertility','Discussing the best practices to maintain and improve soil health and fertility for better crop yields.','ksms','2024-07-25 10:00:00','user_2jghgfWuDj4KvRw8A2Q1BdzoQLe','https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yajFrZUwxTzBLRFZnaE5mSFc4VFc1MFpvd2sifQ');
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

-- Dump completed on 2024-08-06 16:54:01
