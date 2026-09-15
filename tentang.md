---
layout: page
permalink: /tentang/
eyebrow: Profil Perusahaan
title: Tentang BINADAYA
description: Perusahaan konsultansi multidisiplin yang berkomitmen menghadirkan solusi profesional, relevan, dan dapat dipertanggungjawabkan.
---

<section class="section"><div class="shell split"><div><span class="kicker">Jejak Langkah</span><h2>Tumbuh melalui pengalaman dan kepercayaan.</h2></div><div><p>PT. Binadaya Inti Dinamika hadir sebagai mitra pemerintah, badan usaha, dan berbagai pemangku kepentingan dalam menyelesaikan kebutuhan perencanaan, pengelolaan, teknologi, dan pembangunan.</p><p>Pendekatan kami menggabungkan keahlian teknis, pemahaman kebijakan, pengelolaan proyek, dan kerja kolaboratif untuk menghasilkan rekomendasi yang dapat diterapkan.</p><div class="facts"><div><strong>2007</strong><span>Mulai berkarya</span></div><div><strong>Multidisiplin</strong><span>Keahlian tim</span></div><div><strong>Nasional</strong><span>Jangkauan proyek</span></div></div></div></div></section>

<section class="section soft"><div class="shell"><div class="section-head"><div><span>Kepemimpinan</span><h2>Direksi dan tim manajemen.</h2></div></div><div class="team-grid">{% assign people = site.team | sort: 'order' %}{% for person in people %}<article><div class="portrait">{% if person.image %}<img src="{{ person.image | relative_url }}" alt="{{ person.title }}">{% else %}<span>{{ person.title | slice: 0 }}</span>{% endif %}</div><h3>{{ person.title }}</h3><b>{{ person.role }}</b><p>{{ person.description }}</p></article>{% endfor %}</div></div></section>

<section class="section"><div class="shell"><div class="section-head"><div><span>Legalitas</span><h2>Dokumen dan sertifikasi perusahaan.</h2></div></div><div class="certificate-grid">{% assign docs = site.certificates | sort: 'order' %}{% for item in docs %}<article><small>{{ item.category }}</small><h3>{{ item.title }}</h3><p>{{ item.description }}</p></article>{% endfor %}</div></div></section>

