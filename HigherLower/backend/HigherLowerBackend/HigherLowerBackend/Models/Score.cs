namespace HigherLowerBackend.Models
{
    public class Score
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime Time { get; set; }
        public int ScoreCount { get; set; }

    }
}
