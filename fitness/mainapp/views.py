from django.views.generic import ListView
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from authapp.models import UserProfile
from mainapp.models import Service, Recording, Trainer
from mainapp.serializers import ServiceSerializer, RecordingSerializer, TrainerSerializer, UserProfileSerializer


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
    permission_classes = [IsAuthenticated]
    queryset = Recording.objects.all()
    serializer_class = RecordingSerializer


class TrainerViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer


class UserProfileViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class CreateUserView(CreateModelMixin, GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]
