UPDATE Food
SET name = $2,
    color = $3,
    price = $4
WHERE food_id = $1