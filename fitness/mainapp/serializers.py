from rest_framework.serializers import ModelSerializer

from mainapp.models import Service, Recording, Trainer
# from authapp.models import UserProfile


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
