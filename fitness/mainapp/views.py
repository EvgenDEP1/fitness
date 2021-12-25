from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Service, Recording, Trainer
from mainapp.serializers import ServiceSerializer, RecordingSerializer, TrainerSerializer


class ServiceList(ListView):
    model = Service


class RecordingList(ListView):
    model = Recording


class TrainerList(ListView):
    model = Trainer


class ServiceViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    # queryset = Service.objects.all()
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class RecordingViewSet(ModelViewSet):
    queryset = Recording.objects.all()
    serializer_class = RecordingSerializer


class TrainerViewSet(ModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

