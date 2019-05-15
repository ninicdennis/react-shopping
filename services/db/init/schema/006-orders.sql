create table if not exists orders
(

   purchase_handle uuid primary key references users(user_handle),
   order_item text not null,
   order_date text not null,
   seller_name text not null,
   order_number text not null,
   item_price text not null

);
grant select, insert, update, delete on table orders to project_app;
grant select on table orders to project_read;