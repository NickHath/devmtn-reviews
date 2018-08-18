module.exports = {
  getFoods: (req, res) => {
    const db = req.app.get('db');
    db.get_foods()
      .then(foods => res.status(200).send(foods))
      .catch(err => res.status(500).send('Sorry!'));
  },
  getFoodById: (req, res) => {
    const db = req.app.get('db');
    db.get_food_by_id([req.params.id])
      .then(food => res.status(200).send(food))
      .catch(err => res.status(500).send(err));
  }
};