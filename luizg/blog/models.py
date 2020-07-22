from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

"""
  Retorna somente os itens que estão como publicado
"""
class PublishedMgr(models.Manager):
  def get_queryset(self):
    return super(PublishedMgr, self).get_queryset().filter(published=True)

"""
  Post simples
"""
class Post(models.Model):
  title = models.CharField(max_length=255, unique=True)
  slug = models.SlugField(max_length=255, unique=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  published = models.BooleanField(default=False)
  
  objects = models.Manager()
  status = PublishedMgr()

  content = models.TextField()
  
  tags = models.TextField(default="")
  likes = models.PositiveIntegerField(default=0)

  createdAt = models.DateTimeField(auto_now_add=True)
  updatedAt = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['-createdAt']

  def __str__(self):
    return self.title
