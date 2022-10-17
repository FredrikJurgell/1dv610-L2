import CodeSummary from './CodeSummary.js'

const main = function () {
  const folder = 'src/analyzeCodeHere/'

  // The file you want analyzed.
  const fileInput = process.argv.slice(2)

  const codeSummary = new CodeSummary(folder + fileInput)
  codeSummary.run()
}

main()
