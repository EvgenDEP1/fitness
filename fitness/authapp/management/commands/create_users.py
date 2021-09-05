from django.core.management.base import BaseCommand

from authapp.models import UserProfile


class Command(BaseCommand):
    def handle(self, *args, **options):
        item = 0
        while item <= 9:
            UserProfile.objects.create_user(f'user{item + 1}', password='pass')
            item += 1
        UserProfile.objects.create_superuser('kpk', password='pass')
        print('users created')