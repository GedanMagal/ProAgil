using Microsoft.EntityFrameworkCore;
using ProAgil.Api.Controllers;

namespace ProAgil.Api.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }


        public DbSet<Evento> Eventos { get; set; }

    }
}