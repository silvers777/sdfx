import { ListItem } from 'features/main/types'

export const compareName = function (a: ListItem, b: ListItem) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }

  return 0
}
