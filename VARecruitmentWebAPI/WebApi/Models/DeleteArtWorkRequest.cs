namespace VAArtGalleryWebAPI.WebApi.Models
{
    public class DeleteArtWorkRequest(Guid id)
    {
        public Guid Id { get; set; } = id;
    }
}
