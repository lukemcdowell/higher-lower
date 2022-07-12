namespace HigherLowerBackend
{
    public class Card
    {
        public string suit { get; set; }
        public string rank { get; set; }

        public Card(string cardSuit, string cardRank)
        {
            suit = cardSuit;
            rank = cardRank;
        }
    }
}
