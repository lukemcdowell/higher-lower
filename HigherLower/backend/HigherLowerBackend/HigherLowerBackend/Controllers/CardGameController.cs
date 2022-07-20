using Microsoft.AspNetCore.Mvc;

namespace HigherLowerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardGameController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Card>>> Get()
        {
            Deck deck = new Deck();

            return Ok(deck.cards);
        }
    }
}
