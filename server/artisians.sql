-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2023 at 10:49 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artisians`
--

-- --------------------------------------------------------

--
-- Table structure for table `bankinfo`
--

CREATE TABLE `bankinfo` (
  `Aadhar_Number` varchar(12) NOT NULL,
  `PAN_number` varchar(10) NOT NULL,
  `Bank_name` varchar(10) NOT NULL,
  `Account_Number` varchar(12) NOT NULL,
  `Holder_Name` varchar(50) NOT NULL,
  `Branch_Name` varchar(20) NOT NULL,
  `IFSC_Code` varchar(11) NOT NULL,
  `MICR_code` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `Name` varchar(50) NOT NULL,
  `Mobile` varchar(10) NOT NULL,
  `Alternate_Mobile` varchar(10) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Postal_Code` varchar(6) NOT NULL,
  `Emergency_Number` varchar(10) NOT NULL,
  `Photo` blob DEFAULT NULL,
  `Occupation` varchar(20) NOT NULL,
  `Experience` varchar(1) NOT NULL,
  `Date_of_Birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`Name`, `Mobile`, `Alternate_Mobile`, `Address`, `Email`, `Postal_Code`, `Emergency_Number`, `Photo`, `Occupation`, `Experience`, `Date_of_Birth`) VALUES
('', '', '', '', '', '', '', NULL, '', '', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bankinfo`
--
ALTER TABLE `bankinfo`
  ADD PRIMARY KEY (`Account_Number`),
  ADD UNIQUE KEY `Aadhar_Number` (`Aadhar_Number`),
  ADD UNIQUE KEY `PAN_number` (`PAN_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
