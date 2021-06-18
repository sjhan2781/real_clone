# Generated by Django 3.2.4 on 2021-06-17 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(default='', max_length=50, unique=True)),
                ('username', models.CharField(default='', max_length=30, unique=True)),
                ('phone', models.CharField(default='', max_length=11, unique=True)),
                ('password', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'account',
            },
        ),
        migrations.AddConstraint(
            model_name='account',
            constraint=models.UniqueConstraint(fields=('email', 'username', 'phone'), name='unique information'),
        ),
    ]
