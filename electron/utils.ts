import * as path from 'path'
import fs from 'fs'
import * as cheerio from 'cheerio'
import * as url from 'url'

export const getDir = (dir: string) => {
  const items = fs.readdirSync(dir)

  return items
    .filter((item) => {
      const item_path = path.join(dir, item)
      return fs.statSync(item_path).isDirectory()
    })
    .map((item) => {
      const item_path = path.join(dir, item)
      let title = ''
      let description = ''
      let author = ''
      let ico = ''
      try {
        const buffer = fs.readFileSync(path.join(item_path, 'index.html'), {
          encoding: 'utf-8',
        })
        const $ = cheerio.load(buffer)
        title = $('title').text().trim().replace(/\n/g, '')
        author =
          $('meta[name=author]').attr('content')?.trim().replace(/\n/g, '') ||
          ''
        description =
          $('meta[name=description]')
            .attr('content')
            ?.trim()
            .replace(/\n/g, '') || ''

        ico = url.format({
          pathname: path.resolve(
            item_path,
            $('link[rel=icon]').attr('href') || ''
          ),
          protocol: 'file:',
          slashes: true,
        })
        // ico = path.resolve(item_path, $('link[rel=icon]').attr('href') || '')
      } catch (e) {
        title = '未命名'
      }

      return {
        dir_name: item,
        path: path.join(dir, item),
        title: title,
        description: description,
        author: author,
        ico: ico,
      }
    })
}
