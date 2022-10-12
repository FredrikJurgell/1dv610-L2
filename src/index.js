import CodeSummary from './CodeSummary.js'

const main = function() {
  const codeSummary = new CodeSummary('src/analyzeCodeHere/my-rock-paper-scissors-application.js')
  codeSummary.run()
}

main()