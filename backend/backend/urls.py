"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from rest_framework import routers
from roadtrip import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', views.RoadTripView.as_view(), name = 'roadtripview'),
    path('api/create', views.RoadTripCreate.as_view(), name = 'roadtripcreate'),
    path('api/<int:pk>', views.RoadTripDetail.as_view(), name = 'roadtripdetail'),
    path('api/thingstodo', views.ThingsTodoView.as_view(), name = 'thingstodoview'),
    path('api/thingstodo/create', views.ThingsTodoCreate.as_view(), name = 'thingstodocreate'),
    path('api/thingstodo/<int:pk>', views.ThingsTodoDetail.as_view(), name = 'thingstododetail'),
    path('api/user/', include('users.urls', namespace = 'users')),
    path('api-auth/', include('rest_framework.urls', namespace = 'rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
]
