from django.contrib import admin
from .models import PortfolioItem, AboutMe, TechnicalSkill, Language, Resume, PersonalInfo, Category

@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description', 'display_categories')

    def display_categories(self, obj):
        return ", ".join([category.name for category in obj.categories.all()])
    display_categories.short_description = 'Categories'

@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    pass

admin.site.register(TechnicalSkill)
admin.site.register(Language)
admin.site.register(Resume)
admin.site.register(PersonalInfo)
admin.site.register(Category)
