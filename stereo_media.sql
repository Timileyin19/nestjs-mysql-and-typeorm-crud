-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 19, 2023 at 05:01 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stereo_media`
--

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` varchar(36) NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  `isDeleted` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `type`, `name`, `description`, `url`, `status`, `createdAt`, `updatedAt`, `deletedAt`, `isDeleted`) VALUES
('0165d221-506b-4f15-8946-e9bd1e3db63f', 'image', 'timipeter', 'this is just a dummy image', 'https://picsum.photos/200/300', 'active', '2023-03-18 19:06:17', '2023-03-19 16:10:23', '2023-03-19 16:10:23', 1),
('02fc4284-67bb-4136-9d33-9ea9d6fefe65', 'image', 'timipeter3', 'this is just a dummy image nnow', 'https://picsum.photos/200/300', 'active', '2023-03-18 22:51:12', '2023-03-18 22:51:12', NULL, 0),
('55764547-b502-41b7-8d32-1dad6fe6cc25', 'audio', 'name of the file', 'description of the uploaded file', 'https://picsum.photos/200/300', 'inactive', '2023-03-19 16:56:44', '2023-03-19 16:59:41', '2023-03-19 16:59:41', 1),
('d9ae147c-1c2d-4340-a456-7fdce6aab55d', 'audio', 'timipeter2', 'this is just a dummy audio', 'https://picsum.photos/200/300', 'active', '2023-03-18 19:28:57', '2023-03-19 16:12:29', '2023-03-19 16:12:29', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
