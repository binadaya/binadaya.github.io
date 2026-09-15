---
layout: default
title: Beranda
description: Solusi konsultansi strategis untuk pemerintah, BUMN, dan sektor swasta.
---

<section class="hero">
  <div class="shell hero-grid">
    <div class="hero-copy">
      <span class="kicker">Konsultan Profesional Indonesia</span>
      <h1>Solusi strategis.<br><em>Dampak terukur.</em></h1>
      <p>PT. Binadaya Inti Dinamika memberikan layanan konsultansi multidisiplin yang menghubungkan analisis, teknologi, perencanaan, dan implementasi.</p>
      <div class="tags"><span>Manajemen</span><span>Teknologi Informasi</span><span>Tata Ruang</span><span>Infrastruktur</span></div>
      <div class="actions"><a class="button primary" href="{{ '/layanan/' | relative_url }}">Jelajahi Layanan</a><a class="text-link" href="{{ '/proyek/' | relative_url }}">Lihat Pengalaman →</a></div>
    </div>
    <aside class="hero-panel"><small>Profil Singkat</small><h2>Pengalaman lintas sektor sejak 2007.</h2><div class="metrics"><div><strong>{{ site.projects | size }}+</strong><span>Proyek</span></div><div><strong>8</strong><span>Bidang layanan</span></div><div><strong>10+</strong><span>Mitra strategis</span></div></div><p>Didukung tenaga ahli dan tim manajemen yang berorientasi pada mutu, ketepatan, dan kebermanfaatan.</p></aside>
  </div>
</section>

<section class="partner-strip"><div class="shell"><span>Pengalaman bersama</span><div>{% for client in site.clients limit:5 %}<strong>{{ client.title }}</strong>{% endfor %}</div></div></section>

<section class="section"><div class="shell"><div class="section-head"><div><span>Keahlian Kami</span><h2>Layanan konsultansi yang menyeluruh.</h2></div><a href="{{ '/layanan/' | relative_url }}">Semua layanan →</a></div><div class="service-grid">{% assign sorted_services = site.services | sort: 'order' %}{% for service in sorted_services limit:6 %}<article><b>0{{ forloop.index }}</b><h3>{{ service.title }}</h3><p>{{ service.description }}</p></article>{% endfor %}</div></div></section>

<section class="section soft"><div class="shell"><div class="section-head"><div><span>Portofolio</span><h2>Pengalaman yang membentuk kepercayaan.</h2></div><a href="{{ '/proyek/' | relative_url }}">Lihat seluruh proyek →</a></div><div class="featured-projects">{% assign sorted_projects = site.projects | sort: 'order' %}{% for project in sorted_projects limit:4 %}<article><span>{{ project.year }} · {{ project.category }}</span><h3>{{ project.title }}</h3><p>{{ project.client }} — {{ project.location }}</p></article>{% endfor %}</div></div></section>

<section class="cta"><div class="shell"><div><span>Mulai Kolaborasi</span><h2>Mari membangun solusi yang relevan dan terukur.</h2></div><a class="button light" href="{{ '/kontak/' | relative_url }}">Hubungi BINADAYA</a></div></section>

