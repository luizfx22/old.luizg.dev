# Generated by Django 3.0.5 on 2020-08-16 17:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20200815_2310'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='tnt',
            new_name='text',
        ),
    ]
