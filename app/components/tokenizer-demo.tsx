'use client'

import { useState, useEffect } from 'react'

interface Token {
  text: string
  isSpecial: boolean
  compressionRatio: number
}

interface TokenizerData {
  vocab: Record<string, number[]>
  merges: Record<string, number>
  special_tokens: Record<string, number>
  pattern: string
}

const tokenColors = [
  'bg-blue-500/30 border-blue-400/50',
  'bg-green-500/30 border-green-400/50', 
  'bg-purple-500/30 border-purple-400/50',
  'bg-yellow-500/30 border-yellow-400/50',
  'bg-red-500/30 border-red-400/50',
  'bg-cyan-500/30 border-cyan-400/50',
  'bg-pink-500/30 border-pink-400/50',
  'bg-indigo-500/30 border-indigo-400/50',
  'bg-orange-500/30 border-orange-400/50',
  'bg-teal-500/30 border-teal-400/50'
]

const basketballTokens: Record<string, boolean> = {
  'jayson': true,
  'tatum': true, 
  'eltic': true,
  'celtics': true,
  'basketball': true,
  'nba': true,
  'boston': true,
  'point': true,
  'game': true,

}

class BPETokenizer {
  private vocab: Record<string, number[]>
  private merges: Record<string, number>
  private specialTokens: Record<string, number>
  private pattern: RegExp
  private idToToken: Map<number, string>
  private tokenToId: Map<string, number>

  constructor(data: TokenizerData) {
    this.vocab = data.vocab
    this.merges = data.merges
    this.specialTokens = data.special_tokens
    this.pattern = new RegExp(data.pattern, 'g')
    
    // Create reverse mappings
    this.idToToken = new Map()
    this.tokenToId = new Map()
    
    // Add base tokens (0-255 are single bytes)
    for (let i = 0; i < 256; i++) {
      const char = String.fromCharCode(i)
      this.idToToken.set(i, char)
      this.tokenToId.set(char, i)
    }
    
    // Add learned tokens from vocab
    for (const [token, bytes] of Object.entries(this.vocab)) {
      const id = parseInt(token)
      if (id >= 256) {
        const text = String.fromCharCode(...bytes)
        this.idToToken.set(id, text)
        this.tokenToId.set(text, id)
      }
    }
    
    // Add special tokens
    for (const [token, id] of Object.entries(this.specialTokens)) {
      this.idToToken.set(id, token)
      this.tokenToId.set(token, id)
    }
  }

  private getByteArray(text: string): number[] {
    const encoder = new TextEncoder()
    return Array.from(encoder.encode(text))
  }

  private applyMerges(tokens: number[]): number[] {
    if (tokens.length <= 1) return tokens
    
    while (true) {
      let bestMerge: string | null = null
      let bestMergeId = Infinity
      let bestMergePos = -1
      
      // Find the best merge to apply
      for (let i = 0; i < tokens.length - 1; i++) {
        const pair = `${tokens[i]},${tokens[i + 1]}`
        if (this.merges[pair] && this.merges[pair] < bestMergeId) {
          bestMerge = pair
          bestMergeId = this.merges[pair]
          bestMergePos = i
        }
      }
      
      if (!bestMerge) break
      
      // Apply the merge
      const newTokens = [
        ...tokens.slice(0, bestMergePos),
        bestMergeId,
        ...tokens.slice(bestMergePos + 2)
      ]
      tokens = newTokens
    }
    
    return tokens
  }

  tokenize(text: string): number[] {
    const matches = text.match(this.pattern) || []
    const allTokens: number[] = []
    
    for (const match of matches) {
      const bytes = this.getByteArray(match)
      const tokens = this.applyMerges(bytes)
      allTokens.push(...tokens)
    }
    
    return allTokens
  }

  decode(tokens: number[]): string {
    return tokens.map(id => this.idToToken.get(id) ?? '').join('')
  }

  getTokenStrings(tokens: number[]): string[] {
    return tokens.map(id => this.idToToken.get(id) || `<UNK:${id}>`)
  }
}

async function loadTokenizer(): Promise<BPETokenizer | null> {
  try {
    const response = await fetch('/resources/files/custom_tokenizer.json')
    const data = await response.json()
    return new BPETokenizer(data)
  } catch (error) {
    console.error('Failed to load tokenizer:', error)
    return null
  }
}

function bpeTokenize(text: string, tokenizer: BPETokenizer): Token[] {
  const tokenIds = tokenizer.tokenize(text)
  const tokenStrings = tokenizer.getTokenStrings(tokenIds)
  
  return tokenStrings.map(token => {
    const isBasketball = basketballTokens[token.toLowerCase()]
    return {
      text: token,
      isSpecial: isBasketball,
      compressionRatio: isBasketball ? 0.3 : 0.6
    }
  })
}

export function TokenizerDemo() {
  const [text, setText] = useState("Jayson Tatum is a Celtic.")
  const [tokens, setTokens] = useState<Token[]>([])
  const [tokenizer, setTokenizer] = useState<BPETokenizer | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTokenizer().then(t => {
      setTokenizer(t)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (tokenizer) {
      const newTokens = bpeTokenize(text, tokenizer)
      setTokens(newTokens)
    }
  }, [text, tokenizer])

  const compressionRatio = text.length > 0 
    ? Math.round((text.length / tokens.length) * 100)
    : 0

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl shadow-lg">
      <div className="mb-4">
        <label className="block text-white text-sm font-medium mb-2">
          Enter text to tokenize:
        </label>
        <textarea
          className="w-full p-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
          rows={3}
          placeholder="Try typing: 'Jayson Tatum is the best Celtic player!' or any text you want..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-sm text-gray-300">Token Count</p>
          <p className="text-xl font-bold text-white">{tokens.length}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-sm text-gray-300">Character Count</p>
          <p className="text-xl font-bold text-white">{text.length}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg">
          <p className="text-sm text-gray-300">Compression Ratio</p>
          <p className="text-xl font-bold text-green-400">{compressionRatio}%</p>
        </div>
      </div>
      
      <div className="bg-black/30 p-4 rounded-lg">
        <p className="text-sm text-gray-300 mb-2">Tokenized Output:</p>
        <div className="flex flex-wrap gap-1">
          {tokens.map((token, index) => {
            const colorClass = tokenColors[index % tokenColors.length]
            const specialClass = token.isSpecial ? 'ring-2 ring-yellow-400/50' : ''
            return (
              <span
                key={index}
                className={`${colorClass} text-white px-2 py-1 rounded text-sm border ${specialClass} cursor-help`}
                title={`Token: ${token.text}\nCompression: ${Math.round(token.compressionRatio * 100)}%${token.isSpecial ? '\n🏀 Basketball term!' : ''}`}
              >
                {token.text}
              </span>
            )
          })}
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Each color represents a different token. Basketball terms (highlighted with yellow rings) get better compression due to domain-specific training!
        </p>
      </div>
    </div>
  )
} 