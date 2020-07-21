from django.shortcuts import render
from django.views.generic import ListView
from blog.models import Post

# Create your views here.
class Index(ListView):
  model = Post
  template_name = 'index/index.html'
