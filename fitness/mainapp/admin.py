from django.contrib import admin

from mainapp.models import Service, Trainer, Recording

admin.site.register(Service)
admin.site.register(Trainer)
admin.site.register(Recording)