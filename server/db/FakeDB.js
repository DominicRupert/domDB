import { generateId } from '../../client/app/Utils/generateId.js'

export const FakeDB = {
  burgs: [
    {
      name: 'Classic',
      extras: 'none',
      id: generateId()
    },
    {
      name: 'Extra',
      extras: 'Bacon',
      id: generateId()
    },
    {
      name: 'Hedgehog',
      extras: 'Sonic',
      id: generateId()
    }
  ]
}
