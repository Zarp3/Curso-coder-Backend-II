# Ecommerce Backend – Usuarios, Autenticación y Autorización de Juan Cruz Quiroga 

## Descripción

Este proyecto corresponde a la implementación de un sistema de **gestión de usuarios**, **autenticación** y **autorización** dentro del ecommerce base provisto al inicio del curso.

La aplicación está desarrollada con **Node.js**, **Express**, **MongoDB**, **Mongoose**, **Passport** y **JWT**, cumpliendo con todos los puntos solicitados en la consigna.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Passport
- Passport-Local
- Passport-JWT
- bcrypt
- JSON Web Tokens (JWT)

---

## Modelo de Usuario

Se implementó un modelo `User` con los siguientes campos:

- `first_name`: String
- `last_name`: String
- `email`: String (único)
- `age`: Number
- `password`: String (almacenada en formato hash)
- `cart`: ObjectId con referencia a Carts
- `role`: String (valor por defecto: `"user"`)

El modelo se encuentra en:

