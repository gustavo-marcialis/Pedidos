using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaAPI.Models;


namespace PizzaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        [HttpGet]
        [Route("pedidos")]
        public async Task<IActionResult> getAllAsync(
        [FromServices] pizzariaContext contexto)
        {
            var pedidos = await contexto
                .Pedidos
                .AsNoTracking()
                .ToListAsync();

            return pedidos == null ? NotFound() : Ok(pedidos);
        }

        [HttpGet]
        [Route("pedidos/{id}")]
        public async Task<IActionResult> getByIdAsync(
        [FromServices] pizzariaContext contexto,
        [FromRoute] int id
            )
        {
            var pedidos = await contexto
                .Pedidos
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.id == id);

            return pedidos == null ? NotFound() : Ok(pedidos);
        }

        [HttpPost]
        [Route("pedidos")]
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

        [HttpPut]
        [Route("pedidos/{id}")]
        public async Task<IActionResult> PutAsync(
        [FromServices] pizzariaContext contexto,
        [FromBody] Pedidos pedido,
        [FromRoute] int id
            )
        {
            if (!ModelState.IsValid) return BadRequest();
            var p = await contexto.Pedidos
                .FirstOrDefaultAsync(x => x.id == id);
            if (p == null)
                return NotFound("Pedido não encontrado!");

            try
            {
                p.Mesa = pedido.Mesa;
                p.Sabores = pedido.Sabores;
                p.Obs = pedido.Obs;

                contexto.Pedidos.Update(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [HttpDelete]
        [Route("pedidos/{id}")]
        public async Task<IActionResult> DeleteAsync(
        [FromServices] pizzariaContext contexto,
        [FromRoute] int id
            )
        {
            var p = await contexto.Pedidos
                .FirstOrDefaultAsync(x => x.id == id);

            if (p == null)
                return NotFound("Pedido não encontrado!");

            try
            {

                contexto.Pedidos.Remove(p);
                await contexto.SaveChangesAsync();
                return Ok(p);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
