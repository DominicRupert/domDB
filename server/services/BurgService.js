import { generateId } from '../../client/app/Utils/generateId'
import { FakeDB } from '../db/FakeDB'
import { BadRequest } from '../utils/Errors'

class BurgService {
  async editBurg(newBurg) {
    const originalBurg = await this.getBurgById(newBurg.id)
    originalBurg.name = newBurg.name || originalBurg.name
    originalBurg.extras = newBurg.extras || originalBurg.extras
    return originalBurg
  }

  async createBurg(burgToCreate) {
    burgToCreate.id = generateId()
    FakeDB.burgs.push(burgToCreate)
    return FakeDB.burgs
  }

  async getBurgById(burgId) {
    const foundBurg = FakeDB.burgs.find(b => b.id === burgId)
    if (!foundBurg) {
      throw new BadRequest('unable to get the burg')
    }
    return foundBurg
  }

  async getAllBurgs(query = {}) {
    return FakeDB.burgs
  }
}

export const burgService = new BurgService()
