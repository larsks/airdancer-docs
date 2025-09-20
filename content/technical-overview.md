---
title: Technical overview
tags: section
weight: 20
summary: >-
  A technical overview of the Airdancer project.
---

## Hardware

The Airdancer devices are built on top of Sonoff [S31] switches running [Tasmota] firmware.

[s31]: https://sonoff.tech/en-us/products/sonoff-s31-s31-lite-compact-design-smart-plug-with-energy-monitoring-us-type
[tasmota]: https://tasmota.github.io/docs/

### Sonoff S31 switches

The Sonoff S31 switch is an ESP8266-based smart plug. What differentiates it from many similar products on the market is that is very hackable; it is easy to take apart, it is based on the ESP8266 microcontroller, and it has easy to use pads for making the serial connection necessary for initially flashing the Tasmota firmware.

### Tasmota firmware

[Tasmota] is an open source firmware for Espressif ESP8266, ESP32, ESP32-S or ESP32-C3 chipset based devices. It is designed to replace the stock firmware on a variety of smart outlets and other devices. It provides HTTP and MQTT based APIs, a simple web UI, scheduling, power monitoring (when supported by the device) and a variety of other features.

We're using a [custom build] of Tasmota that has the MQTT configuration "baked in", so that once a switch has been configured to connect to a WiFi network it will register with the Airdancer service without additional configuration.

[custom build]: https://github.com/larsks/Tasmota/tree/airdancer

## MQTT Service

An [MQTT] messaging service (currently hosted on [HiveMQ]) coordinates communication between the switches and the Slack application. We build the Tasmota firmware with support for MQTT-over-SSL, so connections between the switches and the server (and Slack and the server) are encrypted.

[mqtt]: https://mqtt.org/
[hivemq]: https://www.hivemq.com/

## Slack application

Slack integration is achieved using the [airdancer-slack] project. This is a [Bolt]-based Python application that handles commands sent via private message or via the `/bother` or `/dancer` slack commands and communicates with a remote MQTT server to manage the switches.

[airdancer-slack]: https://github.com/larsks/airdancer-slack
[bolt]: https://docs.slack.dev/tools/bolt-python/

## OpenShift deployment

The Slack application is deployed to OpenShift on the [Mass Open Cloud] using the manifests in the [deployment branch] of the [airdancer-slack] repository.

[deployment branch]: https://github.com/larsks/airdancer-slack/tree/deployment
