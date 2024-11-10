using MediatR;
using Microsoft.AspNetCore.Mvc;
using VAArtGalleryWebAPI.Application.Commands;
using VAArtGalleryWebAPI.Application.Queries;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.WebApi.Controllers
{
    [Route("api/art-works")]
    [ApiController]
    public class ArtWorkController(IMediator mediator) : ControllerBase
    {
        [HttpGet]
        [Route("{galleryId}")]
        public async Task<ActionResult<List<GetArtGalleryArtWorksResult>>> GetAll(Guid galleryId)
        {
            var artworks = await mediator.Send(new GetArtGalleryArtWorksQuery(galleryId));
            var result = artworks.Select(g => new GetArtGalleryArtWorksResult(g.Id, g.Name, g.Author, g.CreationYear, g.AskPrice)).ToList();
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> Remove([FromBody] DeleteArtWorkRequest request)
        {
            var removed = await mediator.Send(new DeleteArtCommand(request.Id));
            return removed ? StatusCode(StatusCodes.Status204NoContent) : StatusCode(StatusCodes.Status404NotFound);
        }
    }
}