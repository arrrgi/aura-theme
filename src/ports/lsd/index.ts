import { AuraAPI } from 'core'
import { resolve } from 'path'

export async function LsdPort(Aura: AuraAPI) {
  const {
    createPort,
    createReadme,
    colorSchemes,
    constants,
    copyExtraFiles,
  } = Aura
  const templateFolder = resolve(__dirname, 'templates')
  const { info } = constants

  const portName = 'Lsd'
  const version = '1.0.0'
  const previewURL = `https://github.com/${info.author.username}/assets/blob/master/images/${info.slug}/aura-lsd-preview.png?raw=true`

  await createPort({
    template: resolve(templateFolder, `colors.yaml`),
    outputFileName: `dark-colors`,
    replacements: {
      ...colorSchemes.dark,
      ...info,
      version,
    },
  })

  await createPort({
    template: resolve(templateFolder, `colors.yaml`),
    outputFileName: `dark-soft-colors`,
    replacements: {
      ...colorSchemes.darkSoft,
      ...info,
      version,
    },
  })

  await copyExtraFiles(__dirname)

  await createReadme({
    template: resolve(templateFolder, 'README.md'),
    replacements: {
      portName,
      version,
      previewURL,
    },
  })
}
