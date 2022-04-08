CREATE TABLE IF NOT EXISTS menu(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  image VARCHAR NOT NULL,
  price REAL NOT NULL,
  category VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  table_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders_item(
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  menu_id INTEGER NOT NULL,
  price REAL NOT NULL,
  quantity INTEGER NOT NULL,
  total_price REAL NOT NULL
);


INSERT INTO menu ("name", "image", "price", "category")
VALUES
  ('แกงส้มชะอมกุ้ง', 'https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg', 150, 'แนะนำ'),
  ('แกงส้มชะอมกุ้ง', 'https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg', 150, 'แกง'),
  ('ผัดคะน้าเห็ดหอม', 'https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg', 130, 'แนะนำ'),
  ('ผัดคะน้าเห็ดหอม', 'https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg', 130, 'ผัด'),
  ('หมูสามชั้นคั่วพริกเกลือ', 'https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg', 200, 'แนะนำ'),
  ('หมูสามชั้นคั่วพริกเกลือ', 'https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg', 200, 'ทอด'),
  ('ผัดมะเขือยาวหมูสับ', 'https://www.maeban.co.th/upfiles/blog/2644_37_22.jpg', 130, 'ผัด'),
  ('ปลากะพงผัดคึ่นช่าย', 'https://i.ytimg.com/vi/Y-iH7nfeUCE/maxresdefault.jpg', 130, 'ผัด'),
  ('ยอดฟักแม้วผัดหมูสับ', 'https://i.ytimg.com/vi/6yM0oog1iDQ/maxresdefault.jpg', 130, 'ผัด'),
  ('ปลานิลทอดน้ำปลา', 'https://img-global.cpcdn.com/recipes/1ec6618e288a3f43/1200x630cq70/photo.jpg', 250, 'ทอด'),
  ('กุ้งทอดซอสมะขาม', 'https://www.hongthongrice.com/v2/wp-content/uploads/2018/01/HTR-Deep-Fried-Shrimp-Cover.jpg', 180, 'ทอด'),
  ('ไก่ทอดสมุนไพร', 'https://food.mthai.com/app/uploads/2018/05/Lemongrass-Fried-Chicken.jpg', 160, 'ทอด'),
  ('แกงฟักทองหมู', 'http://f.ptcdn.info/754/045/000/od2lq597lpF6HbXH4y4-o.jpg', 180, 'แกง'),
  ('แกงเขียวหวาน', 'https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2019/01/21-2.jpg', 180, 'แกง'),
  ('แกงส้มไข่ปลาริวกิว', 'https://img-global.cpcdn.com/recipes/30d629683ebad9f5/1200x630cq70/photo.jpg', 180, 'แกง'),
  ('ต้มจ็ดหมูสับ', 'https://shopee.co.th/blog/wp-content/uploads/2021/03/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%88%E0%B8%B7%E0%B8%94%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A.jpg', 180, 'ต้ม'),
  ('ต้มข่าไก่', 'https://thainipponfoods.com/wp-content/uploads/2022/01/Chicken-coconut-milk-pic-1.jpg', 180, 'ต้ม'),
  ('ต้มแซ่บหมูกระดูกอ่อน', 'https://www.khaosod.co.th/wpapp/uploads/2020/09/col10p1-2.jpg', 180, 'ต้ม')
