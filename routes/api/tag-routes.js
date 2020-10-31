const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
/************************* Acceptance Criteria #4 *************************/
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: [
                'id',
                'tag_name'
                ],
      include: [
              {
                model: Product,
                attributes: [
                            'id',
                            'product_name',
                            'price',
                            'stock',
                            'category_id'
                            ]
              }
            ]
  })
  .then((dbGetData) => {
            res.json(dbGetData)
          })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where : {
      id: req.params.id
    },
    attributes: [
                'id',
                'tag_name'
                ],
      include: [
              {
                model: Product,
                attributes: [
                            'id',
                            'product_name',
                            'price',
                            'stock',
                            'category_id'
                            ]
              }
            ]
  })
  .then((dbGetDataById) => {
            res.json(dbGetDataById)
          })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
/**************************************************************************/

/************************* Acceptance Criteria #5 *************************/
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbPostData) => {
      res.json(dbPostData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
    tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
  })
    .then((dbPutData) => {
      res.json(dbPutData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDelData => {
      if (!dbDelData) {
        res.status(404).json({ message: 'No Tag was found with this id' });
        return;
      }
      res.json(dbDelData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
/**************************************************************************/

module.exports = router;
