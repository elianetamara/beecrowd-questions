select
  p.id,
  p.name
from
  products
  inner join categories as c on p.id_categories = c.id
where
  c.name like 'super%'