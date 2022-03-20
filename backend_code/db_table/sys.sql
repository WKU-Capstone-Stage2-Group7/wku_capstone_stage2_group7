/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.20 : Database - recommend_sys_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`recommend_sys_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `recommend_sys_db`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `level` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

/*Data for the table `admin` */

/*Table structure for table `applied_program` */

DROP TABLE IF EXISTS `applied_program`;

CREATE TABLE `applied_program` (
  `aid` int NOT NULL AUTO_INCREMENT,
  `pid` int DEFAULT NULL,
  `sid` int DEFAULT NULL,
  `projectname` varchar(30) DEFAULT NULL,
  `department` varchar(30) DEFAULT NULL,
  `school_name` varchar(30) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `fee_per_credit` int DEFAULT NULL,
  `progress` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `pid` (`pid`),
  KEY `sid` (`sid`),
  CONSTRAINT `applied_program_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `professor` (`id`),
  CONSTRAINT `applied_program_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `applied_program` */

/*Table structure for table `professor` */

DROP TABLE IF EXISTS `professor`;

CREATE TABLE `professor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(300) NOT NULL,
  `name` varchar(300) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `research_speciality` varchar(300) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `department` varchar(300) DEFAULT NULL,
  `extend_data` varchar(500) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `modify_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `professor` */

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` varchar(50) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `idcard_photo` varchar(300) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `extend_data` varchar(500) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `modify_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `student` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
