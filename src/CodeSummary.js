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
    analyzedCode.numberOfInlineComments = this.codeAnalyzer.countInlineComments(code)

    return analyzedCode
  }

  inlineCommentsPerLine() {
    return (this.analyzeCode().numberOfInlineComments / this.analyzeCode().numberOfLines).toFixed(2)
  }

  charactersPerLine() {
    return (this.analyzeCode().numberOfCharacters / this.analyzeCode().numberOfLines).toFixed()
  }

  print() {
    console.table(this.analyzeCode())
    console.log('There are ' + this.inlineCommentsPerLine() + ' comments per line.')
    console.log('There are ' + this.charactersPerLine() + ' characters per line.')
  }

  run() {
    this.print()
  }
}