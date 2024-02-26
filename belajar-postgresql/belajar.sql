--menyeleksi data berdasarkan public
select * from pg_tables where schemaname ='public';

--membuat tabel
create table barang(
	kode int not null,
	name varchar(100) not null,
	harga int not null default 1000,
	jumlah int not null default 0,
	waktu_dibuat timestamp not null default current_timestamp
);

--membuat tabel
create table products(
	id			varchar(10)  not null,
	name 		varchar(100) not null,
	description text,
	price		int 		 not null,
	quantity 	int 		 not null default 0,
	created_at 	timestamp 	 not null default current_timestamp
)

--menambahkan not null pada kolom first_name
alter table admin
alter column first_name set not null;

--memasukan data pada tabel products tanpa kolom description
insert into products(id, name, price, quantity)
values ('P0001', 'Mie Ayam Original', 15000, 100);

--memasukan data pada tabel products dengan kolom description
insert into products(id, name, description, price, quantity)
values ('P0002', 'Mie Ayam Bakso Tah', 'Mie Ayam Original + Bakso Tahu', 15000, 100);

--memasukan data pada tabel products dengan value lebih dari satu
insert into products(id, name, price, quantity)
values ('P0003', 'Mie Ayam Ceker', 20000, 100),
	   ('P0004', 'Mie Ayam Spesial', 25000, 100),
	   ('P0005', 'Mie Ayam Yamin', 15000, 100);

--menambahkan id pada tabel products di kolom id
alter table products 
add primary key (id);

--menampilkan data products
select * from products;

--menampilkan data products bersarkan id tertentu
select  id, name, price, quantity
from products 
where id = 'P0004';

--membuat item product_category pada tabel products
create type PRODUCT_CATEGORY as enum ('Makanan', 'Minuman', 'Lain-Lain');

--menambahkan item product_category ke kolom kategory pada tabel products
alter table products 
add column category PRODUCT_CATEGORY;

--mengubah dan menambah data pada kolom category berdasarkan id pada tabel products 
update products 
set category = 'Makanan'
where id = 'P0001';

--mengubah dan menambah data pada kolom category berdasarkan id pada tabel products 
update products 
set category = 'Makanan'
where id = 'P0002';

--mengubah dan menambah data pada kolom category berdasarkan id pada tabel products 
update products 
set category = 'Makanan'
where id = 'P0003';

--mengubah dan menambah data pada kolom category berdasarkan id pada tabel products 
update products 
set category = 'Makanan'
where id = 'P0004';

--mengubah dan menambah data pada kolom category berdasarkan id pada tabel products 
update products 
set category = 'Makanan'
where id = 'P0005';

--mengubah dan menambah data pada kolom category dan description berdasarkan id pada tabel products 
update products 
set category = 'Makanan',
	description = 'Mie Ayam + Ceker'
where id = 'P0003';

--mengubah data pada kolom price dengan menanbah nominal price
update  products 
set price = price + 5000
where id = 'P0004';

--menampilkan data products
select * from products;

--menampilkan data berdasarkan kolom id, price, quantity
select id, name, price, quantity from products;

--menambah kolom deskripsi pada tabel barang
alter table barang 
add column deskripsi text;

--menghapus kolom deskripsi dari tabel barang
alter table barang 
drop column deskripsi;

--mengubah nama kolom name ke name dari tabel barang
ALTER TABLE barang
RENAME COLUMN name TO nama;

--menghapus data dan membuat kembali tabel barang
truncate barang;

--menghapus tabel barang
drop table barang;

--menghapus data product berdasarkan kolom id
delete from products 
where id = 'P0009';

--menampilkan data menggunakan alias
select id 		   as Kode,
	   price 	   as Harga,
	   description as Deskripsi	   
from products;

--menampilkan data menggunakan alias lebih dari satu kata
select id 		   as "Kode Barang",
	   price       as "Harga Barang",
	   description as "Deskripsi Barang"
from products;

--menampikan data menggunakan alias berdaarkan tabel
select p.id		     as Kode,
	   p.price       as Harga,
	   p.description as Deskripsi
from products as p;

--menampikan data menggunakan alias berdaarkan tabel
select products.id		    as "Kode Barang",
	   products.price       as "Harga Barang",
	   products.description as "Deskrispi Barang"
from products;

--menampilka data menggunakan tipe data
select * from products where price > 15000;

