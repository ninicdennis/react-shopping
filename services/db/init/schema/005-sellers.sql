create table if not exists sellers
(
   seller_handle uuid references users(user_handle),
   seller_info text,
);

grant select, insert, update, delete on table sellers to project_app;
grant select on table sellers to project_read;