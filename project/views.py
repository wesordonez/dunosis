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
  
def service_details_view(request):
    return render(request, './services/service-details.html', status=200)

def portfolio_view(request):
    return render(request, 'portfolio-overview.html', status=200)

def portfolio_details_view(request):
    return render(request, 'portfolio-details.html', status=200)