--menampilka data menggunakan tipe data
select * from products where price >= 15000;

--menampilka data menggunakan tipe data
select * from products where category != 'Minuman';

--mencari data products menggunakan operator END
select * from products where price > 15000 and category = 'Makanan';

select * from products;
	   
insert  into  products(id, name, price, quantity, category)
values ('P0006', 'Es teh tawar', 10000, 100, 'Minuman'),
	   ('P0007', 'Es teh tawar', 10000, 100, 'Minuman'),
	   ('P0008', 'Es teh tawar', 10000, 100, 'Minuman');

--mencari data products menggunakan operator OR
select * from products where price > 15000 or category = 'Makanan';

--mencari data products menggunakan operator OR dan AND
select * from products where quantity  > 100 or category = 'Makanan' and price > 15000;

--mencari data products menggunakan operator END prioritas kurung ()
select * from products where category = 'Makanan' or (quantity > 100 and price > 15000);

--mencari data products menggunakan operator ILIKE tidak case sensitive
select * from products where name ilike '%es%';

--mencari data products menggunakan operator LIKE harus case sensitive
select * from products where name like '%es%';

--mencari data products menggunakan operator NULL(KOSONG)
select * from products where description is null;

--mencari data products menggunakan operator NOT NULL(TIDAK KOSONG)
select * from products where description is not null;

--mencari data product menggunakan operator BETWEEN
select * from products where price between 10000 and 20000;
select * from products where price not between 10000 and 20000;

--menacari data products menggunakan operator WHERECLOSE
select * from  products where category in ('Makanan', 'Minuman');

--mengurutkan data menggunakan order by clouse
select * from products order by price asc, id desc;

--mengurutkan data menggunanakan limit clouse
select * from products where price > 0 order by price desc;
select * from products where price > 0 order by price asc, id desc limit 2;

--1 limit 2 offset 0, 2 limit 2 offset 2, 3 limit 2 offset 4
select * from products where price > 0 order by price asc, id desc limit 2 offset 2;

select category from products;

--select distict mengetahui data yang ter duplikat 
select distinct category from products;

--operator numeric function
select 10 + 10 as hasil;
select id, name, price / 1000 as price_in_k from products;

--mathematical fucntion
select pi();
select power(10, 2);
select cos(10), sin(10), tan(10);
select id, name, power(quantity, 2) as quantity_power_2 from products;

--membuat tabel
create table admin(
	id		   serial not null,
	first_name varchar(100),
	last_name varchar(100),
	primary key (id)
)

--menambahkan data di tabel admin
insert into admin(first_name, last_name)
values ('Eko', 'Khannedy'),
	   ('Budi', 'Nugraha'),
	   ('Joko', 'Morro');

--menampilkan data tabel admin
select * from admin;

--menampilkan data terakhir menggunakan auto increment
select currval('admin_id_seq');

--membuat sequence
create sequence contoh_sequence;

--memanggil sequence, otomatis increment
select nextval('contoh_sequence');

--mengambil nilai terakhir sequence
select currval('contoh_sequence');

--mengubah data menjadi lower menggunakan string function
select id, lower(name), length(name), lower(description) from products; 

--melihat tanggal dan bulan menggunakan date dan time function
select id, extract(year from created_at), extract(month from created_at) from products;

--membandingkan data menggunakan flow control function
select id, 
	category,
	case category
		when 'Makanan' then 'Enak'
		when 'Minuman' then 'Seger'
		else 'Apa itu?'
		end as category_case 
from products;

--menggunanakan flow control function menggunakan operator perbandingan
select id, 
	price,
	case 
		when price <= 15000 then 'Murah'
		when price <= 20000 then 'Mahal'
		else 'Mahal Banget'
		end as "apakah murah?"
from products;

--menggunakan control flow check null
select id, name,
	case 
		when description is null then 'Kosong'
		else description 
		end as description
from products; 

--menggunakan agregate function
select count(id) as "Total Product" from products;

select avg(price) as "Rata-Rata Harga" from products;

select max(price) as "Harga Termahal" from products;

select min(price) as "Harga Termurah" from products;

-- menggunakan group by
select category, count(id) as "Total Product" 
from products 
group by category;

select category,
	avg(price) as "Rata Rata Harga",
	min(price) as "Harga Termurah",
	max(price) as "Harga Termahal"
from products 
group by category;

