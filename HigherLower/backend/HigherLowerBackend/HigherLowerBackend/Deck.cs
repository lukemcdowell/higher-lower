namespace HigherLowerBackend
{
    public class Deck
    {
        private const int INITIAL_DECK_SIZE = 52;
        public List<Card> cards;
        public Deck()
        {
            string[] suits = { "clubs", "hearts", "spades", "diamonds" };
            string[] ranks = { "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king" };

            cards = new List<Card>(INITIAL_DECK_SIZE);

            for (int i = 0; i < suits.Count(); i++)
            {
                for (int j = 0; j < ranks.Count(); j++)
                {
                    cards.Add(new Card(suits[i], ranks[j]));
                }
            }

            Shuffle();
        }


        public int Size()
        {
            return cards.Count();
        }

        //fisher-yates algorithm from https://www.dotnetperls.com/fisher-yates-shuffle
        private void Shuffle()
        {
            Random random = new Random();
            var length = Size();

            for (int i = 0; i < length - 1; i++)
            {
                int r = i + random.Next(length - i);
                Card c = cards[r];
                cards[r] = cards[i];
                cards[i] = c;
            }
        }

        public Card GetCard()
        {
            var card = cards.Last();
            cards.RemoveAt(cards.Count - 1);
            return card;
        }

        public void PrintCards()
        {
            foreach (var card in cards)
            {
                Console.WriteLine($"{card.suit} {card.rank}");
            }
        }
    }
}
