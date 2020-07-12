-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 12 juil. 2020 à 04:53
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `kp10`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` int(11) NOT NULL,
  `email_client` varchar(20) NOT NULL,
  `nom_client` varchar(255) NOT NULL,
  `pass_client` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `email_client`, `nom_client`, `pass_client`) VALUES
(1, 'kpetigo@com', 'kkkkkkkkkkk', 'aa'),
(7, 'ked', 'ked', 'ked'),
(8, 'kpetigo@gmail:com', 'kpetigo', 'kpetigo');

-- --------------------------------------------------------

--
-- Structure de la table `pro`
--

CREATE TABLE `pro` (
  `id_pro` int(11) NOT NULL,
  `dep_pro` int(10) NOT NULL,
  `email_pro` varchar(255) NOT NULL,
  `nom_pro` varchar(255) NOT NULL,
  `pass_pro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `email_client` (`email_client`);

--
-- Index pour la table `pro`
--
ALTER TABLE `pro`
  ADD PRIMARY KEY (`id_pro`),
  ADD UNIQUE KEY `dep_pro` (`dep_pro`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `pro`
--
ALTER TABLE `pro`
  MODIFY `id_pro` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
