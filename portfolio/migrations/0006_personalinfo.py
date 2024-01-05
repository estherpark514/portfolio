# Generated by Django 4.2.8 on 2024-01-02 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("portfolio", "0005_alter_language_name_alter_language_proficiency_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="PersonalInfo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("institute", models.CharField(max_length=255)),
                ("degree", models.CharField(max_length=255)),
                ("image", models.ImageField(upload_to="profile_images/")),
            ],
        ),
    ]