drop table if exists "acknowledgment";
drop table if exists "combinaison";
drop table if exists "token";

create table "token" (
	id serial primary key,
	uuid varchar(255) not null,
  "user" varchar(255) not null,
	website varchar(255) not null,
	"time" timestamp not null
);


create table "combinaison" (
	id serial primary key,
	website varchar(255) not null,
	mac varchar(255) not null,
	"user" varchar(255) not null,
	movements varchar(255) not null
);

create table "acknowledgment" (
	id serial primary key,
	id_combinaison integer not null,
	"time" timestamp not null,
	completed boolean default false not null,
	constraint fk_id_combinaison foreign key (id_combinaison) references combinaison(id)
);