--menggunakan having clouse
select category, count(id) as "Total Product" 
from products 
group by category
having count(id) > 3;

select category,
	avg(price) as "Rata Rata Harga",
	min(price) as "Harga Termurah",
	max(price) as "Harga Termahal"
from products 
group by category
having avg(price) >= 20000;

--menggunakan constraint
create table customer(
	id 			serial		 not null,
	email		varchar(100) not null,
	first_name  varchar(100) not null,
	last_name 	varchar(100),
	primary key (id), 
	constraint unique_email unique (email)
);

select * from customer;

insert into customer(email, first_name, last_name)
values ('fajar@gmail.com', 'Fajar', 'Muhammad');

insert into customer(email, first_name, last_name)
values ('eko@gmail.com', 'Eko', 'Khennedy'),
	   ('budi@gmail.com', 'Budi', 'Nugraha'),
	   ('joko@gmail.com', 'Joko', 'Morro'),
	   ('rully@gmail.com', 'Rully', 'Irwansyah');

--menghapus unique constraint
alter table customer
	drop constraint unique_email;

--menambah unique constraint
alter table customer
	add constraint unique_email unique (email);

--check constraint
alter table products 
add constraint price_check check (price > 1000);

alter table products 
add constraint quantity_check check (quantity >= 0);

insert into products(id, name, price, quantity, category)
values ('XXX1', 'Contoh Gagal', 10, 0, 'Minuman');

insert into products(id, name, price, quantity, category)
values ('XXX1', 'Contoh Gagal', 10000, -10, 'Minuman');

select * from products;

create table sellers(
	id 		serial 		 not null,
	name 	varchar(100) not null,
	email 	varchar(100) not null,
	primary key (id),
	constraint email_unique unique (email)
);

insert into sellers(name, email)
values ('Galeri Olahraga', 'galeri@gmail.com'),
	   ('Toko Tono', 'tono@gmail.com'),
	   ('Toko Budi', 'budi@gmail.com'),
	   ('Toko Rully', 'rully@gmail.com');

select * from sellers; 

--menambah index
create index sellers_id_and_name_index on sellers (id, name);
create index sellers_email_and_name_index on sellers (email, name);
create index sellers_name_index on sellers (name);

--menghapus index
drop index sellers_name_index;

select * from sellers where id = 1;
select * from sellers where id = 1 or name = 'Toko Tono';
select * from sellers where email = 'rully@gmail.com' or name ='Toko Tono';
select * from sellers where name = 'Toko Tono';

--mengguanakan full-text search
select * from products 
where to_tsvector(name) @@ to_tsquery('mie');

--mengetahui bahasa yang didukung
select cfgname from pg_ts_config;

--membuat index full-text search
create index products_name_search on products using gin(to_tsvector('indonesian', name));

create index products_description_search on products using gin(to_tsvector('indonesian', description));

--mencari menggunakan full-text search 
select * from products where @@ to_tsquery('mie');


select cfgname from pg_ts_config;

--membuat index full-text search
create index products_name_search on products using gin(to_tsvector('indonesian', name));

create index products_description_search on products using gin(to_tsvector('indonesian', description));

--mencari menggunakan full-text search dan query operator
select * from products where name @@ to_tsquery('ayam & tahu');
select * from products where name @@ to_tsquery('''ayam bakso''');

--mencari menggunakan full-text search
select * from products where description @@ to_tsquery('mie');

--membuat tabel dengan foreign key
create table wishlist
(
	id 			serial 		 not null,
	id_product  varchar(10) not null,
	description text,
	primary key (id),
	constraint fk_wishlist_product foreign key (id_product) references products (id)
);

--menghapus foreign key
alter table wishlist 
drop constraint fk_wishlist_product;

--menambah foreign key
alter table wishlist 
add constraint fk_wishlist_product foreign key (id_product) references products (id);

--masukan data ke tabel wishlist
INSERT INTO wishlist(id_product, description)
VALUES ('P0001', 'Mie ayam kesukaan'),
	   ('P0002', 'Mie ayam kesukaan'),
	   ('P0005', 'Mie ayam kesukaan');
	  
select * from wishlist;

alter table wishlist 
drop constraint fk_wishlist_product;

--mengubah behavior menghapus relasi
alter table wishlist 
add constraint fk_wishlist_product foreign key (id_product) references products (id)
on delete cascade on update cascade;

