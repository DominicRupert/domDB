import { burgService } from '../services/BurgService.js'
import BaseController from '../utils/BaseController.js'

export class BurgController extends BaseController {
  constructor() {
    super('api/burgs')
    this.router
      .get('', this.getAllBurgs)
      .get('/:id', this.getBurgById)
      .post('', this.createBurg)
      .put('/:id', this.editBurg)
      .delete('/:id', this.deleteBurg)
  }

  async getAllBurgs(req, res, next) {
    try {
      const burgs = await burgService.getAllBurgs(req.query)
      res.send(burgs)
    } catch (error) {
      next(error)
    }
  }

  async getBurgById(req, res, next) {
    try {
      const burgId = req.params.id
      const foundBurg = await burgService.getBurgById(burgId)
      res.send(foundBurg)
    } catch (error) {
      next(error)
    }
  }

  async createBurg(req, res, next) {
    try {
      const burgToCreate = req.body
      const createdBurg = await burgService.createBurg(burgToCreate)
      res.send(createdBurg)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurg(req, res, next) {
    try {
      const burgToDeleteId = req.params.id
      const defeatedBurg = await burgService.deleteBurg(burgToDeleteId)
      res.send(defeatedBurg)
    } catch (error) {
      next(error)
    }
  }

  async editBurg(req, res, next) {
    try {
      req.body.id = req.params.id
      const editedBurg = await burgService.editBurg(req.body)
      res.send(editedBurg)
    } catch (error) {
      next(error)
    }
  }
}
