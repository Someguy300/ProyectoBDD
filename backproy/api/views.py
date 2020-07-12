from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# Create your views here.



########PELICULAS#########

@api_view(['GET', 'POST'])
def peliculas_list(request):
    if request.method == 'GET':
        data = Pelicula.objects.all()

        serializer = PeliculaSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PeliculaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def peliculas_detail(request, pelicula_id):
    try:
        pelicula = Pelicula.objects.get(pelicula_id=pelicula_id)
    except Pelicula.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PeliculaSerializer(pelicula, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pelicula.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#######CLIENTES#######

@api_view(['GET', 'POST'])
def clientes_list(request):
    if request.method == 'GET':
        data = Cliente.objects.all()

        serializer = ClienteSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def clientes_detail(request, cliente_id):
    try:
        cliente = Cliente.objects.get(cliente_id=cliente_id)
    except Cliente.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ClienteSerializer(cliente, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cliente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


########ENTRADAS#########

@api_view(['GET', 'POST'])
def entradas_list(request):
    if request.method == 'GET':
        data = Entrada.objects.all()

        serializer = EntradaSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EntradaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def entradas_detail(request, num_entrada):
    try:
        entrada = Entrada.objects.get(num_entrada=num_entrada)
    except Entrada.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EntradaSerializer(entrada, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        entrada.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

 
#######FACTURAS########

@api_view(['GET', 'POST'])
def facturas_list(request):
    if request.method == 'GET':
        data = Factura.objects.all()

        serializer = FacturaSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FacturaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def facturas_detail(request, num_factura):
    try:
        factura = Factura.objects.get(num_factura=num_factura)
    except Factura.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = FacturaSerializer(factura, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        factura.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


        

#view relacion
class Factura_entradaView(viewsets.ModelViewSet):
    queryset = Factura_entrada.objects.all()
    serializer_class = Factura_entradaSerializer



#######PRODUCTOS########

@api_view(['GET', 'POST'])
def productos_list(request):
    if request.method == 'GET':
        data = Producto.objects.all()

        serializer = ProductoSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def productos_detail(request, product_id):
    try:
        producto = Producto.objects.get(product_id=product_id)
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProductoSerializer(producto, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#view relacion
class Factura_productoView(viewsets.ModelViewSet):
    queryset = Factura_producto.objects.all()
    serializer_class = Factura_productoSerializer


########FUNCION########

@api_view(['GET', 'POST'])
def funciones_list(request):
    if request.method == 'GET':
        data = Funcion.objects.all()

        serializer = FuncionSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FuncionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def funciones_detail(request, id_funcion):
    try:
        funcion = Funcion.objects.get(id_funcion=id_funcion)
    except Funcion.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = FuncionSerializer(funcion, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        funcion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


############SALA###################

@api_view(['GET', 'POST'])
def salas_list(request):
    if request.method == 'GET':
        data = Sala.objects.all()

        serializer = SalaSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SalaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def salas_detail(request, sala_id):
    try:
        sala = Sala.objects.get(sala_id=sala_id)
    except Funcion.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SalaSerializer(sala, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        sala.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

###########SEDE#################

@api_view(['GET', 'POST'])
def sedes_list(request):
    if request.method == 'GET':
        data = Sede.objects.all()

        serializer = SedeSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SedeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def sedes_detail(request, sede_id):
    try:
        sede = Sede.objects.get(sede_id=sede_id)
    except Funcion.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SedeSerializer(sede, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        sede.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#view relacion
class Sede_productoView(viewsets.ModelViewSet):
    queryset = Sede_producto.objects.all()
    serializer_class = Sede_productoSerializer
