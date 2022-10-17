import CodeAnalyzer from '../code-analyzer/src/code-analyzer.js'

export default class CodeSummary {
  constructor (file) {
    this.file = file
    this.codeAnalyzer = new CodeAnalyzer(this.file)
    this.code = this.readCode()
  }

  readCode () {
    return this.codeAnalyzer.readFile()
  }

  analyzeCode () {
    const analyzedCode = {}

    analyzedCode.numberOfLines = this.codeAnalyzer.countLines(this.code)
    analyzedCode.numberOfCharacters = this.codeAnalyzer.countCharacters(this.code)
    analyzedCode.numberOfForLoops = this.codeAnalyzer.countForLoops(this.code)
    analyzedCode.numberOfJsdocComments = this.codeAnalyzer.countJsdocComments(this.code)
    analyzedCode.numberOfReturns = this.codeAnalyzer.countReturns(this.code)
    analyzedCode.numberOfVariables = this.codeAnalyzer.countVariables(this.code)
    analyzedCode.numberOfWhileLoops = this.codeAnalyzer.countWhileLoops(this.code)
    analyzedCode.numberOfInlineComments = this.codeAnalyzer.countInlineComments(this.code)
    analyzedCode.longestLine = this.codeAnalyzer.longestLine(this.code).lineNumber

    return analyzedCode
  }

  inlineCommentsPerLine () {
    return (this.analyzeCode().numberOfInlineComments / this.analyzeCode().numberOfLines).toFixed(2)
  }

  charactersPerLine () {
    return (this.analyzeCode().numberOfCharacters / this.analyzeCode().numberOfLines).toFixed()
  }

  longestLine () {
    const longestLine = this.codeAnalyzer.longestLine(this.code).lineLength
    const lineNumber = this.codeAnalyzer.longestLine(this.code).lineNumber
    if (longestLine > 125) {
      return `The longest line is over 125 (${longestLine}) characters, ` +
        `you should consider shortening it. It's found on line ${lineNumber}.`
    } else {
      return `The longest line is (${longestLine}) characters and doesn't seem to long. It's found on line ${lineNumber}.`
    }
  }

  print () {
    console.table(this.analyzeCode())
    console.log('There\'s an average of ' + this.inlineCommentsPerLine() + ' comments per line.')
    console.log('There\'s an average of ' + this.charactersPerLine() + ' characters per line.')
    console.log(this.longestLine())
  }

  run () {
    this.print()
  }
}
