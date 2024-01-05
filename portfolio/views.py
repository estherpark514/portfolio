from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from .models import PortfolioItem, AboutMe, TechnicalSkill, Language, PersonalInfo, Category
from django.http import HttpResponse, HttpResponseRedirect
from wsgiref.util import FileWrapper
from django.core.mail import send_mail
from django.urls import reverse

def home(request):
    technical_skills = TechnicalSkill.objects.all()
    languages = Language.objects.all()
    personal_info = PersonalInfo.objects.first()

    # Fetch all portfolio items
    portfolio_items = PortfolioItem.objects.all()

    # Filter by category if specified in the URL
    category_slug = request.GET.get('category')
    if category_slug and category_slug != 'all':
        category = Category.objects.get(name=category_slug)
        portfolio_items = portfolio_items.filter(categories=category)

    # Paginate the items with 3 items per page
    paginator = Paginator(portfolio_items, 3)
    page = request.GET.get('page')

    try:
        portfolio_items = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        portfolio_items = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        portfolio_items = paginator.page(paginator.num_pages)
    
    return render(request, 'portfolio/home.html', {
        'portfolio_items': portfolio_items,
        'current_category': category_slug,
        'technical_skills': technical_skills,
        'languages': languages,
        'personal_info': personal_info,
    })

def download_pdf(request):
    filename = 'faults.pdf'
    content = FileWrapper(filename)
    response = HttpResponse(content, content_type='application/pdf')
    response['Content-Length'] = os.path.getsize(filename)
    response['Content-Disposition'] = 'attachment; filename=%s' % 'faults.pdf'
    return response
