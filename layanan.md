---
layout: page
permalink: /layanan/
eyebrow: Bidang Keahlian
title: Layanan Konsultansi
description: Dukungan profesional dari perencanaan dan analisis hingga pengembangan sistem serta pendampingan implementasi.
---

<section class="section"><div class="shell"><div class="service-list">{% assign services = site.services | sort: 'order' %}{% for service in services %}<article><b>{{ forloop.index | prepend: '0' }}</b><div><h2>{{ service.title }}</h2><p>{{ service.description }}</p></div></article>{% endfor %}</div></div></section>

