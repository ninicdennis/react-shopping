insert into cart(user_handle, item_handle,active,quantity) values
   ('037b4897-8a2a-46b6-8ed7-47a555bb40f2','81d9bb8b-ae94-4067-8c82-f18e2a1cf3dd',true, 1),
   ('17832b68-e91e-45f4-9a92-042c69b1b9c5','152825d2-26ea-4a15-a659-a5f052624ed1',true, 2)
   on conflict do nothing;
