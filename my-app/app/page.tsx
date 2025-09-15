"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSwap, setShowSwap] = useState(false)
  const { address } = useAccount()

  if (showSwap) {
    return <SwapPage onBack={() => setShowSwap(false)} />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Flowing sunny rays overlay */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="sunnyPulse1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="30%" stopColor="rgba(251,191,36,1)" />
                <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="100%" stopColor="rgba(249,115,22,0)" />
              </radialGradient>
              <radialGradient id="sunnyPulse2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="25%" stopColor="rgba(252,211,77,0.9)" />
                <stop offset="60%" stopColor="rgba(245,158,11,0.7)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </radialGradient>
              <radialGradient id="sunnyPulse3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="35%" stopColor="rgba(250,204,21,1)" />
                <stop offset="75%" stopColor="rgba(217,119,6,0.6)" />
                <stop offset="100%" stopColor="rgba(217,119,6,0)" />
              </radialGradient>
              
              {/* Hero text background gradients */}
              <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
                <stop offset="40%" stopColor="rgba(251,191,36,0.08)" />
                <stop offset="80%" stopColor="rgba(245,158,11,0.05)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              
              <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>
              
              <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="15%" stopColor="rgba(251,191,36,0.8)" />
                <stop offset="85%" stopColor="rgba(251,191,36,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="12%" stopColor="rgba(252,211,77,0.7)" />
                <stop offset="88%" stopColor="rgba(252,211,77,0.7)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="18%" stopColor="rgba(245,158,11,0.8)" />
                <stop offset="82%" stopColor="rgba(245,158,11,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g>
              {/* Hero text background shape */}
              <ellipse
                cx="300"
                cy="350"
                rx="400"
                ry="200"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.6"
              />
              <ellipse
                cx="350"
                cy="320"
                rx="500"
                ry="250"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.4"
              />
              <ellipse
                cx="400"
                cy="300"
                rx="600"
                ry="300"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.2"
              />

              {/* Animated sunny rays - representing cross-chain flows */}
              {[...Array(20)].map((_, i) => {
                const startX = 50 + i * 15
                const startY = 720 + Math.sin(i * 0.5) * 20
                const endX = 1200
                const endY = 340 + Math.sin(i * 0.7) * 40
                const midX1 = 200 + i * 20 + Math.sin(i) * 50
                const midY1 = 590 + Math.cos(i) * 30
                const midX2 = 500 + i * 15 + Math.cos(i * 1.2) * 40
                const midY2 = 490 + Math.sin(i * 1.5) * 35
                const midX3 = 800 + i * 10 + Math.sin(i * 0.8) * 30
                const midY3 = 450 + Math.cos(i * 1.1) * 25
                
                return (
                  <g key={i}>
                    <path
                      id={`sunRay${i}`}
                      d={`M${startX} ${startY} Q${midX1} ${midY1} ${midX2} ${midY2} Q${midX3} ${midY3} ${endX} ${endY}`}
                      stroke={`url(#threadFade${(i % 3) + 1})`}
                      strokeWidth={0.5 + (i % 3) * 0.3}
                      fill="none"
                      opacity={0.4 + (i % 4) * 0.1}
                    />
                    <circle 
                      r={1 + (i % 3) * 0.5} 
                      fill={`url(#sunnyPulse${(i % 3) + 1})`} 
                      opacity="1" 
                      filter="url(#neonGlow)"
                    >
                      <animateMotion dur={`${4 + (i % 3)}s`} repeatCount="indefinite">
                        <mpath href={`#sunRay${i}`} />
                      </animateMotion>
                    </circle>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes sunPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center pl-3 sm:pl-6 lg:pl-12">
          <LineShadowText className="text-xl sm:text-xl lg:text-xl font-bold">
            SunnySwap
          </LineShadowText>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors text-sm lg:text-base">
            Features
          </a>
          <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors text-sm lg:text-base">
            Documentation
          </a>
          <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors text-sm lg:text-base">
            About
          </a>
          <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors text-sm lg:text-base">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {address ? (
          <ConnectButton chainStatus="icon" accountStatus="avatar" showBalance={false} />
        ) : (
          <ShimmerButton className="hidden md:flex bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
            Connect Wallet
          </ShimmerButton>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">
              Features
            </a>
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">
              Documentation
            </a>
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">
              About
            </a>
            <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors">
              Contact
            </a>
            <ShimmerButton className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Connect Wallet
            </ShimmerButton>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-4 sm:-mt-12 lg:-mt-24 pl-6 sm:pl-12 lg:pl-20">
        {/* Trial Badge */}
        <div className="mb-4 sm:mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 sm:px-4 py-2">
            <span className="text-yellow-300 text-xs md:text-sm">⚡ Fast Cross-Chain Swaps</span>
          </div>
        </div>

        <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
          Cross-Chain Swaps
          <br />
          Made{" "}
          <LineShadowText className="italic font-light">
            Simple
          </LineShadowText>
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-pretty">
          Bridge your assets to Somnia Network
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          with blazing fast transactions and minimal fees.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => setShowSwap(true)}
            className="group relative bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-yellow-400/30 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            Start Swapping
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline"
            className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-200 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </main>
    </div>
  )
}

// Import the swap components
import { FaGithub } from "react-icons/fa"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import { useChainId } from "wagmi"
import StatusModal, { Status, StatusState } from "@/components/StatusModal"
import ConnectModal from "@/components/ConnectModal"

// Enhanced Swap Page Component
function SwapPage({ onBack }: { onBack: () => void }) {
  const [fromChain, setFromChain] = useState(chains[0])
  const [toChain, setToChain] = useState(chains[3])
  const [amount] = useState(1000)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false)
  const [statuses, setStatuses] = useState<Status[]>([])
  const [isSwapping, setIsSwapping] = useState(false)

  const evmSigner = useEthersSigner()
  const connectedChainId = useChainId()
  const { openConnectModal } = useConnectModal()

  const evmConnectWallet = () => {
    if (openConnectModal) {
      openConnectModal()
    }
  }

  const createOrder = async () => {
    console.log("🔄 Starting cross-chain swap...")

    if (fromChain.chainId === toChain.chainId) {
      alert("Source and destination chains must be different.")
      return
    }

    if (!evmSigner) {
      alert("Please connect your EVM wallet to place an order.")
      evmConnectWallet()
      return
    }

    if (connectedChainId !== fromChain.chainId) {
      alert("Please switch to the 'From' network in your wallet.")
      return
    }

    setIsStatusModalOpen(true)
    let currentStatuses: Status[] = []

    const addStatus = (text: string) => {
      console.log(`📌 Status: ${text}`)
      currentStatuses = [...currentStatuses, { text, state: "loading" }]
      setStatuses(currentStatuses)
    }

    const updateLastStatus = (state: StatusState, explorers?: any[]) => {
      const last = currentStatuses[currentStatuses.length - 1]
      console.log(`✅ Updated last status to '${state}':`, last?.text)
      currentStatuses = [
        ...currentStatuses.slice(0, -1),
        { ...last, state, explorers },
      ]
      setStatuses(currentStatuses)
    }

    const addFinalStatus = (text: string, state: StatusState) => {
      console.log(`🏁 Final Status (${state}): ${text}`)
      currentStatuses = [...currentStatuses, { text, state }]
      setStatuses(currentStatuses)
    }

    try {
      setStatuses([])

      addStatus("Checking wallet connection and balance")
      await new Promise((r) => setTimeout(r, 1500))
      updateLastStatus("done")

      addStatus("Preparing cross-chain transaction")
      await new Promise((r) => setTimeout(r, 2000))
      updateLastStatus("done")

      addStatus("Submitting to cross-chain bridge")
      await new Promise((r) => setTimeout(r, 2500))
      updateLastStatus("done", [
        {
          explorerUrl: `${fromChain.explorer}/tx/0x123...`,
          network: fromChain.name,
        },
      ])

      addStatus("Waiting for destination chain confirmation")
      await new Promise((r) => setTimeout(r, 3000))
      updateLastStatus("done", [
        {
          explorerUrl: `${toChain.explorer}/tx/0x456...`,
          network: toChain.name,
        },
      ])

      addFinalStatus("Cross-chain swap completed! 🎉", "done")
      console.log("✅ Swap process completed.")
    } catch (error: any) {
      console.error("❌ Error in createOrder:", error)
      updateLastStatus("failed")
      addFinalStatus(error.message || "An unknown error occurred", "failed")
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-yellow-800 text-white flex flex-col">
        {/* Enhanced Header */}
        <div className="flex justify-between items-center px-4 py-4 backdrop-blur-sm bg-black/20 border-b border-yellow-400/20">
          <div className="flex items-center gap-4">
            <ShimmerButton
              onClick={onBack}
              className="text-yellow-400 hover:text-yellow-300 bg-transparent hover:bg-yellow-400/10 border border-yellow-400/30 px-4 py-2"
            >
              ← Back
            </ShimmerButton>
            <LineShadowText className="text-2xl sm:text-3xl font-bold">
              SUNNYSWAP
            </LineShadowText>
          </div>
          <div className="flex items-center gap-4">
            {evmSigner && (
              <ConnectButton
                chainStatus="icon"
                accountStatus="avatar"
                showBalance={false}
              />
            )}

            {!evmSigner && (
              <ShimmerButton
                onClick={() => setIsConnectModalOpen(true)}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md font-semibold"
              >
                Connect Wallet
              </ShimmerButton>
            )}
          </div>
        </div>

        {/* Enhanced Swap Interface */}
        <div className="flex-grow flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl border border-yellow-400/30 shadow-2xl shadow-yellow-500/10 p-6 rounded-2xl space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-bold text-center">
                <LineShadowText>Cross-Chain Bridge</LineShadowText>
              </h2>
            </div>

            {/* From Section */}
            <div className="space-y-2">
              <label className="block text-sm text-gray-300">From</label>
              <div className="flex space-x-2">
                <select
                  className="flex-1 px-3 py-3 rounded-xl bg-gray-700/50 backdrop-blur-sm text-white border border-gray-600/50 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all cursor-pointer"
                  value={fromChain.chainId}
                  onChange={(e) => {
                    const selected = chains.find(
                      (c) => c.chainId === Number(e.target.value)
                    )
                    setFromChain(selected!)
                  }}
                >
                  {chains.filter(c => c.chainId !== 50311).map((chain) => (
                    <option key={chain.chainId} value={chain.chainId}>
                      {chain.name} ({chain.symbol})
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={amount}
                  disabled
                  className="w-20 px-3 py-3 rounded-xl bg-gray-700/30 text-gray-400 border border-gray-600/30 text-sm cursor-not-allowed"
                />
              </div>
              <p className="text-xs text-yellow-200/70 mt-1">
                * Amount fixed to {amount} {fromChain.unit} for demo
              </p>
            </div>

            {/* Enhanced Swap Button */}
            <div className="flex justify-center">
              <ShimmerButton
                onClick={() => {
                  if (isSwapping) return
                  setIsSwapping(true)
                  setTimeout(() => setIsSwapping(false), 500)
                  const temp = fromChain
                  setFromChain(toChain)
                  setToChain(temp)
                }}
                className={`rounded-full p-4 bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white shadow-xl transition-all duration-500 ${
                  isSwapping ? "animate-spin" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6m0 0l-4-4m4 4l-4 4M7 16H5a2 2 0 01-2-2V8m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </ShimmerButton>
            </div>

            {/* To Section */}
            <div className="space-y-2">
              <label className="block text-sm text-gray-300">To</label>
              <div className="flex space-x-2">
                <select
                  className="flex-1 px-3 py-3 rounded-xl bg-gray-700/50 backdrop-blur-sm text-white border border-gray-600/50 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer"
                  value={toChain.chainId}
                  onChange={(e) =>
                    setToChain(
                      chains.find(
                        (c) => c.chainId === Number(e.target.value)
                      )!
                    )
                  }
                >
                  {chains.map((chain) => (
                    <option key={chain.chainId} value={chain.chainId}>
                      {chain.name} ({chain.symbol})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  disabled
                  value={amount}
                  className="w-20 px-3 py-3 rounded-xl bg-gray-700/30 text-gray-400 border border-gray-600/30 text-sm cursor-not-allowed"
                />
              </div>
              <p className="text-xs text-orange-200/70 mt-1">
                * Receive ~{amount} {toChain.unit}
              </p>
            </div>

            {/* Enhanced Swap Button */}
            <ShimmerButton
              className="w-full py-4 mt-6 bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white font-bold rounded-xl text-lg shadow-xl"
              onClick={createOrder}
            >
              Create Swap Order
            </ShimmerButton>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="px-6 py-4 text-sm text-gray-400 flex items-center justify-center backdrop-blur-sm bg-black/20 border-t border-yellow-400/20">
          <a
            href="https://github.com/sunnyswap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-300 transition cursor-pointer"
          >
            <FaGithub className="w-5 h-5" />
            <span>SunnySwap</span>
          </a>
        </footer>
      </div>

      {/* MODALS */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onConnectEVM={evmConnectWallet}
        isEvmConnected={!!evmSigner}
      />
      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        statuses={statuses}
        title="Cross-Chain Swap in Progress..."
        fromChainName={fromChain.name}
        toChainName={toChain.name}
        fromAmount={amount.toString()}
        toAmount={amount.toString()}
        fromSymbol={fromChain.unit}
        toSymbol={toChain.unit}
      />
    </>
  )
}

// Chain configurations
const chains = [
  {
    chainId: 1,
    type: "evm",
    name: "Ethereum",
    symbol: "ETH",
    unit: "ETH",
    explorer: "https://etherscan.io",
  },
  {
    chainId: 137,
    type: "evm", 
    name: "Polygon",
    symbol: "MATIC",
    unit: "MATIC",
    explorer: "https://polygonscan.com",
  },
  {
    chainId: 11155111,
    type: "evm",
    name: "Sepolia",
    symbol: "SEP",
    unit: "ETH",
    explorer: "https://sepolia.etherscan.io",
  },
  {
    chainId: 50311,
    type: "evm",
    name: "Somnia Testnet",
    symbol: "STT",
    unit: "STT",
    explorer: "https://testnet.somnium-explorer.com",
  },
]