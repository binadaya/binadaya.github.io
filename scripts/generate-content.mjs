import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const source = fs.readFileSync('/workspace/sites/binadaya-inti-dinamika/app/data.ts', 'utf8');
const write = (file, text) => { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file, text); };
const slug = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80);
const quote = value => JSON.stringify(String(value));

const projectBlock = source.match(/const rawProjects = \[([\s\S]*?)\] as const;/)?.[1];
if (!projectBlock) throw new Error('Data proyek tidak ditemukan');
const projects = Function(`return [${projectBlock}]`)();
const scopes = {
  'Teknologi Informasi':'Analisis kebutuhan, pengembangan atau pemeliharaan sistem, integrasi data, pengujian, dan dukungan implementasi.',
  'Sistem Informasi':'Pengembangan modul, pengelolaan data, pengujian fungsi, dokumentasi, dan pendampingan penerapan sistem.',
  'Tata Ruang':'Pengumpulan data, analisis spasial, perumusan konsep, penyusunan dokumen rencana, dan fasilitasi pembahasan.',
  'Survei':'Persiapan instrumen, pengumpulan data lapangan, pengolahan dan verifikasi data, serta penyajian hasil.',
  'Rekayasa':'Pengumpulan data teknis, penyusunan gambar, pemeriksaan kesesuaian lapangan, dan dokumentasi.',
  'Konsultan Manajemen':'Pengumpulan data, analisis kondisi, koordinasi pemangku kepentingan, penyusunan rekomendasi, dan pelaporan.'
};
projects.forEach(([year,title,location,client,category],i)=>write(path.join(root,'_projects',`${String(i+1).padStart(2,'0')}-${slug(title)}.md`),`---\ntitle: ${quote(title)}\nyear: ${year}\nlocation: ${quote(location)}\nclient: ${quote(client)}\ncategory: ${quote(category)}\norder: ${i+1}\nscope: ${quote(scopes[category]||'Pengumpulan data, analisis teknis, koordinasi, penyusunan rekomendasi, dan pelaporan sesuai kebutuhan pemberi kerja.')}\n---\n`));

const services = [...source.matchAll(/\["([^"]+)", "([^"]+)"\]/g)].slice(0,8).map(m=>[m[1],m[2]]);
services.forEach(([title,description],i)=>write(path.join(root,'_services',`${String(i+1).padStart(2,'0')}-${slug(title)}.md`),`---\ntitle: ${quote(title)}\ndescription: ${quote(description)}\norder: ${i+1}\n---\n`));

const teamBlock = source.match(/export const team:[\s\S]*?= \[([\s\S]*?)\];\n\nconst rawProjects/)?.[1]||'';
const teamRegex=/title: "([^"]+)", subtitle: "([^"]+)", description: "([^"]+)"(?:, meta: \{ image: "([^"]+)" \})?/g;
[...teamBlock.matchAll(teamRegex)].forEach((m,i)=>write(path.join(root,'_team',`${String(i+1).padStart(2,'0')}-${slug(m[1])}.md`),`---\ntitle: ${quote(m[1])}\nrole: ${quote(m[2])}\ndescription: ${quote(m[3])}\n${m[4]?`image: ${quote('/assets'+m[4])}\n`:''}order: ${i+1}\n---\n`));

const clients=[['Kementerian PUPR','Kementerian'],['Kementerian ATR/BPN','Kementerian'],['Kementerian PPN/Bappenas','Kementerian'],['Kementerian Pariwisata dan Ekonomi Kreatif','Kementerian'],['Kementerian Dalam Negeri','Kementerian'],['Kementerian Pertanian','Kementerian'],['BAKTI Kominfo','Badan Pemerintah'],['Badan Nasional Pengelola Perbatasan','Badan Pemerintah'],['PT Freeport Indonesia','Swasta'],['Pemerintah Daerah','Pemerintah Daerah']];
clients.forEach(([title,category],i)=>write(path.join(root,'_clients',`${String(i+1).padStart(2,'0')}-${slug(title)}.md`),`---\ntitle: ${quote(title)}\ncategory: ${quote(category)}\norder: ${i+1}\n---\n`));

const certs=[['Sertifikat Badan Usaha Jasa Konsultansi','Legalitas Usaha','Sertifikasi badan usaha untuk mendukung pelaksanaan layanan jasa konsultansi sesuai klasifikasi yang berlaku.'],['Nomor Induk Berusaha (NIB)','Perizinan Berusaha','Identitas pelaku usaha yang diterbitkan melalui sistem perizinan berusaha berbasis risiko.'],['Sertifikat Standar','Perizinan Berusaha','Dokumen pemenuhan standar kegiatan usaha sesuai bidang dan tingkat risiko perusahaan.'],['Akta Pendirian dan Perubahan Perusahaan','Dokumen Korporasi','Dokumen hukum pendirian serta perubahan perusahaan yang telah memperoleh pengesahan sesuai ketentuan.'],['NPWP Badan','Administrasi Perpajakan','Identitas perpajakan badan usaha untuk pelaksanaan hak dan kewajiban perpajakan perusahaan.']];
certs.forEach(([title,category,description],i)=>write(path.join(root,'_certificates',`${String(i+1).padStart(2,'0')}-${slug(title)}.md`),`---\ntitle: ${quote(title)}\ncategory: ${quote(category)}\ndescription: ${quote(description)}\norder: ${i+1}\n---\n`));

console.log(`Generated ${projects.length} projects, ${services.length} services, team, clients, and certificates.`);

