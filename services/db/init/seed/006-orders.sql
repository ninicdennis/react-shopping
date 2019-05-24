insert into orders(purchase_handle, item_name, order_date, seller_name, order_number, item_price) values
('52e7e2a4-7491-4a4c-a032-7ef1f5ffec6c','a boot','July 3rd','Russia','04bdab94-784a','3.00'),
('678370a9-0979-4247-92dc-6ce6dff872f8','a boot again','July 4th','Russia','04bdae3c-784a','3.00')
on conflict do nothing