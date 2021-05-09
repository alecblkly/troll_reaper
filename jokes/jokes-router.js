const express = require("express");
const Trolling = require("./jokes-model");
const router = express.Router();

router.get("/", (req, res) => {
    Trolling.find()
      .then(troll => {
        res.status(200).json(troll);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: `Failed to get trolls, error: ${error}.` });
      });
  });

  router.get("/random", async (req, res) => {
    Trolling.findRandom()
      .then(obj => {
        res.status(200).json(obj[0].troll)
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: `Failed to get trolls, error: ${error}.` });
      });
  });

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Trolling.findById(id)
        .then(troll => {
            if (troll) {
                res.json(troll)
            } else {
                res.status(404)
                .json({ message: "Could not find a troll with that ID. LUL "})
            }
        })
        .catch(error => {
            res.status(500)
            .json({message: `Failed to get a troll, error: ${error}`})
        })
})

router.post("/", (req, res) => {
    const TrollData = req.body;

    Trolling.add(TrollData)
        .then(troll => {
            res.status(201)
            .json({ message: `The troll has been successfully added.`})
        })
        .catch(error => {
            res.status(500)
            .json({ message: `Failed to add a new troll, error: ${error}`})
        })
})

module.exports = router;