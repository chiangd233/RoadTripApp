from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RoadTripSerializer, ThingsTodoSerializer
from .models import RoadTrip, ThingsTodo
# Create your views here.

class RoadTripView(viewsets.ModelViewSet):
    serializer_class = RoadTripSerializer
    queryset = RoadTrip.objects.all()
    
class ThingsTodoView(viewsets.ModelViewSet):
    serializer_class = ThingsTodoSerializer
    queryset = ThingsTodo.objects.all()