
from django.conf import settings

from django.shortcuts import redirect
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap

from django.views.generic import TemplateView

from django.contrib import admin
from django.urls import path

from django.urls import path, include, re_path

from .views import (rate_limiter_view, view_404, 
                        handler_403, home_view, about_view, about_details_view, landing_view, services_view, webdev_service_view, socialmedia_service_view, portfolio_view, portfolio_details_view) #subscribe_view

from .sitemaps import StaticSitemap
from blog.sitemaps import BlogSitemap

handler404 = view_404

handler403 = handler_403

admin.site.site_header = 'Admin panel'           
admin.site.index_title = 'Site Admin'              
admin.site.site_title = 'Admin site'
admin.site.site_url = "" 


sitemap_dict = {'sitemaps': {'static': StaticSitemap, 'blog': BlogSitemap}}


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('user/', include('user.urls')),
    path('blog/', include('blog.urls')),
    path('contact-us/', include('inquiry.urls')),
    

    path('sitemap.xml', sitemap, sitemap_dict, name='django.contrib.sitemaps.views.sitemap'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type='text/plain')),
    path('ratelimit-error/', rate_limiter_view, name='ratelimit-error'),

    # add new path here

    path('', home_view, name='home'),
    path('about/', about_view, name='about'),
    path('about-details/', about_details_view, name='about-details'),
    path('landing/', landing_view, name='landing'),
    path('services/', services_view, name='services'),
    path('services/web-development/', webdev_service_view, name='web-development'),
    path('services/social-media/', socialmedia_service_view, name='social-media'),
    path('portfolio/', portfolio_view, name='portfolio'),
    path('portfolio-details/', portfolio_details_view, name='portfolio-details'),

    path("__reload__/", include("django_browser_reload.urls")),
]

if settings.DEBUG:
   urlpatterns +=  []

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
   
urlpatterns += [ re_path(r'^.*/$', view_404, name='page_not_found'),]