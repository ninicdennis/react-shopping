insert into orders(purchase_handle, item_name, order_date, seller_name, order_number, item_price) values
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 3rd','Russia','04bdab94-784a','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot again','July 4th','Russia','04bdae3c-784a','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 5th','Russia','04bdafa4-784a','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 6th','Russia','04bdb0e4-784a','3.00'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','a boot','July 7th','Russia','04bdb22e-784a','3.00')
on conflict do nothing