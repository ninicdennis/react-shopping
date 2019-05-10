create table if not exists sellers
(
   seller_handle uuid primary key references users(user_handle),
   information text not null,
   seller_username text not null,
   item_selling text not null
);

grant select, insert, update, delete on table sellers to project_app;
grant select on table sellers to project_read;