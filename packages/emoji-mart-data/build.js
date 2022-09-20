const { mkdir, writeFile, rmSync, readFileSync } = require('fs')
const { execSync } = require('child_process')
const path = require('path')
const glob = require('glob')

const inflection = require('inflection')
const emojiLib = require('emojilib')
const emojiData = require('emoji-datasource')
const unicodeEmoji = require('unicode-emoji-json')

const DRY_RUN = process.argv.indexOf('--dry') != -1
const CDN_BASE = process.env.CDN_BASE || ''
const COPY_DEST = process.env.COPY_DEST || ''

const VERSIONS = [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14]
const SKINS = ['1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF']
const SETS = ['native', 'apple', 'facebook', 'google', 'twitter', 'fluentui']
const CATEGORIES = [
  ['Smileys & Emotion', 'smileys'],
  ['People & Body', 'people'],
  ['Animals & Nature', 'nature'],
  ['Food & Drink', 'foods'],
  ['Activities', 'activity'],
  ['Travel & Places', 'places'],
  ['Objects', 'objects'],
  ['Symbols', 'symbols'],
  ['Flags', 'flags'],
]

const KEYWORD_SUBSTITUTES = {
  highfive: 'highfive high-five',
}

function getSkinTone(file) {
  file = file.replace('.svg', '.png')
  const clean = path.basename(file).replace(/(\(|\))/g, '')
  // const svg = readFileSync(file, 'utf-8').toString()
  const png = readFileSync(file, 'utf-8').toString()
  // const data = `data:image/svg+xml,${encodeURIComponent(svg)
  const data = `data:image/png,${encodeURIComponent(png)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')}`
  return {
    url: `${CDN_BASE}/${clean}`,
    data, // this will increate output json dramatically!
    name: clean,
    file,
  }
}

const FLUENT = glob
  .sync(path.resolve('./fluentui-emoji/assets/**/*.json'))
  .map((file) => ({
    path: path.dirname(file),
    meta: JSON.parse(readFileSync(file, 'utf-8').toString()),
  }))
  .map((emoji) => {
    const color = glob.sync(`${emoji.path}/Color/*.svg`)
    const flat = glob.sync(`${emoji.path}/Flat/*.svg`)
    const darkColor = glob.sync(`${emoji.path}/Dark/Color/*.svg`)
    const darkFlat = glob.sync(`${emoji.path}/Dark/Flat/*.svg`)
    const defaultColor = glob.sync(`${emoji.path}/Default/Color/*.svg`)
    const defaultFlat = glob.sync(`${emoji.path}/Default/Flat/*.svg`)
    const lightColor = glob.sync(`${emoji.path}/Light/Color/*.svg`)
    const lightFlat = glob.sync(`${emoji.path}/Light/Flat/*.svg`)
    const mediumColor = glob.sync(`${emoji.path}/Medium/Color/*.svg`)
    const mediumFlat = glob.sync(`${emoji.path}/Medium/Flat/*.svg`)
    const mediumDarkColor = glob.sync(`${emoji.path}/Medium-Dark/Color/*.svg`)
    const mediumDarkFlat = glob.sync(`${emoji.path}/Medium-Dark/Flat/*.svg`)
    const mediumLightColor = glob.sync(`${emoji.path}/Medium-Light/Color/*.svg`)
    const mediumLightFlat = glob.sync(`${emoji.path}/Medium-Light/Flat/*.svg`)
    const icon = color[0] || flat[0] || defaultColor[0] || defaultFlat[0]
    if (icon) {
      const unified = emoji.meta.unicode.replace(/\s+/g, '-')
      const skins = {}
      const skinTones = emoji.meta.unicodeSkintones
      if (skinTones) {
        skins[unified] = { ...getSkinTone(icon) }
        if (lightColor[0] || lightFlat[0]) {
          skins[skinTones[1].replace(/\s+/g, '-')] = {
            ...getSkinTone(lightColor[0] || lightFlat[0]),
          }
        }
        if (mediumLightColor[0] || mediumLightFlat[0]) {
          skins[skinTones[2].replace(/\s+/g, '-')] = {
            ...getSkinTone(mediumLightColor[0] || mediumLightFlat[0]),
          }
        }
        if (mediumColor[0] || mediumFlat[0]) {
          skins[skinTones[3].replace(/\s+/g, '-')] = {
            ...getSkinTone(mediumColor[0] || mediumFlat[0]),
          }
        }
        if (mediumDarkColor[0] || mediumDarkFlat[0]) {
          skins[skinTones[4].replace(/\s+/g, '-')] = {
            ...getSkinTone(mediumDarkColor[0] || mediumDarkFlat[0]),
          }
        }
        if (darkColor[0] || darkFlat[0]) {
          skins[skinTones[5].replace(/\s+/g, '-')] = {
            ...getSkinTone(darkColor[0] || darkFlat[0]),
          }
        }
      }
      if (COPY_DEST) {
        if (skinTones) {
          Object.values(skins).forEach((skin) =>
            execSync(
              `cp ${skin.file
                .replace(/\s+/g, '\\ ')
                .replace(/\(/g, '\\(')
                .replace(/\)/g, '\\)')} ${path.resolve(COPY_DEST)}/${
                skin.name
              }`,
            ),
          )
        } else {
          execSync(
            `cp ${icon
              .replace('.svg', '.png')
              .replace(/\s+/g, '\\ ')
              .replace(/\(/g, '\\(')
              .replace(/\)/g, '\\)')} ${path.resolve(COPY_DEST)}/${
              getSkinTone(icon).name
            }`,
          )
        }
      }
      return [
        {
          unified,
          file: icon.replace('.svg', '.png'),
          skins,
          ...getSkinTone(icon),
        },
      ]
    } else {
      console.log('Unable to find color icon at', emoji.path)
      return []
    }
  })
  .flat()

