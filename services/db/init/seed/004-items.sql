insert into items(item_handle,item_name,item_desc,price,ratings) values
( '81d9bb8b-ae94-4067-8c82-f18e2a1cf3dd','a boot','a single boot.','15.99','3/5'),
( '152825d2-26ea-4a15-a659-a5f052624ed1','fancy boot','a fancier boot, looks nice.','300.00','4/5'),
( '8fe7ce9d-4e98-4dd7-8495-c191d278a862', 'old boot', 'its an old ugly boot.', '20.99', '2/5'), 
( '5d9e1220-f1d9-49ed-9322-15a8189b1603', 'small boot', 'its a small boot, too small for you.', '4.99', '5/5')

on conflict do nothing