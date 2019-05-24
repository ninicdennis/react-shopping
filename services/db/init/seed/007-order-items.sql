insert into orderitem(user_handle,purchase_handle,item_handle,seller_handle,quantity) values
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','52e7e2a4-7491-4a4c-a032-7ef1f5ffec6c','81d9bb8b-ae94-4067-8c82-f18e2a1cf3dd','037b4897-8a2a-46b6-8ed7-47a555bb40f2','1'),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2','678370a9-0979-4247-92dc-6ce6dff872f8','152825d2-26ea-4a15-a659-a5f052624ed1','17832b68-e91e-45f4-9a92-042c69b1b9c5','2')
on conflict do nothing;