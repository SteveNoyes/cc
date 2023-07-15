// Deck of cards
  // keep track of deck
  // show dealer's up card

  // hold the deck as an object
  // randomly select a number between 1 and 52

// 52 cards (13*4)
// 4 suits in order
// spades, hearts, diamonds, clubs (lowest)

// 2 colors
// red (hearts, diamonds) / black (spades, clubs)

// 13 ranks

// 2
// 3
// 4
// 5
// 6

// 7
// 8
// 9

// 10
// J
// Q
// K
// A

// Values

// +1

// 2
// 3
// 4
// 5
// 6


// 0

// 7
// 8
// 9


// -1

// 10
// J
// Q
// K
// A

let count = 0;

const deck = {
  // Spades
  1: [
    {
      suit: "spades",
      color: "black",
      rank: 2
    }
  ],
  2: [
    {
      suit: "spades",
      color: "black",
      rank: 3
    }
  ],
  3: [
    {
      suit: "spades",
      color: "black",
      rank: 4
    }
  ],
  4: [
    {
      suit: "spades",
      color: "black",
      rank: 5
    }
  ],
  5: [
    {
      suit: "spades",
      color: "black",
      rank: 6
    }
  ],
  6: [
    {
      suit: "spades",
      color: "black",
      rank: 7
    }
  ],
  7: [
    {
      suit: "spades",
      color: "black",
      rank: 8
    }
  ],
  8: [
    {
      suit: "spades",
      color: "black",
      rank: 9
    }
  ],
  9: [
    {
      suit: "spades",
      color: "black",
      rank: 10
    }
  ],
  10: [
    {
      suit: "spades",
      color: "black",
      rank: "J"
    }
  ],
  11: [
    {
      suit: "spades",
      color: "black",
      rank: "Q"
    }
  ],
  12: [
    {
      suit: "spades",
      color: "black",
      rank: "K"
    }
  ],
  13: [
    {
      suit: "spades",
      color: "black",
      rank: "A"
    }
  ],
  // Hearts
  14: [
    {
      suit: "hearts",
      color: "red",
      rank: 2
    }
  ],
  15: [
    {
      suit: "hearts",
      color: "red",
      rank: 3
    }
  ],
  16: [
    {
      suit: "hearts",
      color: "red",
      rank: 4
    }
  ],
  17: [
    {
      suit: "hearts",
      color: "red",
      rank: 5
    }
  ],
  18: [
    {
      suit: "hearts",
      color: "red",
      rank: 6
    }
  ],
  19: [
    {
      suit: "hearts",
      color: "red",
      rank: 7
    }
  ],
  20: [
    {
      suit: "hearts",
      color: "red",
      rank: 8
    }
  ],
  21: [
    {
      suit: "hearts",
      color: "red",
      rank: 9
    }
  ],
  22: [
    {
      suit: "hearts",
      color: "red",
      rank: 10
    }
  ],
  23: [
    {
      suit: "hearts",
      color: "red",
      rank: "J"
    }
  ],
  24: [
    {
      suit: "hearts",
      color: "red",
      rank: "Q"
    }
  ],
  25: [
    {
      suit: "hearts",
      color: "red",
      rank: "K"
    }
  ],
  26: [
    {
      suit: "hearts",
      color: "red",
      rank: "A"
    }
  ],
  // Diamonds
  27: [
    {
      suit: "diamonds",
      color: "red",
      rank: 2
    }
  ],
  28: [
    {
      suit: "diamonds",
      color: "red",
      rank: 3
    }
  ],
  29: [
    {
      suit: "diamonds",
      color: "red",
      rank: 4
    }
  ],
  30: [
    {
      suit: "diamonds",
      color: "red",
      rank: 5
    }
  ],
  31: [
    {
      suit: "diamonds",
      color: "red",
      rank: 6
    }
  ],
  32: [
    {
      suit: "diamonds",
      color: "red",
      rank: 7
    }
  ],
  33: [
    {
      suit: "diamonds",
      color: "red",
      rank: 8
    }
  ],
  34: [
    {
      suit: "diamonds",
      color: "red",
      rank: 9
    }
  ],
  35: [
    {
      suit: "diamonds",
      color: "red",
      rank: 10
    }
  ],
  36: [
    {
      suit: "diamonds",
      color: "red",
      rank: "J"
    }
  ],
  37: [
    {
      suit: "diamonds",
      color: "red",
      rank: "Q"
    }
  ],
  38: [
    {
      suit: "diamonds",
      color: "red",
      rank: "K"
    }
  ],
  39: [
    {
      suit: "diamonds",
      color: "red",
      rank: "A"
    }
  ],
  // Clubs
  40: [
    {
      suit: "clubs",
      color: "black",
      rank: 2
    }
  ],
  41: [
    {
      suit: "clubs",
      color: "black",
      rank: 3
    }
  ],
  42: [
    {
      suit: "clubs",
      color: "black",
      rank: 4
    }
  ],
  43: [
    {
      suit: "clubs",
      color: "black",
      rank: 5
    }
  ],
  44: [
    {
      suit: "clubs",
      color: "black",
      rank: 6
    }
  ],
  45: [
    {
      suit: "clubs",
      color: "black",
      rank: 7
    }
  ],
  46: [
    {
      suit: "clubs",
      color: "black",
      rank: 8
    }
  ],
  47: [
    {
      suit: "clubs",
      color: "black",
      rank: 9
    }
  ],
  48: [
    {
      suit: "clubs",
      color: "black",
      rank: 10
    }
  ],
  49: [
    {
      suit: "clubs",
      color: "black",
      rank: "J"
    }
  ],
  50: [
    {
      suit: "clubs",
      color: "black",
      rank: "Q"
    }
  ],
  51: [
    {
      suit: "clubs",
      color: "black",
      rank: "K"
    }
  ],
  52: [
    {
      suit: "clubs",
      color: "black",
      rank: "A"
    }
  ]
};

// Game Structure

// Randomly select a card function

// Generate random number between 1 and 52
// if number has already been generated, generate a new number
// else, add the corresponding number's suit/color/rank value to where the 'card' will be placed

// player gets one card
// dealer gets one card

// player gets one card
// dealer gets one card

// Dealer
  // if up card is a face check down card for a natural 21

  // Stand on soft 17
  // if total is >= 17 stand. 
  // if total is <= 16 hit. 


// Player
  // Dealt two cards, alternately with dealer. 


// Count
