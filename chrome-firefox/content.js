// Function to hide Reels elements
function hideReels() {
  // Target Reels elements with different selectors to ensure coverage
  const selectors = [
    // Main Reels section selector (in feed)
    'div[role="main"] div[data-pagelet="FeedUnit"] div:has(a[href*="/reel/"])',
    // Reels tab in navigation
    'div[role="navigation"] a[href*="/reels/"]',
    // Reels section title
    // Reels in Stories section
    'div[aria-label*="Reels"]',
    // Reels in Watch section
    'div[data-pagelet="MainFeed"] div:has(a[href*="/reel/"])',
    // Secondary Reels references
  ]

  // Apply hiding to all matching elements
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      element.style.display = 'none'
    })
  })
}

// Run when page loads
hideReels()

// Run every 3 seconds as a backup to catch any missed elements
// setInterval(hideReels, 3000)

const observer = new MutationObserver((mutations) => {
  setTimeout(() => {
    hideReels()
  }, 100)
})

if (document.body) {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  })
} else {
  // If document.body isn't available yet, wait for it to load
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })
  })
}
