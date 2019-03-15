-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-03-2019 a las 00:57:14
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `activate`
--

CREATE TABLE IF NOT EXISTS `activate` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) unsigned NOT NULL,
  `code` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coments`
--

CREATE TABLE IF NOT EXISTS `coments` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(8) unsigned DEFAULT NULL,
  `post_id` int(8) unsigned NOT NULL,
  `coment` varchar(280) NOT NULL,
  `date` bigint(32) NOT NULL,
  `meta` varchar(240) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`,`post_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notific`
--

CREATE TABLE IF NOT EXISTS `notific` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `touser` int(8) unsigned NOT NULL,
  `message` varchar(800) NOT NULL,
  `link` varchar(200) NOT NULL,
  `state` tinyint(1) unsigned NOT NULL,
  `date` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `touser` (`touser`,`state`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(70) NOT NULL,
  `category` int(3) unsigned NOT NULL,
  `content` longtext NOT NULL,
  `picture` varchar(120) NOT NULL,
  `user` int(8) unsigned NOT NULL,
  `date` bigint(32) unsigned NOT NULL,
  `url` varchar(80) NOT NULL,
  `meta` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `titulo` (`title`,`category`,`user`,`url`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relation_tag`
--

CREATE TABLE IF NOT EXISTS `relation_tag` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `tag` int(8) unsigned NOT NULL,
  `post` int(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag` (`tag`,`post`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=52 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saved`
--

CREATE TABLE IF NOT EXISTS `saved` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(8) unsigned NOT NULL,
  `post_id` int(8) unsigned NOT NULL,
  `meta` varchar(500) NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `name_2` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `username` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `date` bigint(32) NOT NULL,
  `state` varchar(20) NOT NULL DEFAULT '''pending''',
  `type` varchar(20) NOT NULL DEFAULT '''user''',
  `picture` varchar(200) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL,
  `meta` varchar(500) DEFAULT '''{}''',
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`username`,`mail`,`password`,`token`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
