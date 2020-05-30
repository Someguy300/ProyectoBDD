from django.db import models
from datetime import date 
from django.utils import timezone

# Create your models here.

class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    sinopsis = models.TextField(max_length=100)
    fecha_estreno = models.CharField(max_length=11)
    genero = models.CharField(max_length=50)
    duracion = models.PositiveIntegerField()
    lenguaje = models.CharField(max_length=100)

