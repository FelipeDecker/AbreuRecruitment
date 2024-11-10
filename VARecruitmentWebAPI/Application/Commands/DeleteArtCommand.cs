using MediatR;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public class DeleteArtCommand(Guid artWorkId) : IRequest<bool>
    {
        public Guid ArtWorkId { get; set; } = artWorkId;
    }
}
