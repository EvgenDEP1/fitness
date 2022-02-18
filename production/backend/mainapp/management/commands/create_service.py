from django.core.management.base import BaseCommand

from mainapp.models import Service


class Command(BaseCommand):
    def handle(self, *args, **options):
        item = 0
        while item <= 4:
            Service.objects.get_or_create(
                name=f'Услуга {item + 1}',
                price=200,
                desc='тест'
            )
            item += 1
        print('Услуги готовы')
