---
title: "[🇪🇸] Fundamentos Ciberseguridad 3"
excerpt: "Exploraremos la Criptografia 🔑!"
date: "Nov 15 2024"
cover_image: "/blog/cibersec.webp"
alt: "Cibersec 3"
tags1: "Helpdesk"
tags2: "Hacking"
---

# Fundamentos Ciberseguridad (Parte 3).

&nbsp;

Te recomiendo ir al Cheatsheet para una versión mas dinamica y divertida de aprender estos terminos.
[Click para encontrar el Cheatsheet Completo](https://rawier.gitbook.io/glosario-de-hacking-ciberseguridad-y-redes/)

&nbsp;

## ¿Qué es la Criptografia? 🔑

**CRIPTOGRAFIA**: Es el arte de representar información mediante simbolos y sistemas de codificación para transmitir la información de manera segura y confiable.
¿Cúal es su uso?: Cifrar confidenciales o privados para mantenerlos seguros ante cualquier tipo de ataque y para cumplir la normativa de seguridad de la información, (aunque esto no siempre es infalible).

&nbsp;

## 1. Criptografía Simétrica

- 💫 **Características**: En la criptografía simétrica, se utiliza la misma clave para cifrar y descifrar un mensaje. Esto requiere que ambas partes compartan la clave de forma segura antes de su uso. Es más rápida en comparación con la criptografía asimétrica y se utiliza para cifrar grandes volúmenes de datos.
- 💫 **Aplicaciones**: Se usa comúnmente para el cifrado de archivos (por ejemplo, en sistemas de almacenamiento en la nube), en bases de datos para proteger datos sensibles y en redes privadas virtuales (VPN) para asegurar la transmisión de datos, en resumen, grandes volumenes de datos.

### Ejemplos de Criptografía Simétrica

| Nombre | Descripción |
| --|--|
| 🐦 **AES** | (Advanced Encryption Standard) Es un estándar ampliamente utilizado por su eficacia y seguridad, Algunos Softwares que lo usan son [Encrypto](https://macpaw.com/encrypto), [GIE](https://github.com/Rawierdt/GIE-UI), [PassPai](https://rawierdt.github.io/PassPai/) |
| 🐦 **DES** | (Data Encryption Standard) Es un algoritmo más antiguo que ha sido reemplazado en gran medida por AES. |
| 🐦 **Blowfish** | Es un algoritmo de cifrado de bloque que es rápido y eficiente para datos de tamaño variable muy usado en WooCommerce. |

&nbsp;

### Código de Ejemplo

```jsx
import * as crypto from 'crypto';
import { createReadStream, createWriteStream, PathLike } from 'fs';
import { pipeline } from 'stream';

const cipher = (
  password: string,
  salt: string,
  size: 128|192|256,
  input: PathLike,
  output: PathLike,
) => {
  const cipher = crypto.createCipheriv(
    `aes-${size}-cbc`,
    crypto.scryptSync(password, salt, size / 8),
    new Uint8Array(16)
  );

  pipeline(createReadStream(input), cipher, createWriteStream(output), (error)=> {
    if(error) throw error;
  });
};
```

Este fragmento de código TypeScript define una función llamada `cipher` que realiza el cifrado utilizando el algoritmo Advanced Encryption Standard (AES).

La función recibe los siguientes parámetros:

- `password`: Una cadena que representa la contraseña utilizada para cifrar los datos.
- `salt`: Una cadena que representa la sal utilizada en el proceso de cifrado.
- `size`: Un número que representa el tamaño de la clave (128, 192 o 256).
- `input`: Un objeto `PathLike` que representa la ruta del fichero a cifrar.
- salida`: Un objeto`PathLike` que representa la ruta al fichero de salida cifrado.

Dentro de la función, crea un cifrado utilizando el método `createCipheriv` del módulo `crypto`. Especifica el algoritmo de cifrado como `aes-{size}-cbc`, donde `{size}` es el valor del parámetro `size`. También genera una clave utilizando el método `scryptSync`, pasando la `password`, `salt`, y `size / 8` como argumentos.

A continuación, la función utiliza el método `pipeline` para leer el contenido del fichero de entrada, encriptarlo utilizando el cifrado, y escribir el resultado encriptado en el fichero de salida. Si se produce un error durante el proceso de cifrado, lanza el error.

```jsx
import * as crypto from 'crypto';
import { createReadStream, createWriteStream, PathLike } from 'fs';
import { pipeline } from 'stream';

const decipher = (
  password: string,
  salt: string,
  size: 128|192|256,
  input: PathLike,
  output: PathLike,
) => {
  const decipher = crypto.createDecipheriv(
    `aes-${size}-cbc`,
    crypto.scryptSync(password, salt, size / 8),
    new Uint8Array(16)
  );

  pipeline(createReadStream(input), decipher, createWriteStream(output), (error) => {
    if(error) throw error;
  });
};

export default decipher;
```

Esto descifra el contenido del anterior codigo.

&nbsp;

## 2. Criptografía Asimétrica ó de Clave Pública

- 💫 **Características**: También conocida como criptografía de clave pública, utiliza un par de claves: una pública y una privada. La clave pública se puede compartir abiertamente, mientras que la clave privada se mantiene en secreto. Esta técnica permite tanto el cifrado como la firma digital de mensajes.
- 💫 **Aplicaciones**: Es fundamental para la creación de firmas digitales, el establecimiento de sesiones seguras en Internet (como en SSL/TLS para sitios web seguros), y en sistemas de correo electrónico cifrado, Este método es esencial para establecer conexiones seguras en internet, como en el protocolo HTTPS.

### Ejemplos de Criptografía Asimétrica

| Nombre | Descripción |
| --|--|
| 🐦 **RSA** | (Rivest-Shamir-Adleman) Es uno de los primeros sistemas de criptografía asimétrica, utilizado para cifrado y firma digital. |
| 🐦 **DSA** | (Digital Signature Algorithm) Utilizado principalmente para la creación de firmas digitales. |
| 🐦 **ECC** | (Elliptic Curve Cryptography) Ofrece la misma seguridad que RSA pero con claves más cortas, lo que lo hace más eficiente, Algunos Softwares que lo usan son [GIE](https://github.com/Rawierdt/GIE-UI). |

&nbsp;

## 3. Hash Criptográfico

- 💫 **Características**: Los hash criptográficos son algoritmos que toman un input de cualquier tamaño y producen un output de tamaño fijo, conocido como hash. Estos son unidireccionales, lo que significa que a partir del hash no se puede obtener el mensaje original. Además, una pequeña modificación en el input produce un hash completamente diferente.
- 💫 **Aplicaciones**: Se utilizan para verificar la integridad de los datos, en la autenticación de contraseñas (almacenando el hash de la contraseña en lugar de la contraseña misma), y en la tecnología blockchain para asegurar la integridad de la cadena de bloques.

### Ejemplos de Hash Criptográfico

| Nombre | Descripción |
| --|--|
| 🐦 **SHA-256** | (Secure Hash Algorithm 256 bits) Parte de la familia SHA-2, ampliamente utilizada en aplicaciones como Bitcoin. |
| 🐦 **MD5** | (Message-Digest Algorithm 5) Aunque es rápido, ya no se recomienda debido a vulnerabilidades encontradas. |
| 🐦 **Whirlpool** | Un algoritmo hash que produce un hash de 512 bits. |

&nbsp;

## 4. Criptografía de Curva Elíptica

### Ejemplos de Curva Elíptica

| Nombre | Descripción |
| --|--|
| 🐦 **ECDSA** | (Elliptic Curve Digital Signature Algorithm) Utilizado para crear firmas digitales. |
| 🐦 **ECDH** | (Elliptic Curve Diffie-Hellman) Un método para intercambiar claves secretas. |

## 5. Criptografía Cuántica

### Ejemplos de criptografía Cuántica

| Nombre | Descripción |
| --|--|
| 🐦 **QKD** | (Quantum Key Distribution) Permite a dos partes generar una clave secreta compartida utilizando partículas cuánticas. Si un tercero intenta interceptar la clave, esto alterará el estado cuántico y será detectable. |

Esto esta aun en desarrollo, pero la idea principal de la criptografía cuántica promete revolucionar la seguridad informática al ofrecer métodos que son teóricamente invulnerables a ataques futuros basados en computadoras cuántica

---
> Se necesitan especialistas, si existe algún problema con al gún miembro, la cosa se vuelve jodida.

Un framework es un marco de como hacer las cosas y una normativa es como hacerlo.

---

&nbsp;

> *"Acontinuación mostraré algunas formas de romper ciertos tipos de cifrado o hasing, cabe aclarar que esto es con fines educativos.*

&nbsp;

![Caja NGB](https://pbs.twimg.com/media/E2Qatt0XIAc7LJM.jpg)

&nbsp;

- 💜 Acceso al [--> Blog](https://rawier.vercel.app/es/blog/)

### Gracias por leer la parte 2

&nbsp;

### Fuentes de consulta

- 🔖 [Pentesting, qué es y para qué sirve By Josué López 07/03/2024](https://auditech.es/blog/pentesting-que-es-y-para-que-sirve/)
- 🔖 [Pentesting de Caja Gris by DragonJAR](https://www.dragonjar.org/pentesting-de-caja-gris.xhtml)
- 🔖 *Pentesting playground 101*