insert into products(id, name, price, quantity, category)
values ('XXX', 'Xxx', 10000, 100, 'Minuman');

select * from products;
insert into wishlist(id_product, description) values ('XXX', 'Contoh');

select * from wishlist;

delete from products where id = 'XXX';

--menggunakan join
select * from wishlist join products on wishlist.id_product = products.id;

select products.id, products.name, wishlist.description from wishlist join products on products.id = wishlist.id_product;

select p.id, p.name, w.description from wishlist as w join products as p on w.id_product = p.id;

--menambahkan kolom baru ke tabel wishlist
alter table wishlist add column id_customer int;

--membuat relasi ke tabel customer
alter table wishlist add constraint fk_wishlist_customer foreign key (id_customer) references customer (id); 

select * from wishlist; 

update wishlist 
set id_customer = 1
where id in (2,3);

update wishlist 
set id_customer = 4
where id = 4;

select * from customer;
select * from wishlist;

--melakukan join multiple table
select c.email, p.id, p.name, w.description 
from wishlist as w 
	join products as p on w.id_product = p.id
	join customer as c on c.id = w.id_customer;

--membuat table wallet 
create table wallet
(
	id serial not null,
	id_customer int not null,
	balance int not null default 0,
	primary key (id),
	constraint wallet_customer_unique unique (id_customer),
	constraint fk_wallet_customer foreign key (id_customer) references customer (id)
)

select * from customer;

insert into wallet(id_customer, balance)
values (1, 1000000),
	   (4, 2000000),
	   (5, 3000000),
	   (6, 4000000);

select * from wallet;

--menampilkan select one to one relationship
select * from customer join wallet on wallet.id_customer = customer.id;

create table categories(
	id   varchar(10)  not null,
	name varchar(100) not null,
	primary key (id)
)

insert into categories(id, name)
values ('C0001', 'Makanan'),
	   ('C0002', 'Minuman');
	  
alter table products 
add column id_category varchar(10);

alter table products 
add constraint fk_product_category foreign key (id_category) references categories(id);

select * from products;

update products 
set id_category = 'C0001'
where category = 'Makanan';

update products 
set id_category = 'C0002'
where category = 'Minuman';

alter table products 
drop column category;

--menampilkan select one to many relationship
select * from products join categories on products.id_category = categories.id;

create table orders
(
	id 		   serial    not null,
	total 	   int	     not null,
	order_date timestamp not null default current_timestamp,
	primary key (id)
)

create table orders_detail
(
	id_product varchar(10) not null,
	id_order   int 		   not null,
	price	   int 		   not null,
	quantity   int 		   not null,
	primary key (id_product, id_order)
);

alter table orders_detail
add constraint fk_orders_detail_product foreign key (id_product) references products (id);

alter table orders_detail
add constraint fk_orders_detail__order foreign key (id_order) references orders (id);

insert into orders(total)
values (1),
	   (1),
	   (1);
	  
select * from orders;

select * from products order by id;

insert  into orders_detail (id_product, id_order, price, quantity)
values ('P0001', 1, 1000, 2),
       ('P0002', 1, 1000, 2),
       ('P0003', 1, 1000, 2);

insert  into orders_detail (id_product, id_order, price, quantity)
values ('P0004', 2, 1000, 2),
       ('P0006', 2, 1000, 2),
       ('P0007', 2, 1000, 2);
      
insert  into orders_detail (id_product, id_order, price, quantity)
values ('P0001', 3, 1000, 2),
       ('P0004', 3, 1000, 2),
       ('P0005', 3, 1000, 2);
     
select * from orders_detail;

--menampilkan select many to many relationship
select * from orders 
	join orders_detail on orders_detail.id_order = orders.id
	join products on orders_detail.id_product = products.id;

select * from orders 
	join orders_detail on orders_detail.id_order = orders.id
	join products on orders_detail.id_product = products.id
where orders.id = 1;


insert into categories (id, name) values ('C0003', 'Gadget'), ('C0004', 'Laptop'), ('C0005', 'Pulsa');

select * from categories;
select * from products;

insert into products(id, name, price, quantity)
values ('X0001', 'Contoh 1', 10000, 100),
	   ('X0002', 'Contoh 2', 10000, 100);

--melakukan inner join
select * from categories 
inner join products on products.id_category = categories.id;

