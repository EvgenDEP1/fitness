from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _
from django.db import models


class UserProfile(AbstractUser):
    phone_regex = RegexValidator(regex=r'^\d{10}$',
                                 message="Введите последние 10 цифр номера телефона. в формате: '1234567891'.")

    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_CHOICES = (
        (GENDER_MALE, _('male')),
        (GENDER_FEMALE, _('female')),
    )

    date_birth = models.DateField(_('birth date'), null=True)
    gender = models.CharField(_('gender'), max_length=1, choices=GENDER_CHOICES, blank=True)
    phone_number = models.CharField(verbose_name='номер телефона', validators=[phone_regex], max_length=12, blank=True)
    address = models.CharField(verbose_name='адрес', max_length=128)
    diseases = models.TextField()
