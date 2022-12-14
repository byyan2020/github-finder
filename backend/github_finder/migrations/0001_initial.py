# Generated by Django 4.1.1 on 2022-10-08 05:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.CharField(max_length=240)),
                ('avatar_url', models.CharField(max_length=240)),
                ('html_url', models.CharField(max_length=240)),
                ('followers', models.IntegerField()),
                ('followering', models.IntegerField()),
                ('public_repos', models.IntegerField()),
                ('public_gists', models.IntegerField()),
                ('company', models.IntegerField()),
                ('location', models.IntegerField()),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Repository',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('html_url', models.CharField(max_length=240)),
                ('name', models.CharField(max_length=240)),
                ('stargazers_count', models.IntegerField()),
                ('watchers_count', models.IntegerField()),
                ('forks_count', models.IntegerField()),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='github_finder.profile')),
            ],
        ),
    ]
