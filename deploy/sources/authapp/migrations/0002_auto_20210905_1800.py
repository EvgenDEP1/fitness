# Generated by Django 3.2.7 on 2021-09-05 13:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='address',
            field=models.CharField(default=0, max_length=128, verbose_name='адрес'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='phone_number',
            field=models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Номер телефона необходимо вводить в формате: '+799999999'. Допускается до 15 цифр.", regex='^\\+?1?\\d{7,15}$')], verbose_name='номер телефона'),
        ),
    ]
