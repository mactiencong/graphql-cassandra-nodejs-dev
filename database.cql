create keyspace maticoKp with replication={class:SimpleStrategy,replication_factor:3};

create table Person (
    id int,
    name text,
    age int,
    primary key (id)
);
insert into Person(id,name,age) values(1,'matico',29);
insert into Person(id,name,age) values(2,'congmt',18);