create table if not exists orderitem
(
   user_handle uuid references users(user_handle),
   purchase_handle uuid references orders(purchase_handle),
   item_handle uuid references items(item_handle),
   seller_handle uuid references sellers(seller_handle),
   quantity text not null,

   primary key (user_handle,purchase_handle,item_handle)

);

grant select, insert, update, delete on table orderitem to project_app;
grant select on table orderitem to project_read;