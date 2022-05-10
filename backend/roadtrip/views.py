from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import RoadTripSerializer, ThingsTodoSerializer
from .models import RoadTrip, ThingsTodo
# Create your views here.

class RoadTripView(generics.ListCreateAPIView):
    serializer_class = RoadTripSerializer
    queryset = RoadTrip.objects.all()

class RoadTripDetail(generics.RetrieveDestroyAPIView):
    serializer_class = RoadTripSerializer
    queryset = RoadTrip.objects.all()
    
class ThingsTodoView(generics.ListCreateAPIView):
    serializer_class = ThingsTodoSerializer
    queryset = ThingsTodo.objects.all()

class ThingsTodoDetail(generics.RetrieveDestroyAPIView):
    serializer_class = ThingsTodoSerializer
    queryset = ThingsTodo.objects.all()