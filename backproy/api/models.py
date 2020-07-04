from django.db import models
from datetime import date 
from django.utils import timezone
from decimal import Decimal
from django.core.validators import MinValueValidator
from multiselectfield import MultiSelectField

# Create your models here.
LENGUAJES=(('ES','Español'),('EN','Ingles'))
GENEROS=(('AC','Accion'),('AV','Aventura'),('AN','Animacion')
    ,('CO','Comedia'),('DR','Drama'),('DO','Documental'),('HO','Horror')
    ,('SU','Suspenso'),('AN','Animacion'))
ESTADOS=(('PE','Por Estrenar'),('EC','En Cartelera'),('AR','Archivada'))
METODOS_PAGO=(('EF','Efectivo'),('DE','Debito'),('CR','Credito'))
TIPO_DULCES=(('DU','Dulce'),('SA','Salado'))
class Pelicula(models.Model):
    pelicula_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50,null=True)
    sinopsis = models.TextField(max_length=100)
    fecha_estreno = models.DateField()
    estatus = models.CharField(max_length=2,choices=ESTADOS,null=True)
    genero = MultiSelectField(choices=GENEROS,null=True)
    duracion = models.PositiveIntegerField()
    lenguaje = MultiSelectField(choices=LENGUAJES,null=True)
    def __str__(self):
        return str (str(self.pelicula_id)+" "+self.nombre)

class Cliente(models.Model):
    cliente_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    cedula = models.PositiveIntegerField(blank=True, null=False, default ='1')
    apellido = models.TextField(max_length=50)
    correo = models.CharField(max_length=50)
    def __str__(self):
        return str (str(self.cliente_id)+" "+self.nombre+" CI:"+str(self.cedula))
    
class Entrada(models.Model):
    num_entrada = models.AutoField(primary_key=True)
    #La pelicula y la sala no se pueden sacar de la funcion?
    pelicula = models.CharField(max_length=50,null=True)
    sala = models.PositiveIntegerField(null=True, default =0)
    funcion_id = models.ForeignKey(
        'Funcion', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    precio = models.PositiveIntegerField(null=True, default =0)
    ent_compradas = models.PositiveIntegerField(null=True, default =0)
    #lo mismo con fecha y horario
    fecha = models.DateField()
    horario = models.TimeField()
    met_pago = models.CharField(max_length=2,choices=METODOS_PAGO,null=True)
    def __str__(self):
        return str (str(self.num_entrada)+" "+self.pelicula)

class Factura(models.Model):
    #Averiguar como meter los productos aqui
    num_factura = models.AutoField(primary_key=True)
    sede_id = models.ForeignKey(
        'Sede', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    producto_id = models.ManyToManyField('Producto')
    fecha = models.DateTimeField()
    met_pago = models.CharField(max_length=2,choices=METODOS_PAGO,null=True)
    def __str__(self):
        return str (self.num_factura)


class Producto(models.Model):
    product_id =  models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50,null=True)
    precio = models.DecimalField(decimal_places=2, max_digits=10, validators=[MinValueValidator(Decimal('0.01'))])
    tipo = models.CharField(max_length=2,choices=TIPO_DULCES,null=True)
    def __str__(self):
        return str (str(self.product_id)+" "+self.nombre)

class Funcion(models.Model):
    id_funcion =  models.AutoField(primary_key=True)
    fecha = models.DateField()
    horario = models.TimeField()
    pelicula_id = models.ForeignKey(
        'Pelicula', on_delete= models.SET_NULL, null=True, default=1)
    sala_id = models.ForeignKey(
        'Sala', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.id_funcion)+" Peli_id:"+str(self.pelicula_id)+" Sala_id:"+str(self.sala_id))


class Sala(models.Model):
    sala_id = models.AutoField(primary_key=True)
    num_butacas =  models.PositiveIntegerField()
    disponibilidad = models.PositiveIntegerField(blank=True, null=True, default ='0')
    sede_id = models.ForeignKey(
        'Sede', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.sala_id)+" Sede_id:"+self.sede.id)

class Sede(models.Model):
    sede_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)    
    ubicacion = models.CharField(max_length=100)
    nro_salas=models.PositiveIntegerField(null=True, default =0)
    def __str__(self):
        return str(str(self.sede_id)+" "+self.nombre)
    #No se si aqui deberia haber una lista de las salas 
    
  
