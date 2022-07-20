using HigherLowerBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HigherLowerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = new List<User>
            {
                new User
                {
                    Id=1,Username="lukemcdo",Password="password",Email="luke@gmail.com"
                }
            };

            return Ok(users);
        }
    }
}