--melakukan left join
select * from categories 
left join products on products.id_category = categories.id;

--melakukan right join
select * from categories 
right join products on products.id_category = categories.id;

--melakukan full join
select * from categories 
full join products on products.id_category = categories.id;

select avg(price) from products;

--melakukan subquery di where clouse
select * from products 
where price > (select avg(price) from products);

--melakukan subquery di form clouse
select max(price)
from (select  products.price as price
	  from categories join products on products.id_category = categories.id) as contoh;
	 
select  products.price as price
	  from categories join products on products.id_category = categories.id;
	 
create table guestbooks
(
	id 		serial       not null,
	email   varchar(100) not null,
	title   varchar(100) not null,
	content text,
	primary key (id)
);

select * from customer;

insert into guestbooks(email, title, content)
values ('fajar@gmail.com', 'feedback fajar', 'ini feedback fajar'),
	   ('fajar@gmail.com', 'feedback fajar', 'ini feedback fajar'),
	   ('eko@gmail.com', 'feedback eko', 'ini feedback eko'),
	   ('budi@gmail.com', 'feedback budi', 'ini feedback budi'),
	   ('tono@gmail.com', 'feedback tono', 'ini feedback tono'),
	   ('tono@gmail.com', 'feedback tono', 'ini feedback tono');

select * from guestbooks;

--melakukan query union
select distinct email from customer
union
select distinct email from guestbooks;

--melakukan query union all
select email from customer
union all
select email from guestbooks;

select email, count(email)
from (select distinct email
	  from customer 
	  union all 
	  select distinct email
	  from guestbooks) as contoh
group by email;

select email 
from customer
intersect
select email 
from guestbooks;

select email 
from customer
except
select email 
from guestbooks;

select * from guestbooks;

--Memulai proses transaksi, proses selanjutnya akan dianggap transaksi sampai perintah COMMIT atau ROLLBACK
start transaction;

insert into guestbooks(email, title, content)
values ('transaction@gmail.com', 'transaction', 'rollback');

insert into guestbooks(email, title, content)
values ('transaction@gmail.com', 'transaction', 'rollback 2');

insert into guestbooks(email, title, content)
values ('transaction@gmail.com', 'transaction', 'rollback 3');

insert into guestbooks(email, title, content)
values ('transaction@gmail.com', 'transaction', 'rollback 4');

insert into guestbooks(email, title, content)
values ('transaction@gmail.com', 'transaction', 'rollback 5');

select * from guestbooks;

--Menyimpan secara permanen seluruh proses transaksi
commit;

--Membatalkan secara permanen seluruh proses transaksi
rollback;

--looking record secara otomatis
select * from products;

start transaction;

update products 
set description = 'Mie ayam original enak'
where id = 'P0001';

select * from products where id = 'P0001';

commit;

--looking record secara manaual
start transaction;

select * from products where id = 'P0001' for update;

rollback;

select * from products where id = 'P0001';


--deadloack
start transaction;

select * from products where id = 'P0001' for update;

select * from products where id = 'P0002' for update;

rollback;

--schema

--mengetahui schema saat ini
select current_schema();

--pindah schema
set search_path to contoh;

--mengetahui schema saat ini
show search_path;

--membuat schema baru
create schema contoh;

--menghapus schema
drop schema contoh;

--membuat tabel ke skema tanpa set schema
create table contoh.products
(
	id serial not null,
	name varchar(100) not null
)

insert into contoh.products(name)
values ('iPhone'),
	   ('Play Station');

select * from contoh.products;

set search_path to public;

--root user /  hak akses dan user
--membuat role hak akses
create role eko;
create role budi;

--menhapus role hak akses
drop role eko;
drop role budi;

--menentukan password pada role
alter role eko login password 'rahasia';
alter role budi login password 'rahasia';

--menambah hak akses ke user
grant insert, update, select on all tables in schema public to eko;
grant usage, select, update on guestbooks_id_seq to eko;

grant insert, update, select on customer to budi;

revoke insert, update, select on customer from budi;

SELECT inet_server_addr();

show port;

SELECT usename FROM pg_user;


--backup database
pg_dump --host=localhost --port=5432 --dbname=belajar_postgresql --username=postgres --format=plain --file=backup/backup.sql

--restore database
psql --host=localhost --port=5432 --dbname=belajar_postgresql_restore --username=postgres --file=backup/backup.sql











