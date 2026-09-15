---
layout: page
permalink: /proyek/
eyebrow: Pengalaman Perusahaan
title: Portofolio Proyek
description: Pengalaman BINADAYA pada teknologi informasi, manajemen, tata ruang, rekayasa, lingkungan, dan pengembangan wilayah.
---

<section class="section soft"><div class="shell">
  <div class="project-tools"><label><span>Cari pengalaman</span><input id="project-search" type="search" placeholder="Nama proyek, lokasi, atau pemberi kerja"></label><label><span>Tahun proyek</span><select id="project-year"><option value="">Semua tahun</option>{% assign years = site.projects | map: 'year' | uniq | sort | reverse %}{% for year in years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}</select></label></div>
  <div class="project-count"><strong id="project-total">{{ site.projects | size }}</strong> pengalaman ditemukan</div>
  <div id="project-list" class="project-list">{% assign projects = site.projects | sort: 'order' %}{% for project in projects %}<article data-project data-year="{{ project.year }}" data-search="{{ project.title | downcase }} {{ project.client | downcase }} {{ project.location | downcase }} {{ project.category | downcase }}"><div class="project-year"><span>{{ forloop.index }}</span><b>{{ project.year }}</b></div><div><small>{{ project.category }}</small><h2>{{ project.title }}</h2><dl><div><dt>Pemberi kerja</dt><dd>{{ project.client }}</dd></div><div><dt>Lokasi</dt><dd>{{ project.location }}</dd></div></dl><details><summary>Lihat detail</summary><p>{{ project.scope }}</p></details></div></article>{% endfor %}</div>
  <nav class="project-pagination" aria-label="Navigasi proyek"><button id="project-prev">← Kembali</button><div id="project-pages"></div><button id="project-next">Berikutnya →</button></nav>
</div></section>

