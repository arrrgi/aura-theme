import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function ChromaPort(Aura: AuraAPI) {
  const { createPort, createReadme, colorSchemes, constants } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Chroma'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-chroma-preview.png?raw=true`

  await createPort({
    template: resolve(templateFolder, `${info.slug}.xml`),
    outputFileName: `${info.slug}-dark`,
    replacements: {
      ...colorSchemes.dark,
      ...info,
      version,
      displayName: `${info.displayName} Dark`,
    },
  })

  await createPort({
    template: resolve(templateFolder, `${info.slug}.xml`),
    outputFileName: `${info.slug}-soft-dark`,
    replacements: {
      ...colorSchemes.darkSoft,
      ...info,
      version,
      displayName: `${info.displayName} Dark Soft`,
    },
  })

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
