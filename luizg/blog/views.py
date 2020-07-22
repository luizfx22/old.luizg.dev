from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post

# Create your views here.

class Blog(ListView):
  model = Post
  template_name = 'blog/blog.html'
  context_object_name = 'posts'

class BlogPost(DetailView):
  model = Post
  template_name = 'blog/post.html'
  context_object_name = 'post'
