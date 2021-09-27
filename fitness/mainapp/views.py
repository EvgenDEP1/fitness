from django.views.generic import ListView
from mainapp.serializers import ServiceSerializer
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Service


class ServiceList(ListView):
    model = Service


class ServiceViewSet(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer