-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2024 at 12:12 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tvldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `model` text NOT NULL,
  `serialNumber` varchar(255) DEFAULT NULL,
  `partNumber` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `pieces` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `itemName`, `label`, `brand`, `model`, `serialNumber`, `partNumber`, `stock`, `image`, `pieces`) VALUES
(6, '343', '4324', 'Option 1', '', '432', '432', 'Option 1', 'uploads/422939485_7029141847189698_5803348120877405019_n.jpg', 4343),
(7, 'Something', 'Label', 'Option 1', '', '434343', '13132', 'Option 2', 'uploads/422939485_7029141847189698_5803348120877405019_n.jpg', 434),
(14, '23', '32', 'Option 1', '323', '32', '32', 'Option 1', 'uploads/422939485_7029141847189698_5803348120877405019_n.jpg', 3232);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
