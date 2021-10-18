from django.core.validators import RegexValidator
from django.db import models


class Service(models.Model):
    name = models.CharField(verbose_name='название услуги', max_length=128, unique=True)
    price = models.DecimalField(verbose_name='стоимость занятия за час в рублях',
                                max_digits=6, decimal_places=2, default=0)
    desc = models.TextField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'


class Trainer(models.Model):

    GENDER_MALE = 'м'
    GENDER_FEMALE = 'ж'
    GENDER_CHOICES = (
        (GENDER_MALE, ('мужской')),
        (GENDER_FEMALE, ('женский')),
    )

    name = models.CharField(verbose_name='имя', max_length=32)
    surname = models.CharField(verbose_name='фамилия', max_length=32)
    patronymic = models.CharField(verbose_name='отчество', max_length=32, blank=True)
    gender = models.CharField(verbose_name='пол', max_length=1, choices=GENDER_CHOICES, blank=True)
    address = models.CharField(verbose_name='адрес', max_length=128)
    phone_regex = RegexValidator(regex=r'^\d{10}$',
                                 message="Введите последние 10 цифр номера телефона. в формате: '1234567891'.")
    phone_number = models.CharField(verbose_name='номер телефона', validators=[phone_regex], max_length=12, blank=True)

    def __str__(self):
        return f'{self.name}: {self.surname}: {self.patronymic}'

    class Meta:
        verbose_name = 'Тренер'
        verbose_name_plural = 'Тренеры'


class Recording(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    trainer = models.ManyToManyField(Trainer, verbose_name='тренер')
    user = models.ManyToManyField('authapp.UserProfile', related_name='serv_user')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'запись'
        verbose_name_plural = 'записи'
