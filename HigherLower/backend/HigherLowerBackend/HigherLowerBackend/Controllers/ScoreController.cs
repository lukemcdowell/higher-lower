using HigherLowerBackend.Data;
using HigherLowerBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HigherLowerBackend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {

        private readonly DataContext _context;
        public ScoreController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<List<Score>>> Get(int userId)
        {
            var scores = await _context.Scores.Where(x => x.UserId == userId).ToListAsync();
            if (scores == null)
                return BadRequest("Scores not found");
            return Ok(scores);
        }

        [HttpPost]
        public async Task<ActionResult<List<Score>>> AddScore(Score score)
        {
            _context.Scores.Add(score);
            await _context.SaveChangesAsync();
            return Ok(await _context.Scores.ToListAsync());
        }


    }
}
