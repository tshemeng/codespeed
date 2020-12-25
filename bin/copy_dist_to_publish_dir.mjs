import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import path from 'path'

function CopyDirectory(src, dest) {
    mkdirSync(dest, { recursive: true }, (err) => { if (err) console.error(err) })
    if (existsSync(src) == false) {
        return false
    }
    var dirs = readdirSync(src)
    dirs.forEach(function (item) {
        var item_path = path.join(src, item)
        var temp = statSync(item_path)
        if (temp.isFile()) {
            console.log(`Copy file ${item_path} to ${path.join(dest, item)}`)
            copyFileSync(item_path, path.join(dest, item))
        } else if (temp.isDirectory()) {
            CopyDirectory(item_path, path.join(dest, item))
        }
    })
}

CopyDirectory('dist', 'publish')
