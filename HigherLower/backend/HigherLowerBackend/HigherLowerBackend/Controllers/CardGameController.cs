using Microsoft.AspNetCore.Mvc;

namespace HigherLowerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardGameController : ControllerBase
    {

        [HttpGet]
        public JsonResult Get()
        {
            Deck deck = new Deck();

            return new JsonResult(deck.cards);
        }
    }
}
