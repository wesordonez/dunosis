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

def cpanda_portfolio_details_view(request):
    return render(request, './portfolio/cpanda-website.html', status=200)

def kneadsweets_portfolio_details_view(request):
    return render(request, './portfolio/kneadsweets-website.html', status=200)

def prcc_portfolio_details_view(request):
    return render(request, './portfolio/prcc-dashboard.html', status=200)

def cafe_ignacio_portfolio_details_view(request):
    return render(request, './portfolio/cafe-ignacio.html', status=200)

def guayaba_portfolio_details_view(request):
    return render(request, './portfolio/guayaba.html', status=200)

def jardin_portfolio_details_view(request):
    return render(request, './portfolio/colonia-jardin.html', status=200)

def metaltela_portfolio_details_view(request):
    return render(request, './portfolio/metaltela.html', status=200)

def metalmalla_portfolio_details_view(request):
    return render(request, './portfolio/metalmallas.html', status=200)

def pantanal_portfolio_details_view(request):
    return render(request, './portfolio/pantanal.html', status=200)

def ciudad_productiva_portfolio_details_view(request):
    return render(request, './portfolio/ciudad-productiva.html', status=200)

def bosque_buenavista_portfolio_details_view(request):
    return render(request, './portfolio/bosque-buenavista.html', status=200)
