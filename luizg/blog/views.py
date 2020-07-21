from django.shortcuts import render
from django.views.generic import ListView
from .models import Post

# Create your views here.

class Blog(ListView):
  model = Post
  template_name = 'blog/blog.html'