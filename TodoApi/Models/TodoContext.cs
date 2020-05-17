using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    /*
    * El contexto de base de datos es la clase principal que coordina la funcionalidad de Entity Framework para un modelo de datos. 
    * Esta clase se crea derivándola de la clase Microsoft.EntityFrameworkCore.DbContext.
    */
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}