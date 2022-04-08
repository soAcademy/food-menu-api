CREATE TABLE IF NOT EXISTS menu(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  table_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders_item(
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  menu_id INTEGER NOT NULL,
  name VARCHAR NOT NULL,
  price REAL NOT NULL,
  quantity INTEGER NOT NULL,
  total_price REAL NOT NULL
);