// console.log(JSON.stringify(FLUENT, null, 2))
// process.exit()

function unifiedToNative(unified) {
  let unicodes = unified.split('-')
  let codePoints = unicodes.map((u) => `0x${u}`)

  return String.fromCodePoint(...codePoints)
}

function buildData({ set, version } = {}) {
  const categoriesIndex = {}
  const nativeSet = set == 'native'
  const fluentSet = set == 'fluentui'
  const data = {
    categories: [],
    emojis: {},
    aliases: {},
    sheet: { cols: 61, rows: 61 },
  }

  CATEGORIES.forEach((category, i) => {
    let [name, id] = category
    data.categories[i] = { id: id, emojis: [] }
    categoriesIndex[name] = i
  })

  emojiData.sort((a, b) => {
    let aTest = a.sort_order || a.short_name
    let bTest = b.sort_order || b.short_name

    return aTest - bTest
  })

  emojiData.forEach((datum) => {
    if (set && !nativeSet && !fluentSet) {
      if (!datum[`has_img_${set}`]) {
        return
      }
    }

    if (!datum.category) {
      throw new Error(`“${datum.short_name}” doesn’t have a category`)
    }

    let unified = datum.unified.toLowerCase()
    let native = unifiedToNative(unified)

    let name = inflection.titleize(
      datum.name || datum.short_name.replace(/\-/g, ' ') || '',
    )

    let unicodeEmojiName = inflection.titleize(unicodeEmoji[native]?.name || '')
    if (
      name.indexOf(':') == -1 &&
      unicodeEmojiName.length &&
      unicodeEmojiName.length < name.length
    ) {
      name = unicodeEmojiName
    }

    if (!name) {
      throw new Error(`“${datum.short_name}” doesn’t have a name`)
    }

    let ids = datum.short_names || []
    if (ids.indexOf(datum.short_name) == -1) {
      ids.unshift(datum.short_name)
    }

    for (let id of ids) {
      if (id == ids[0]) continue
      data.aliases[id] = ids[0]
    }

    let id = ids[0]

    let emoticons = datum.texts || []
    if (datum.text && emoticons.indexOf(datum.text) == -1) {
      emoticons.unshift(datum.text)
    }

    if (id == 'expressionless') {
      if (emoticons.indexOf('-_-') == -1) {
        emoticons.push('-_-')
      }
    }

    let keywords = ids
      .concat(emojiLib[native] || [])
      .map((word) => {
        word = KEYWORD_SUBSTITUTES[word] || word
        return word
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .replace(/(\w)-/, '$1_')
          .split(/[_|\s]+/)
      })
      .flat()
      .filter((word, i, words) => {
        return (
          words.indexOf(word) === i &&
          name.toLowerCase().split(/\s/).indexOf(word) == -1
        )
      })

    let s = { unified, native }
    if (fluentSet) {
      const icon = FLUENT.find((item) => item.unified === unified)
      if (icon) {
        s = { src: CDN_BASE ? icon.url : icon.data }
      } else {
        // console.log('Unable to find icon by unified code:', unified)
      }
    } else if (!nativeSet) {
      s.x = datum.sheet_x
      s.y = datum.sheet_y
    }

    let skins = [s]

    if (datum.skin_variations) {
      for (let skin of SKINS) {
        let skinDatum =
          datum.skin_variations[skin] ||
          datum.skin_variations[`${skin}-${skin}`]

        if (
          !skinDatum ||
          (set && !nativeSet && !fluentSet && !skinDatum[`has_img_${set}`])
        ) {
          skins.push(null)
          continue
        }

        let unified = skinDatum.unified.toLowerCase()
        let native = unifiedToNative(skinDatum.unified)
        let s = { unified, native }
        if (fluentSet) {
          const skinTone = FLUENT.find((item) =>
            Object.keys(item.skins).find((u) => u === unified),
          )
          if (skinTone) {
            s = {
              src: CDN_BASE
                ? skinTone.skins[unified].url
                : skinTone.skins[unified].data,
            }
          } else {
            console.log(
              'Unable to find icon skin tone by unified code:',
              unified,
            )
          }
        } else if (!nativeSet) {
          s.x = skinDatum.sheet_x
          s.y = skinDatum.sheet_y
        }

        skins.push(s)
      }
    }

    let addedIn = parseFloat(datum.added_in)
    if (addedIn < 1) addedIn = 1

    if (version && addedIn > version) {
      return
    }

    const emoji = {
      id,
      name,
      emoticons,
      keywords,
      skins,
      version: addedIn,
    }

    if (!emoji.emoticons.length) {
      delete emoji.emoticons
    }

    if (datum.category != 'Component') {
      let categoryIndex = categoriesIndex[datum.category]
      data.categories[categoryIndex].emojis.push(emoji.id)
      data.emojis[emoji.id] = emoji
    }
  })

  let flags = data.categories[categoriesIndex['Flags']]
  flags.emojis = flags.emojis.sort()

  // Merge “Smileys & Emotion” and “People & Body” into a single category
  let smileys = data.categories[0]
  let people = data.categories[1]
  let smileysAndPeople = { id: 'people' }
  smileysAndPeople.emojis = []
    .concat(smileys.emojis.slice(0, 114))
    .concat(people.emojis)
    .concat(smileys.emojis.slice(114))

  data.categories.unshift(smileysAndPeople)
  data.categories.splice(1, 2)

  if (!DRY_RUN) {
    let folder = 'sets'
    if (version) folder += `/${version}`

    mkdir(folder, { recursive: true }, () => {
      writeFile(
        `${folder}/${set || 'all'}.json`,
        JSON.stringify(data),
        (err) => {
          if (err) throw err
        },
      )
    })
  }
}

if (!DRY_RUN) {
  try {
    rmSync('sets', { recursive: true })
  } catch {}
}

for (let version of VERSIONS) {
  for (let set of SETS) {
    buildData({ set, version })
  }
}
