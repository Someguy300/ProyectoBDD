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
TIPO_DULCES=(('DU','Dulce'),('SA','Salado'),('BE','Bebida'),('CO','Combo'))
HORARIOS= (('10','10:00 am'),('12','12:00 pm'),('2','2:00 pm'),('4','4:00 pm'),('6','6:00 pm'),('8','8:00 pm'))

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
    nombre = models.CharField(max_length=40, null=False)
    apellido = models.CharField(max_length=40, null=False)
    cedula = models.PositiveIntegerField(blank=True, null=True, default ='1')
    correo = models.CharField(max_length=50, null=False)
    def __str__(self):
        return str (str(self.cliente_id)+" "+self.nombre+" CI:"+str(self.cedula))
    
class Entrada(models.Model):
    num_entrada = models.AutoField(primary_key=True)
    #La pelicula y la sala no se pueden sacar de la funcion?
    #pelicula = models.CharField(max_length=50,null=True)
    #pelicula_id = models.ForeignKey(
    #   'Pelicula', on_delete= models.SET_NULL, null=True, default=1)
    #sala = models.PositiveIntegerField(null=True, default =0)
    funcion_id = models.ForeignKey(
        'Funcion', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    precio = models.PositiveIntegerField(null=True, default =0)
    #no me cuadra lo de entradas compradas 
    #ent_compradas = models.PositiveIntegerField(null=True, default =0)
    #lo mismo con fecha y horario   
    #horario = models.TimeField( null=False)
    #met_pago = models.CharField(max_length=2, default= ('EF','Efectivo'), choices=METODOS_PAGO,null=False)
    def __str__(self):
        return str (str(self.num_entrada))

class Factura(models.Model):
    #Averiguar como meter los productos aqui9
    num_factura = models.AutoField(primary_key=True)
    sede_id = models.ForeignKey(
        'Sede', on_delete= models.SET_NULL, null=True, default=1)
    cliente_id = models.ForeignKey(
        'Cliente', on_delete= models.SET_NULL, null=True, default=1)
    #producto_id = models.ManyToManyField('Producto')
    fecha = models.DateTimeField(null=False)
    #hora = models.TimeField( default=timezone.now ,null=False)
    met_pago = models.CharField(max_length=2, default= "Efectivo" , choices=METODOS_PAGO,null=False)
    def __str__(self):
        return str (self.num_factura)

class Factura_entrada(models.Model):
    num_relacion = models.AutoField(primary_key=True)
    num_factura = models.ForeignKey('Factura', on_delete= models.SET_NULL, null=True, default=1)
    num_entrada = models.ForeignKey('Entrada', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.num_relacion)) 


class Producto(models.Model):
    product_id =  models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50,null=False, default="Producto")
    precio = models.DecimalField(decimal_places=2, max_digits=10, validators=[MinValueValidator(Decimal('0.01'))])
    tipo = models.CharField(max_length=2, default= ('DU','Dulce'), choices=TIPO_DULCES,null= False)
    
    def __str__(self):
        return str (str(self.product_id)+" "+self.nombre)

class Factura_producto(models.Model):
    num_relacion = models.AutoField(primary_key=True)
    num_factura = models.ForeignKey('Factura', on_delete= models.SET_NULL, null=True, default=1)
    product_id = models.ForeignKey('Producto', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.num_relacion)) 

    
class Funcion(models.Model):
    id_funcion =  models.AutoField(primary_key=True)
    fecha_funcion = models.DateField(null=False)
    horario = models.CharField(max_length=4, default= ('10','10:00 am'), choices=HORARIOS,null=False)
    pelicula_id = models.ForeignKey(
        'Pelicula', on_delete= models.SET_NULL, null=True, default=1)
    sala_id = models.ForeignKey(
        'Sala', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.id_funcion))


class Sala(models.Model):
    sala_id = models.AutoField(primary_key=True)
    num_butacas =  models.PositiveIntegerField(null=False)
    disponibilidad = models.IntegerField(blank=True, default= 0,null=True, validators=[MinValueValidator(Decimal('0'))])
    sede_id = models.ForeignKey(
        'Sede', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.sala_id))

class Sede(models.Model):
    sede_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20, null=False)    
    ubicacion = models.CharField(max_length=20, null=False)
    nro_salas=models.PositiveIntegerField(null=True, default =0)
    def __str__(self):
        return str(self.nombre+" "+self.ubicacion)
    #No se si aqui deberia haber una lista de las salas 

class Sede_producto(models.Model):
    num_relacion = models.AutoField(primary_key=True)
    sede_id = models.ForeignKey('Sede', on_delete= models.SET_NULL, null=True, default=1)
    product_id = models.ForeignKey('Producto', on_delete= models.SET_NULL, null=True, default=1)
    def __str__(self):
        return str (str(self.num_relacion))    
