insert into orders(purchase_handle, item_name, order_date, seller_name, order_number, item_price) values
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','1','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','2','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','3','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','4','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','5','3.00')
on conflict do nothing