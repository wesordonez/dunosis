from django.conf import settings 
from django.http import JsonResponse
from django.http import HttpResponseForbidden
from django.shortcuts import render, HttpResponse
from django.views.decorators.http import require_http_methods

from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from django_ratelimit.exceptions import Ratelimited



def rate_limiter_view(request, *args, **kwargs):
    return render(request, 'ratelimit.html', status=429)


def view_404(request, *args, **kwargs):
    return render(request, '404.html', status=404)


def handler_403(request, exception=None):
    if isinstance(exception, Ratelimited):
        return HttpResponse('Sorry too many requests, please wait', status=429)
    return HttpResponseForbidden('Forbidden')


def home_view(request):
    return render(request, 'home.html', status=200)

def about_view(request):
    return render(request, './about/about.html', status=200)

def about_details_view(request):
    return render(request, './about/about-details.html', status=200)

def landing_view(request):
    return render(request, 'landing.html', status=200)

def services_view(request):
    return render(request, './services/services.html', status=200)
  
def webdev_service_view(request):
    return render(request, './services/web-development.html', status=200)

def socialmedia_service_view(request):
    return render(request, './services/social-media.html', status=200)

def marketing_service_view(request):
    return render(request, './services/marketing.html', status=200)

def consulting_service_view(request):
    return render(request, './services/consulting.html', status=200)

def maintenance_service_view(request):
    return render(request, './services/maintenance.html', status=200)

def graphic_design_service_view(request):
    return render(request, './services/graphic-design.html', status=200)

def portfolio_view(request):
    return render(request, './portfolio/portfolio.html', status=200)

portfolio_projects = [
    {"slug": "feast", "url_name": "feast", "title": "Feast"},
    {"slug": "bosque-buenavista", "url_name": "bosque-buenavista", "title": "Bosques de Buena Vista"},
    {"slug": "ciudad-productiva", "url_name": "ciudad-productiva", "title": "Ciudad Productiva"},
    {"slug": "metaltela", "url_name": "metaltela", "title": "Metaltela"},
    {"slug": "cpanda-website", "url_name": "cpanda-website", "title": "CPanda Website"},
    {"slug": "kneadsweets-website", "url_name": "kneadsweets-website", "title": "Knead Sweets Website"},
    {"slug": "prcc-dashboard", "url_name": "prcc-dashboard", "title": "PRCC Dashboard"},
    {"slug": "cafe-ignacio", "url_name": "cafe-ignacio", "title": "Café Ignacio"},
    {"slug": "guayaba", "url_name": "guayaba", "title": "Guayaba"},
    {"slug": "colonia-jardin", "url_name": "jardin", "title": "Colonia Jardín"},
    {"slug": "metalmallas", "url_name": "metalmallas", "title": "Metalmallas"},
    {"slug": "pantanal", "url_name": "pantanal", "title": "Pantanal"},
    # Add more projects here as needed
]

def get_navigation_context(slug):
    current_index = next((i for i, p in enumerate(portfolio_projects) if p["slug"] == slug), None)
    previous_project = portfolio_projects[current_index - 1] if current_index > 0 else None
    next_project = portfolio_projects[current_index + 1] if current_index < len(portfolio_projects) - 1 else None
    return previous_project, next_project

def cpanda_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("cpanda-website")
    return render(request, './portfolio/cpanda-website.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def kneadsweets_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("kneadsweets-website")
    return render(request, './portfolio/kneadsweets-website.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def prcc_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("prcc-dashboard")
    return render(request, './portfolio/prcc-dashboard.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def cafe_ignacio_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("cafe-ignacio")
    return render(request, './portfolio/cafe-ignacio.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def guayaba_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("guayaba")
    return render(request, './portfolio/guayaba.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def jardin_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("colonia-jardin")
    return render(request, './portfolio/colonia-jardin.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def metaltela_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("metaltela")
    return render(request, './portfolio/metaltela.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def metalmalla_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("metalmallas")
    return render(request, './portfolio/metalmallas.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def pantanal_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("pantanal")
    return render(request, './portfolio/pantanal.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def ciudad_productiva_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("ciudad-productiva")
    return render(request, './portfolio/ciudad-productiva.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def bosque_buenavista_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("bosque-buenavista")
    return render(request, './portfolio/bosque-buenavista.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)

def feast_portfolio_details_view(request):
    previous_project, next_project = get_navigation_context("feast")
    return render(request, './portfolio/feast.html', {
        "previous_project": previous_project,
        "next_project": next_project,
    }, status=200)
