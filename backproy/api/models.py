from django.db import models
from datetime import date 
from django.utils import timezone
from decimal import Decimal
from django.core.validators import MinValueValidator

# Create your models here.

class Pelicula(models.Model):
    pelicula_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    sinopsis = models.TextField(max_length=100)
    fecha_estreno = models.CharField(max_length=11)
    genero = models.CharField(max_length=50)
    duracion = models.PositiveIntegerField()
    lenguaje = models.CharField(max_length=100)

class Cliente(models.Model):
    cliente_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.TextField(max_length=50)
    correo = models.CharField(max_length=50)
    
class Entrada(models.Model):
    num_entrada = models.AutoField(primary_key=True)
    pelicula_id = models.ForeignKey(
        'Pelicula', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    precio = models.PositiveIntegerField(null=True, default =0)
    fecha = models.PositiveIntegerField()
    def __str__(self):
        return str (self.num_entrada)

class Producto(models.Model):
    product_id =  models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    precio = models.DecimalField(decimal_places=2, max_digits=10, validators=[MinValueValidator(Decimal('0.01'))])
    disponibilidad = models.PositiveIntegerField(blank=True, null=True, default ='0')

class Combo(models.Model):
    combo_id =  models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    precio = models.DecimalField(decimal_places=2, max_digits=10, validators=[MinValueValidator(Decimal('0.01'))])
    disponibilidad = models.PositiveIntegerField(blank=True, null=True, default ='0')

class Historial(models.Model):
    historial_id = models.AutoField(primary_key=True)
    sede_id = models.ForeignKey(
        'Sede', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    entrada_id = models.ForeignKey(
        'Entrada', on_delete= models.SET_NULL, null=True, default=1)
    producto_id = models.ForeignKey(
        'Producto', on_delete= models.SET_NULL, null=True, default=1)
    combo_id = models.ForeignKey(
        'Combo', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (self.cliente_id)

class Sala(models.Model):
    sala_id = models.AutoField(primary_key=True)
    num_butacas =  models.PositiveIntegerField()
    disponibilidad = models.PositiveIntegerField(blank=True, null=True, default ='0')
    def __str__(self):
        return str (self.sala_id)

class Sede(models.Model):
    sede_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)    
    ubicacion = models.CharField(max_length=100)
    sala_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    entrada_id = models.ForeignKey(
        'Entrada', on_delete= models.SET_NULL, null=True, default=1)
    producto_id = models.ForeignKey(
        'Producto', on_delete= models.SET_NULL, null=True, default=1)
    combo_id = models.ForeignKey(
        'Combo', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (self.sede_id)
  
