---
title: "Airdancer: The wacky waving notification system"
navTitle: Home
weight: 0
tags: section
---

The Airdancer project is a physical notification system that uses [air dancers] attached to smart switches. A notification is delivered by activating the switch, making the air dancer wiggle and wobble.

[air dancers]: https://en.wikipedia.org/wiki/Tube_man

## Available documentation

{% assign sections = collections.section | sort: 'data.weight' %}
{% for section in sections %}
{% if title != section.data.title %}
- [{{ section.data.title }}]({{ section.url }}){% if section.data.summary %}: {{ section.data.summary }}{% endif %}
{% endif %}
{% endfor %}
