select
  c.id,
  c.name
from
  customers as c
where
  id not in (
    select
      id_customers
    from
      locations
  )