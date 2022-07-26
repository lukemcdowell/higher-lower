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

        [HttpGet]
        public async Task<ActionResult<List<Score>>> Get()
        {
            return Ok(await _context.Scores.ToListAsync());
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
