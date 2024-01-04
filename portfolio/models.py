from django.db import models
from django.utils import timezone

class TruncatingTextField(models.TextField):
    def __init__(self, *args, **kwargs):
        self.truncate_at = kwargs.pop('truncate_at', 40)
        super().__init__(*args, **kwargs)

    def contribute_to_class(self, cls, name, **kwargs):
        super().contribute_to_class(cls, name, **kwargs)
        setattr(cls, self.name + '_truncated', self.create_truncated_field())

    def create_truncated_field(self):
        return models.CharField(max_length=self.truncate_at * 4, editable=False)

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class PortfolioItem(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100, null=True, blank=True) 
    duration = models.CharField(max_length=100, blank=True, null=True)  # Add a duration field
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio_images/')
    categories = models.ManyToManyField(Category)

    def short_description(self):
        return self.description[:50]

    def __str__(self):
        return self.title


class AboutMe(models.Model):
    content = models.TextField()

    def __str__(self):
        return "About Me Content"
    
class TechnicalSkill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50, choices=[("Novice", "Novice"), ("Advanced Beginner", "Advanced Beginner"), ("Competent", "Competent"), ("Proficient", "Proficient"), ("Expert", "Expert")])

    def proficiency_percentage(self):
        proficiency_mapping = {
            "Novice": 20,
            "Advanced Beginner": 40,
            "Competent": 60,
            "Proficient": 80,
            "Expert": 100,
        }
        return proficiency_mapping.get(self.proficiency, 0)

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50, choices=[("Novice", "Novice"), ("Advanced Beginner", "Advanced Beginner"), ("Competent", "Competent"), ("Proficient", "Proficient"), ("Expert", "Expert")])

    def proficiency_percentage(self):
        proficiency_mapping = {
            "Novice": 20,
            "Advanced Beginner": 40,
            "Competent": 60,
            "Proficient": 80,
            "Expert": 100,
        }
        return proficiency_mapping.get(self.proficiency, 0)

    def __str__(self):
        return self.name
    
class Resume(models.Model):
    file = models.FileField(upload_to='resumes/')

    def __str__(self):
        return 'Resume'

class PersonalInfo(models.Model):
    name = models.CharField(max_length=255)
    institute = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    image = models.ImageField(upload_to='profile_images/')

    def __str__(self):
        return self.name