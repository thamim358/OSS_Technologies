import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const root = process.cwd()
const outputPath = path.join(root, 'dist', 'index.html')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const appHtml = renderToString(React.createElement(App))
  const html = await readFile(outputPath, 'utf8')

  if (!html.includes('<!--app-html-->')) {
    throw new Error('The prerender marker is missing from index.html')
  }

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html.replace('<!--app-html-->', appHtml))
  process.stdout.write('Prerendered the home page into dist/index.html\n')
} finally {
  await server.close()
}
