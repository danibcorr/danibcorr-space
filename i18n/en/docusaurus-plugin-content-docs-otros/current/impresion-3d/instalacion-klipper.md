---
sidebar_position: 4
authors:
  - name: Daniel Bazo Correa
description: Instalación de Klipper para la Ender 3 S1.
title: Instalación de Klipper
toc_max_heading_level: 4
---
# Installing Klipper on Ender 3 S1

In this tutorial, we will learn how to install Klipper on an Ender 3 S1 using a PC as a server. Depending on the specifications of the computer, multiple printers can be controlled.

## Steps:

1. **Install Debian:** We will start by installing Debian (or the Linux distribution of your choice) on the computer from the official website. After the installation, we will update the packages with the following commands:

```bash
sudo apt update && sudo apt upgrade
```

2. **(Optional) Remove unnecessary packages:** In this step, we will optimize the performance and reduce the consumption of the server, since it will be used as an SSH server. We run the following commands to remove unnecessary packages:

```bash
sudo apt-get remove -y --purge x11-common
sudo apt-get autoremove -y --purge
sudo apt autoremove --purge
```

3. **Verify and install SSH:** We check if SSH is installed using the following command:

```bash
ssh -V
```

If it is not installed, we run the following commands to install it:

```bash
sudo apt-get update
sudo apt-get install openssh-server
```

4. **Check the status of SSH:** We verify that the SSH service is active by running the following command:

```bash
sudo systemctl status sshd
```

5. **Install and configure UFW (Uncomplicated Firewall):** We install UFW to activate the Firewall in Debian. We use the following commands:

```bash
sudo apt install ufw
sudo ufw enable
sudo ufw status verbose
```

6. **Enable SSH connection in the Firewall:** We allow SSH connection in the Debian Firewall by running the following command:

```bash
sudo ufw allow ssh
sudo systemctl enable ssh
```

This will enable SSH as a service, meaning it will automatically start in the background when you turn on your computer.

7. **Install KIAUH, Mainsail, etc.:** Follow the tutorial at this link to install KIAUH, Mainsail, and other necessary components: [Tutorial on YouTube](https://www.youtube.com/watch?v=Ib1Dd3rIE2I)

8. **Install Klipper on the printer:** Follow the tutorial at this link to install Klipper on the Ender 3 S1: [Tutorial on 3DPrintBeginner](https://3dprintbeginner.com/how-to-install-klipper-on-ender-3-s1/)

9. **(Optional) Monitor the server using htop:** It is recommended to use htop to monitor running services. Install it by running the following command:

```bash
sudo apt install htop
```

10. **(Optional) Installing Pi-hole:** If you do not want to use the IP address assigned to the server every time you access Mainsail to print with Klipper, you can install Pi-hole and configure a DNS server. Follow these steps:

```bash
wget -O basic-install.sh https://install.pi-hole.net
sudo bash basic-install.sh
```

Once installed, you need to change the port used by Pi-hole, as it is the same one Mainsail uses for Klipper (port 80). To do this, change the configuration in:

```bash
sudo nano /etc/lighttpd/lighttpd.conf
```

And modify the parameter `server.port = 80` to select a port that is not occupied by another service. Then, restart the service using the following command:

```bash
sudo service lighttpd restart
```

Additionally, you will need to enable a number of ports via the following commands:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 53/tcp
sudo ufw allow 53/udp
sudo ufw allow 67/tcp
sudo ufw allow 67/udp
sudo ufw allow 546:547/udp
```
11. **Controlling the printer from a terminal:** If you want to control your printer from an Android or iOS device, you can use the MobileRacker app. To do so, follow these steps:

a. Download and install the MobileRacker app from the app store.b. Make sure your device and the server where Klipper is installed are connected to the same Wi-Fi network.

c. Open MobileRacker on your device and follow the instructions to add a new printer.

d. Enter the IP address of the server where Klipper is installed.

e. Save the settings and select your printer from the list of available printers in MobileRacker.

f. You will now be able to control your printer, upload G-code files, and monitor printing progress directly from your device.

With these additional steps, you will be able to enjoy a more convenient and flexible printing experience from your mobile device.