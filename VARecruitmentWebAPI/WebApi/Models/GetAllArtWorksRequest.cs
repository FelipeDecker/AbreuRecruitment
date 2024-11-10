namespace VAArtGalleryWebAPI.WebApi.Models
{
    public class GetAllArtWorksRequest(Guid id)
    {
        public Guid Id { get; set; } = id;
    }
}
