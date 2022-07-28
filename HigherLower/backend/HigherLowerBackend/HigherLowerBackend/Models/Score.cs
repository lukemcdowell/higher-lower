namespace HigherLowerBackend.Models
{
    public class Score
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public DateTime Time { get; set; }
        public int ScoreCount { get; set; }

    }
}
