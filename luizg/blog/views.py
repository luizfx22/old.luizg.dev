from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView
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


class NewBlogPost(CreateView):
  model = Post
  template_name = 'blog/editor/article.html'
  fields = ['title', 'content', 'published']
