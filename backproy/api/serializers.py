from rest_framework import serializers,fields
from .models import *

class PeliculaSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Pelicula 
        fields = ('__all__') 

class ClienteSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Cliente 
        fields = ('__all__') 

class EntradaSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Entrada 
        fields = ('__all__') 

class FacturaSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Factura 
        fields = ('__all__') 
    
class Factura_entradaSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Factura_entrada
        fields = ('__all__') 

class ProductoSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Producto 
        fields = ('__all__') 

class Factura_productoSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Factura_producto
        fields = ('__all__') 

class FuncionSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Funcion 
        fields = ('__all__') 

class SalaSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Sala 
        fields = ('__all__') 

 
class SedeSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Sede 
        fields = ('__all__')
        
class Sede_productoSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Sede_producto
        fields = ('__all__') 

