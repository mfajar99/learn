CREATE DATABASE frpb;
USE frpb;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    nama_users VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email_users VARCHAR(255) NOT NULL,
    gambar_users BLOB NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE desas (
	id INT NOT NULL AUTO_INCREMENT,
    nama_desas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE kecamatans (
	id INT NOT NULL AUTO_INCREMENT,
    nama_kecamatans VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE bencanas (
	id INT NOT NULL AUTO_INCREMENT,
    nama_bencanas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE kebencanaans (
	id INT NOT NULL AUTO_INCREMENT,
    lokasi VARCHAR(255) NOT NULL,
    kronologi VARCHAR(255) NOT NULL,
    penyebab VARCHAR(255) NOT NULL,
    meninggal INT NOT NULL DEFAULT 0,
    hilang INT NOT NULL DEFAULT 0,
    luka INT NOT NULL DEFAULT 0,
    rumah_rusak INT NOT NULL DEFAULT 0,
    fasilitas_rusak INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE anggotas (
	id INT NOT NULL AUTO_INCREMENT,
    nama_anggotas VARCHAR(255) NOT NULL,
    nomer_telepon VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    jenis_kelamin ENUM('laki-laki','perempuan') NOT NULL,
    gambar_anggotas BLOB NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE organisasis (
	id INT NOT NULL AUTO_INCREMENT,
    nama_organisasis VARCHAR(255) NOT NULL,
    nama_singkat VARCHAR(255) NOT NULL,
    email_organisasis VARCHAR(255) NOT NULL,
    nama_ketua VARCHAR(255) NOT NULL,
    logo BLOB NOT NULL,
    link_maps  VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE beritas (
	id INT NOT NULL AUTO_INCREMENT,
    judul_beritas VARCHAR(255) NOT NULL,
    konten TEXT NOT NULL,
    gambar_beritas BLOB NOT NULL,
    waktu TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE agendas (
	id INT NOT NULL AUTO_INCREMENT,
    judul_agendas VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    waktu TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    gambar_agendas BLOB NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE profils (
	id INT NOT NULL AUTO_INCREMENT,
    submenu VARCHAR(255) NOT NULL, 
    deskripsi VARCHAR(255)NOT NULL,
    gambar BLOB NOT NULL,
    judul VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE aspirasis (
	id INT NOT NULL AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nomer_telepone VARCHAR(255) NOT NULL,
    pesan TEXT NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

ALTER  TABLE agendas
ADD PRIMARY KEY (id);

ALTER TABLE users
ADD id INT AUTO_INCREMENT;

DESCRIBE kecamatans;
DESC aspirasis;
SHOW CREATE TABLE aspirasis;

SHOW ENGINES;
