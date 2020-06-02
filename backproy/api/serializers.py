from rest_framework import serializers 
from .models import *

class PeliculaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Pelicula 
        fields = ('__all__') 

class ClienteSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Cliente 
        fields = ('__all__') 

class EntradaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Entrada 
        fields = ('__all__') 

class ProductoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Producto 
        fields = ('__all__') 

class ComboSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Combo 
        fields = ('__all__') 

class HistorialSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Historial 
        fields = ('__all__') 

class SalaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Combo 
        fields = ('__all__') 

class SedeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Historial 
        fields = ('__all__')
