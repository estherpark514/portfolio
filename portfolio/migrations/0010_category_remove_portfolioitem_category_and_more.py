# Generated by Django 4.2.8 on 2024-01-02 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "portfolio",
            "0009_portfolioitem_created_at_portfolioitem_updated_at_and_more",
        ),
    ]

    operations = [
        migrations.CreateModel(
            name="Category",
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
                ("name", models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.RemoveField(model_name="portfolioitem", name="category",),
        migrations.AddField(
            model_name="portfolioitem",
            name="categories",
            field=models.ManyToManyField(
                related_name="portfolio_items", to="portfolio.category"
            ),
        ),
    ]