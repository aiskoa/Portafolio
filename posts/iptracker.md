---
title: "[EN] Tracker IP"
excerpt: "[EN]  Tracker IP Sobre sitios web y mas"
date: "Dec 21 2022"
cover_image: "/blog/iptracker.webp"
alt: "entities"
---

# Installation
* Download, and run.

It is a small tool that displays data from a web site or ip entered.

```javascript
import socket
import requests
from os import system

system('clear')
print("Bienvenidi, por favor")
site = input("\nIngrese el sitio web: ")
ip = socket.gethostbyname(site)
got = requests.get(f"http://ip-api.com/json/{ip}").json()
lat = requests.get(f"http://ipwho.is/{ip}").json()

print("Direccion IP:", got["query"])
print("ISP:", got["isp"])
print("Tipo:", lat["type"])
```

# Download Here
* (Google Drive)[https://drive.google.com/file/d/1jlsOKaZSsocnx_mwd9pfCeWuZIDCKKaU/view?usp=share_link]