using MediatR;
using VAArtGalleryWebAPI.Domain.Interfaces;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public class DeleteArtCommandHandler(IArtWorkRepository artWorkRepository) : IRequestHandler<DeleteArtCommand, bool>
    {
        public async Task<bool> Handle(DeleteArtCommand request, CancellationToken cancellationToken)
        {
            return await artWorkRepository.DeleteAsync(request.ArtWorkId, cancellationToken);
        }
    }
}
