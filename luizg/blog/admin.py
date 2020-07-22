from django.contrib import admin
from blog.models import Post

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['title', 'author', 'published', 'updatedAt', 'likes']
  list_filter = ['title', 'author', 'createdAt', 'updatedAt', 'likes']
  raw_id_fields = ['author']
  date_hierarchy = 'createdAt'
  search_fields = ['title', 'content']
  prepopulated_fields = {'slug': ['title']}