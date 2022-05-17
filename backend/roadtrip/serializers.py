from rest_framework import serializers
from .models import RoadTrip, ThingsTodo

class RoadTripSerializer(serializers.ModelSerializer):
    thingstodo = serializers.StringRelatedField(many = True, read_only = True)
    class Meta:
        model = RoadTrip
        fields = ('id', 'name', 'description', 'time', 'thingstodo', 'created_at', 'user')
    

class ThingsTodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThingsTodo
        fields = ('id', 'city', 'state', 'category', 'name', 'time', 'description')