---
title: "[🇺🇸] [WriteUp] - Blue (TryHackMe)"
excerpt: "Discover EternalBlue, MS17-010, RCE Vulnerability "
date: "Mar 27 2025"
cover_image: "/blog/bluethm.webp"
alt: "Writeup 1"
tags1: "Hacking"
tags2: "Windows"
---

# Machine: Blue (TryHackMe)

&nbsp;

> *Difficulty Level: ⭐*

&nbsp;

Blue is a machine with a vulnerability in the 445 protocol SMB. EternalBlue allows remote code execution that was discovered in [MS17-010]

Summary:

* Port Scanning
* Vulnerability Exploitation (MS17-010 / EternalBlue)
* Remote Shell
* Privileges Escalation to NT AUTHORITY\SYSTEM
* Dumping Password Hashes using Hashdump
* Hash cracking with John the Ripper
* Flag search

**At the end of the writeup I'll give you a summary of the entire machine, in english and spanish 🥳.**

**IMPORTANT** You must have a virtual machine or audit operating system with root privileges and an Internet connection..

**Methodology to be used:**

* Reconnaissance
* Enumeration
* Vulnerability search and analysis
* Exploitation
* Post-exploitation

## ¿What is EternalBlue?

Etrnal Blue is an exploit that was allegedly developed by the U.S. National Security Agency (NSA).

This program was stolen and then leaked by "The Shadow Brokers". It was then used to execute one of the most damaging ransomware attacks in history, known as Wannacry.

The eternal blue virus program was designed to exploit a vulnerability registered as *CVE-2017-0144*, which corresponds to a security flaw in Microsoft's Server Message Block protocol (SMB).

The security patch for this eternal blue virus vulnerability, called *MS17-010*, was released in March 2017.

The use of the eternalblue exploited mainly affected hospitals, police stations and, in general, organizations around the world.

[Versions with MS17-010](https://support.microsoft.com/es-es/topic/c%C3%B3mo-comprobar-que-ms17-010-est%C3%A1-instalado-f55d3f13-7a9c-688c-260b-477d0ec9f2c8)

[CVE Versions](https://success.trendmicro.com/en-US/solution/KA-0008859)

&nbsp;

## Port Scan - Reconnaissance

```powershell
ping -c 1 10.10.90.82
```

```powershell
nmap -sn 10.10.90.82
```

```powershell
sudo su
```

```powershell
nmap 10.10.90.82 -p- -sV -oN all_ports.nmap -Pn --min-rate 5000
```

```powershell
sudo nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 10.10.90.82 -oG Escaneo
```

## Preparación de Ambiente de Pruebas

| Nombre | Descripción |
| --|--|
| 🐦 **VMware Workstation** | [LINK A VMWARE](https://www.vmware.com/) |
| 🐦 **PNET Lab** | [LINK A PNET](https://pnetlab.com/pages/download) |
| 🐦 **Windows Client Side Eve-ng** | [LINK A EVE-NG](https://www.eve-ng.net/index.php/download/) |
| 🐦 **Kali Linux** | [LINK A KALI](https://www.kali.org/get-kali/#kali-platforms) |
| 🐦 **UNET LAB DRIVE** | [LINK A UNET LAB](https://drive.labhub.eu.org/) |
| 🐦 **DOCS** | [LINK A DOCUMENTACIÓN](https://www.eve-ng.net/index.php/documentation/) |

&nbsp;

## Paso 1: Instalación de PNET

Descarga la maquina PNET en el sitio oficial, deberás obtener un **.OVA** que 

comando directamente en pnet de vmware o mediante ssh desde una terminal en

windows, lo que es más sencillo.

```powershell
  ishare2 pull bin <number>
  ishare2 pull qemu <number>
  ishare2 pull dynamips <number>
```

## Paso 6: Creación de Salida a Red

![PLA4](https://i.ibb.co/LXRmRWVR/pla4.png)

Ahora seleccionaras la opción de Network

![PLA7](https://i.ibb.co/0RwDwPMP/pl7.png)

### Diferencias

**NAT (Network Address Translation):**

Propósito: Permite que varios dispositivos en una red local (LAN) usen una sola dirección IP pública para conectarse a internet.

> Se que todo esto es bastante simple y me explicación no fue la mejor pero intento detallar lo mas claro posible..

---

&nbsp;

> Mas adelante mostraré a realizar pruebas de penetración a diferentes sistemas en tu laboratorio.

&nbsp;

- 💜 Acceso al [--> Blog](https://rawier.vercel.app/es/blog/)

### Gracias por leer

&nbsp;

### Fuentes de consulta

- 🔖 PNET y Eve-ng