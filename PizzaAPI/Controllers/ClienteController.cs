using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaAPI.Models;

namespace PizzaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        [Route("pedidosCliente/{Mesa}")]
        public async Task<IActionResult> getByIdAsync(
        [FromServices] pizzariaContext contexto,
        [FromRoute] string Mesa
            )
        {
            var pedidos = await contexto
                .Pedidos
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Mesa == Mesa);

            return pedidos == null ? NotFound() : Ok(pedidos);
        }

        [HttpPost]
        [Route("pedidosCliente")]
        public async Task<IActionResult> PostAsync(
        [FromServices] pizzariaContext contexto,
        [FromBody] Pedidos pedido
            )
        {

            try
            {
                await contexto.Pedidos.AddAsync(pedido);
                await contexto.SaveChangesAsync();
                return Created($"api/pedidos/{pedido.id}", pedido);

            }
            catch (Exception ex) { return BadRequest(ex.Message); }

        }
    }
}
