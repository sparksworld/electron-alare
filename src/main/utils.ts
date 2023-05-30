import * as path from 'path'
import fs from 'fs'

export const getDir = (dir: string) => {
  const items = fs.readdirSync(dir)

  return items.filter((item) => {
    return fs.statSync(path.join(dir, item)).isDirectory()
  })
}
