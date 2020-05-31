from rest_framework import serializers 
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

class ProductoSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Producto 
        fields = ('__all__') 

class ComboSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Combo 
        fields = ('__all__') 

class HistorialSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Historial 
        fields = ('__all__') 

class SalaSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Combo 
        fields = ('__all__') 

class SedeSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Historial 
        fields = ('__all__')
