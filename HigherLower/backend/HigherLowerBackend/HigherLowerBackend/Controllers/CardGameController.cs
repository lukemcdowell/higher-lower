using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HigherLowerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardGameController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Card> Get()
        {
            Deck deck = new Deck();
            IEnumerable<Card> cards = deck.cards;
            return cards;
        }
    }
}
