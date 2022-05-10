from django.urls import path
from .views import RoadTripView, RoadTripDetail

app_name = 'road_trip_planner'

urlpatterns =- [
    path('roadtrip/', RoadTripView.as_view(), name = 'roadtriplist'),
    path('roadtrip/<int:pk>/', RoadTripDetail.as_view(), name = 'roadtripview'),
]