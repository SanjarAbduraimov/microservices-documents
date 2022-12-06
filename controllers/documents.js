var DocumentsModel = require("../models/documents");

/**
 * documentsController.js
 *
 * @description :: Server-side logic for managing documents.
 */
module.exports = {
  /**
   * documentsController.list()
   */
  list: function (req, res) {
    DocumentsModel.find(function (err, documents) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting documents.",
          error: err,
        });
      }

      return res.json(documents);
    });
  },

  /**
   * documentsController.show()
   */
  show: function (req, res) {
    var id = req.params.id;

    DocumentsModel.findOne({ _id: id }, function (err, documents) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting documents.",
          error: err,
        });
      }

      if (!documents) {
        return res.status(404).json({
          message: "No such documents",
        });
      }

      return res.json(documents);
    });
  },

  /**
   * documentsController.create()
   */
  create: function (req, res) {
    var documents = new DocumentsModel({
      title: req.body.title,
      language: req.body.language,
      user: req.body.user,
    });

    documents.save(function (err, documents) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating documents",
          error: err,
        });
      }

      return res.status(201).json(documents);
    });
  },

  /**
   * documentsController.update()
   */
  update: function (req, res) {
    var id = req.params.id;

    DocumentsModel.findOne({ _id: id }, function (err, documents) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting documents",
          error: err,
        });
      }

      if (!documents) {
        return res.status(404).json({
          message: "No such documents",
        });
      }
      // (title = req.body.title),
      //   (language = req.body.language),
      //   (user = req.body.user),
      documents.title = req.body.title ? req.body.title : documents.title;
      documents.language = req.body.language
        ? req.body.language
        : documents.language;
      documents.user = req.body.user ? req.body.user : documents.user;

      documents.save(function (err, documents) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating documents.",
            error: err,
          });
        }

        return res.json(documents);
      });
    });
  },

  /**
   * documentsController.remove()
   */
  remove: function (req, res) {
    var id = req.params.id;

    DocumentsModel.findByIdAndRemove(id, function (err, documents) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the documents.",
          error: err,
        });
      }

      return res.status(204).json();
    });
  },
};
