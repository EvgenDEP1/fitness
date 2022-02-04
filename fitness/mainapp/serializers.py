from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from mainapp.models import Service, Recording, Trainer
from authapp.models import UserProfile


class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class RecordingSerializer(ModelSerializer):
    class Meta:
        model = Recording
        fields = '__all__'


class TrainerSerializer(ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'


# class UserProfileSerializer(ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = (
#             'id',
#             'first_name',
#             'last_name',
#             'username',
#         )

class UserProfileSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'last_name',
            'username',
            'email',
            'password',
            'phone_number'
        )

    def create(self, validated_data):
        user = super(UserProfileSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
