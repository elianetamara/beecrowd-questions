select
  c.name,
  sum(p.amount) as sum
from
  categories as c
  inner join products as p on p.id_categories = c.id
  group by c.name