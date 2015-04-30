-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 30, 2015 at 04:44 PM
-- Server version: 5.5.43-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `viveninfotech`
--

-- --------------------------------------------------------

--
-- Table structure for table `_table_contact_us`
--

CREATE TABLE IF NOT EXISTS `_table_contact_us` (
  `contact_id` varchar(36) NOT NULL,
  `contact_name` varchar(48) NOT NULL,
  `contact_email` varchar(48) NOT NULL,
  `contact_subject` varchar(140) NOT NULL,
  `contact_msg` text NOT NULL,
  `contact_Tme_Stmp` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `_table_contact_us`
--

INSERT INTO `_table_contact_us` (`contact_id`, `contact_name`, `contact_email`, `contact_subject`, `contact_msg`, `contact_Tme_Stmp`) VALUES
('2710ddd63f8a6773d342f835bc5f4591', 'fsf', 'wefwef@sefesv.com', 'fafaaff', '                                    gfegewgewgewg', 1430388418),
('a64e1ef90793988ca966d8609a9ee2e5', 'fcsfcsc', 'safcsa@fsdgs.com', 'sdvdsvsd', 'dsvdsvdsvdsvdsv', 1430388456);

-- --------------------------------------------------------

--
-- Table structure for table `_table_subscribe`
--

CREATE TABLE IF NOT EXISTS `_table_subscribe` (
  `_subscribe_id` varchar(36) NOT NULL,
  `_subscribe_email` varchar(48) NOT NULL,
  `_subscribe_Tme_Stmp` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `_table_subscribe`
--

INSERT INTO `_table_subscribe` (`_subscribe_id`, `_subscribe_email`, `_subscribe_Tme_Stmp`) VALUES
('2bd64819e30c97611903790ce5bf766d', 'fsafsavxd@gmsil.vom', 1430388060),
('4cbcf4ebc9a530bbf4f1e2c80234d86d', 'cfsafas@rfewfew.com', 1430388092),
('bc810bd609ad0a6f5108692d39f5bc4e', 'vsdv@fdsgvd.com', 1430388186),
('d1da503bbd007d679c45792460ee0c13', 'xcsd@fsefs.com', 1430387986);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `_table_contact_us`
--
ALTER TABLE `_table_contact_us`
 ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `_table_subscribe`
--
ALTER TABLE `_table_subscribe`
 ADD PRIMARY KEY (`_subscribe_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
