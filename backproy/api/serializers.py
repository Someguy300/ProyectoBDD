from rest_framework import serializers,fields
from .models import *

class PeliculaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Pelicula 
        fields = ('__all__') 
    genero = fields.MultipleChoiceField(choices=GENEROS,style={'base_template':'checkbox_multiple.html'})
    lenguaje = fields.MultipleChoiceField(choices=LENGUAJES,style={'base_template':'checkbox_multiple.html'})

class ClienteSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta: 
        model = Cliente 
        fields = ('__all__') 

class EntradaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Entrada 
        fields = ('__all__') 

class FacturaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Factura 
        fields = ('__all__') 

class ProductoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Producto 
        fields = ('__all__') 

class FuncionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Funcion 
        fields = ('__all__') 


class SalaSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Sala 
        fields = ('__all__') 

class SedeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Sede 
        fields = ('__all__')
