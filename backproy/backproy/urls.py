"""backproy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include, re_path
from rest_framework import routers 
from api import views



#router = routers.DefaultRouter()
#router.register(r'pelicula', views.PeliculaView)
#router.register(r'cliente', views.ClienteView)
#router.register(r'entrada', views.EntradaView)
#router.register(r'factura', views.FacturaView)
#router.register(r'producto', views.ProductoView)
#router.register(r'funcion', views.FuncionView)
#router.register(r'sala', views.SalaView)
#router.register(r'sede', views.SedeView)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    re_path(r'^api/peliculas/$', views.peliculas_list),
    re_path(r'^api/peliculas/([0-9]+)$', views.peliculas_detail),

    re_path(r'^api/clientes/$', views.clientes_list),
    re_path(r'^api/clientes/([0-9]+)$', views.clientes_detail),
    
    re_path(r'^api/entradas/$', views.entradas_list),
    re_path(r'^api/entradas/([0-9]+)$', views.entradas_detail),

    re_path(r'^api/facturas/$', views.facturas_list),
    re_path(r'^api/facturas/([0-9]+)$', views.facturas_detail),

    re_path(r'^api/productos/$', views.productos_list),
    re_path(r'^api/productos/([0-9]+)$', views.productos_detail),

    re_path(r'^api/funciones/$', views.funciones_list),
    re_path(r'^api/funciones/([0-9]+)$', views.funciones_detail),

    re_path(r'^api/salas/$', views.salas_list),
    re_path(r'^api/salas/([0-9]+)$', views.salas_detail),

    re_path(r'^api/sedes/$', views.salas_list),
    re_path(r'^api/sedes/([0-9]+)$', views.sedes_detail),
]