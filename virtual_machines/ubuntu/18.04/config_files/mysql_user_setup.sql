use mysql;
update user set authentication_string=password('root'), plugin='mysql_native_password' where user='root';
grant all on *.* to 'root'@'%';
flush privileges;
