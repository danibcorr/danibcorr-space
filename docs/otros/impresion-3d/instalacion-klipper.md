---
sidebar_position: 4
authors:
  - name: Daniel Bazo Correa
description: Instalación de Klipper para la Ender 3 S1.
title: Instalación de Klipper
toc_max_heading_level: 4
---

# Instalación de Klipper en Ender 3 S1

En este tutorial, aprenderemos cómo instalar Klipper en una Ender 3 S1 utilizando un PC como servidor. Dependiendo de las especificaciones del equipo, se podrán controlar múltiples impresoras.

## Pasos:

1. **Instalar Debian:** Comenzaremos instalando Debian (o la distribución de Linux de su elección) en el ordenador desde la web oficial. Después de la instalación, actualizaremos los paquetes con los siguientes comandos:

   ```bash
   sudo apt update && sudo apt upgrade
   ```

2. **(Opcional) Eliminar paquetes innecesarios:** En este paso, optimizaremos el rendimiento y reduciremos el consumo del servidor, ya que se utilizará como servidor SSH. Ejecutamos los siguientes comandos para eliminar los paquetes innecesarios:

   ```bash
   sudo apt-get remove -y --purge x11-common
   sudo apt-get autoremove -y --purge
   sudo apt autoremove --purge
   ```

3. **Verificar e instalar SSH:** Comprobamos si SSH está instalado utilizando el siguiente comando:

   ```bash
   ssh -V
   ```

   Si no está instalado, ejecutamos los siguientes comandos para instalarlo:

   ```bash
   sudo apt-get update
   sudo apt-get install openssh-server
   ```

4. **Comprobar el estado de SSH:** Verificamos que el servicio de SSH esté activo ejecutando el siguiente comando:

   ```bash
   sudo systemctl status sshd
   ```

5. **Instalar y configurar UFW (Uncomplicated Firewall):** Instalamos UFW para activar el Firewall en Debian. Utilizamos los siguientes comandos:

   ```bash
   sudo apt install ufw
   sudo ufw enable
   sudo ufw status verbose
   ```

6. **Habilitar la conexión SSH en el Firewall:** Permitimos la conexión SSH en el Firewall de Debian ejecutando el siguiente comando:

   ```bash
   sudo ufw allow ssh
   sudo systemctl enable ssh
   ```

   Esto activará SSH como un servicio, lo cual significa que se iniciará automáticamente en segundo plano al encender el ordenador.

7. **Instalar KIAUH, Mainsail, etc.:** Siga el tutorial en este enlace para instalar KIAUH, Mainsail y otros componentes necesarios: [Tutorial en YouTube](https://www.youtube.com/watch?v=Ib1Dd3rIE2I)

8. **Instalar Klipper en la impresora:** Siga el tutorial en este enlace para instalar Klipper en la Ender 3 S1: [Tutorial en 3DPrintBeginner](https://3dprintbeginner.com/how-to-install-klipper-on-ender-3-s1/)

9. **(Opcional) Controlar el servidor utilizando htop:** Es recomendable utilizar htop para monitorear los servicios en ejecución. Instálelo ejecutando el siguiente comando:

   ```bash
   sudo apt install htop
   ```
   
10. **(Opcional) Instalación de Pi-hole:** Si no desea utilizar la dirección IP asignada al servidor cada vez que acceda a Mainsail para imprimir con Klipper, puede instalar Pi-hole y configurar un servidor DNS. Siga estos pasos:

    ```bash
    wget -O basic-install.sh https://install.pi-hole.net
    sudo bash basic-install.sh
    ```

    Una vez instalado, debe cambiar el puerto utilizado por Pi-hole, ya que es el mismo que utiliza Mainsail para Klipper (puerto 80). Para ello, cambie la configuración en:

    ```bash
    sudo nano /etc/lighttpd/lighttpd.conf
    ```

    Y modifique el parámetro `server.port = 80` para seleccionar un puerto que no esté ocupado por otro servicio. Luego, reinicie el servicio utilizando el siguiente comando:

    ```bash
    sudo service lighttpd restart
    ```
    
    Además, deberá habilitar una serie de puertos a través de los siguientes comandos:
    
    ```bash
    sudo ufw allow 80/tcp
    sudo ufw allow 53/tcp
    sudo ufw allow 53/udp
    sudo ufw allow 67/tcp
    sudo ufw allow 67/udp
    sudo ufw allow 546:547/udp
    ```
11. **Controlar la impresora desde un terminal:** Si deseas controlar tu impresora desde un dispositivo Android o iOS, puedes utilizar la aplicación MobileRacker. Para hacerlo, sigue estos pasos:

    a. Descarga e instala la aplicación MobileRacker desde la tienda de aplicaciones.

    b. Asegúrate de que tu dispositivo y el servidor donde está instalado Klipper estén conectados a la misma red Wi-Fi.

    c. Abre MobileRacker en tu dispositivo y sigue las instrucciones para agregar una nueva impresora.

    d. Ingresa la dirección IP del servidor donde está instalado Klipper.

    e. Guarda la configuración y selecciona tu impresora desde la lista de impresoras disponibles en MobileRacker.

    f. Ahora podrás controlar tu impresora, cargar archivos G-code y monitorear el progreso de la impresión directamente desde tu dispositivo.

    Con estos pasos adicionales, podrás disfrutar de una experiencia de impresión más cómoda y flexible desde tu dispositivo móvil.
