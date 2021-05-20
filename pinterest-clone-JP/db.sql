-- / Crear la DB
CREATE DATABASE pinterest_clone;
USE pinterest_clone;

-- / Crear las tablas
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- / Creación de las tablas que tienen FK
CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `urlPath` varchar(255) NULL DEFAULT 'no-image.png',
  `description` text NULL DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;