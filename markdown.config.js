const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    DEPENDENCYTABLE: require('markdown-magic-dependency-table'),
    SCRIPTS: require('markdown-magic-package-scripts')
  },
  DEBUG: true
}

let markdownPath = path.join(__dirname, '*.md')
markdownMagic(markdownPath, config)
