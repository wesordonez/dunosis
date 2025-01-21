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
    return render(request, 'about.html', status=200)

def service_details_view(request):
    faq_list = [
        {"question": "How long should a business plan be?", "answer": "There are many variations of passages of Lorem Ipsum available alternate. In some form, by injected humor."},
        {"question": "What is included in your service?", "answer": "There are many variations of passages of Lorem Ipsum available alternate. In some form, by injected humor."},
        {"question": "What type of company is measured?", "answer": "There are many variations of passages of Lorem Ipsum available alternate. In some form, by injected humor."}
    ]
    return render(request, 'service-details.html',{'faq_list': faq_list}, status=200)

def portfolio_details_view(request):
    return render(request, 'portfolio-details.html', status=200)