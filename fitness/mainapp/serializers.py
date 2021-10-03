from rest_framework.serializers import ModelSerializer

from mainapp.models import Service
from authapp.models import UserProfile


class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'id',
            'first_name',
            'last_name',
            'username',
        )
