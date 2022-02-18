from django.core.management.base import BaseCommand

from mainapp.models import Trainer


class Command(BaseCommand):
    def handle(self, *args, **options):
        item = 0
        while item <= 4:
            Trainer.objects.get_or_create(
                name=f'Имя {item + 1}',
                surname=f'Фамилия {item + 1}',
                patronymic=f'Отчество {item + 1}',
                address='адрес'
            )
            item += 1
        print('Тренеры готовы')
