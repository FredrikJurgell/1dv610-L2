import CodeAnalyzer from '../code-analyzer/src/code-analyzer.js'

export default class CodeSummary {
  constructor (file) {
    this.file = file
    this.codeAnalyzer = new CodeAnalyzer(this.file)
  }

  readCode() {
    return this.codeAnalyzer.readFile()
  }

  analyzeCode() {
    const code = this.readCode()
    const analyzedCode = {}

    analyzedCode.numberOfLines = this.codeAnalyzer.countLines(code)
    analyzedCode.numberOfCharacters = this.codeAnalyzer.countCharacters(code)
    analyzedCode.numberOfForLoops = this.codeAnalyzer.countForLoops(code)
    analyzedCode.numberOfJsdocComments = this.codeAnalyzer.countJsdocComments(code)
    analyzedCode.numberOfReturns = this.codeAnalyzer.countReturns(code)
    analyzedCode.numberOfVariables = this.codeAnalyzer.countVariables(code)
    analyzedCode.numberOfWhileLoops = this.codeAnalyzer.countWhileLoops(code)

    return analyzedCode
  }

  print() {
    console.table(this.analyzeCode())
  }

  run() {
    this.print()
  }
}