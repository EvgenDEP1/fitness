from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet

from authapp.models import UserProfile
from mainapp.models import Service
from mainapp.serializers import ServiceSerializer, UserProfileSerializer


class ServiceList(ListView):
    model = Service


class RecordingList(ListView):
    model = Service


class ServiceViewSet(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
